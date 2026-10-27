import { Container, Row, Col } from 'react-bootstrap';

export default function LayoutGrid() {
  return (
    <Container className="my-4">
      <Row>
        {/* Mengambil 8 dari 12 kolom pada layar sedang/besar */}
        <Col md={8}>
          <div className="p-3 bg-light border rounded">Daftar Transaksi</div>
        </Col>
        {/* Mengambil 4 dari 12 kolom sisanya */}
        <Col md={4}>
          <div className="p-3 bg-light border rounded">Ringkasan Saldo</div>
        </Col>
      </Row>
    </Container>
  );
}