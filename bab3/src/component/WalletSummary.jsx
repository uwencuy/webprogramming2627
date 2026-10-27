import { Container, Card, Button, Badge } from 'react-bootstrap';

export default function WalletSummary() {
  return (
    <Container className="mt-4">
      <Card style={{ width: '22rem' }}>
        <Card.Body>
          <Card.Title>Catatan Keuangan</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Bulan Ini <Badge bg="success">Aktif</Badge>
          </Card.Subtitle>
          <Card.Text>
            Total Pengeluaran: <strong>Rp 1.250.000</strong>
          </Card.Text>
          <Button variant="primary">Tambah Transaksi</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}