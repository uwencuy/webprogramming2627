
import { useState } from 'react';
import { Button, Alert, Spinner, Form } from 'react-bootstrap';

function FormTambahTransaksi() {
    const [nominal, setNominal] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [sukses, setSukses] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSukses(false);

        try {
            const response = await fetch('https://api.example.com/transaksi', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nominal: Number(nominal) }),
            });

            if (!response.ok) {
                throw new Error('Gagal menyimpan data transaksi ke server.');
            }

            setSukses(true);
            setNominal(''); 
        } catch (err) {
        setError(err.message);
        } finally {
        setLoading(false); 
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="p-3 border rounded">
        {error && <Alert variant="danger">{error}</Alert>}
        {sukses && (
            <Alert variant="success">
            Transaksi berhasil disimpan!
            </Alert>
        )}

        <Form.Group className="mb-3">
            <Form.Label>Nominal Transaksi (Rp)</Form.Label>
            <Form.Control
            type="number"
            value={nominal}
            onChange={(e) => setNominal(e.target.value)}
            placeholder="Masukkan nominal"
            required
            />
        </Form.Group>

        <Button
            variant="primary"
            type="submit"
            disabled={loading}
        >
            {loading ? (
            <>
                <Spinner
                as="span"
                animation="border"
                size="sm"
                className="me-2"
                />
                Menyimpan...
            </>
            ) : (
            'Simpan Transaksi'
            )}
        </Button>
        </Form>
    );
}

export default FormTambahTransaksi;