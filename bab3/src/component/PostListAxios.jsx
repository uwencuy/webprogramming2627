import { useState, useEffect } from 'react';
import axios from 'axios';

function PostListAxios() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Axios langsung mengembalikan data JSON di dalam
        // properti .data
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        // Axios otomatis mendeteksi error HTTP (misal 404 atau 500)
        console.error("Terjadi kesalahan jaringan:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <p>Memuat data...</p>;
  return (
    <ul>
      {posts.slice(0, 5).map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}