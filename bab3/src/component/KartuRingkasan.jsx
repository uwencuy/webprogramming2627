export default function KartuRingkasan() {
    const cardStyle = {
        padding: '20px',
        border: '1px solid #dee2e6',
        borderRadius: '6px',
        marginBottom: '15px'
    };
    const textStyle = {
        fontWeight: 'bold',
        color: '#0d6efd'
    };
    return (
        <div style={cardStyle}>
            <p style={textStyle}>Total Saldo: Rp 2.500.000</p>
        </div>
    );
}