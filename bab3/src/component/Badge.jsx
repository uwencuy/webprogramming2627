import '../styles/transaksi.css';

export default function Badge({ tipe, children }) {
    if (tipe === undefined && children === undefined) {
        const contohTransaksi = [
            { tipe: 'Pemasukan', nominal: '+ Rp 50.000' },
            { tipe: 'Pengeluaran', nominal: '- Rp 20.000' },
            { tipe: 'Pemasukan', nominal: '+ Rp 150.000' },
            { tipe: 'Pengeluaran', nominal: '- Rp 35.000' },
        ];

        return (
            <div className="d-grid gap-0 p-0">
                {contohTransaksi.map((transaksi, index) => (
                    <Badge key={index} tipe={transaksi.tipe}>
                        {transaksi.nominal}
                    </Badge>
                ))}
            </div>
        );
    }

    const className = tipe === 'Pemasukan' ? 'badge-pemasukan' : 'badge-pengeluaran';
    return <span className={className}>{children}</span>;
}

// Cara pakai: <Badge tipe="Pemasukan">+ Rp 50.000</Badge> misal pada app.jsx