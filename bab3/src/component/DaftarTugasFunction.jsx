import { useState, useEffect } from 'react';

export default function DaftarTugasFunction() {
  const [tugas, setTugas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Hook Lifecycle untuk Data Fetching
  useEffect(() => {
    // Definisikan fungsi async lokal di dalam useEffect
    const ambilData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setTugas(data); // Simpan hasil ke state
      } catch (error) {
        console.error('Gagal memuat data dari API:', error);
      } finally {
        setIsLoading(false); // Matikan status Loading
      }
    };

    // Eksekusi fungsi
    ambilData();
  }, []); // Array dependensi kosong [] memastikan eksekusi hanya berjalan 1x saat mounting

  if (isLoading) return <p>Memuat data tugas dari server...</p>;

  return (
    <ul>
      {tugas.slice(0, 5).map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}