
import { Card, Button, Badge, Alert, Dropdown, ButtonGroup } from 'react-bootstrap';

export default function CardStatusDemo() {
  return (
    <Card className="shadow-sm mx-auto" style={{ width: '100%' }}>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <span>Laporan Dompet</span>
        <Badge bg="success">Aktif</Badge>
      </Card.Header>
      <Card.Body>
        <Alert variant="info" className="py-2">
          Anggaran tersisa dalam batas aman.
        </Alert>
        <Card.Title className="fs-3">Rp 3.450.000</Card.Title>
        <Card.Text className="text-muted">
          Total pemasukan bulan ini telah melebihi target.
        </Card.Text>

        <Dropdown as={ButtonGroup}>
          <Button variant="primary">Ekspor Laporan</Button>
          <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item href="#/pdf">Format PDF</Dropdown.Item>
            <Dropdown.Item href="#/excel">Format Excel</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Body>
    </Card>
  );
}