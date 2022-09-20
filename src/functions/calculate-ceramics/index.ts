const calculate_ceramics = (data: {
    type: string;
    ukuran: string;
    panjang: number;
    lebar: number;
    tinggi: number;
}) => {
    const { type, ukuran, panjang, lebar, tinggi } = data;
    if (type === "keramik-lantai") {
        if (
            ukuran === "20 x 20" ||
            ukuran === "25 x 25" ||
            ukuran === "50 x 50" ||
            ukuran === "25 x 40" ||
            ukuran === "20 x 25" ||
            ukuran === "25 x 50"
        ) {
            return {
                diameter_ruang: panjang * lebar,
                kebutuhan_keramik: Math.ceil(panjang * lebar),
                ukuran: ukuran,
                diameter_perdus: 1,
            };
        } else if (ukuran === "40 x 40" || ukuran === "20 x 40") {
            return {
                diameter_ruang: panjang * lebar,
                kebutuhan_keramik: Math.ceil((panjang * lebar) / 0.96),
                ukuran: ukuran,
                diameter_perdus: 0.96,
            };
        } else if (ukuran === "30 x 30") {
            return {
                diameter_ruang: panjang * lebar,
                kebutuhan_keramik: Math.ceil((panjang * lebar) / 0.99),
                ukuran: ukuran,
                diameter_perdus: 0.99,
            };
        } else if (ukuran === "30 x 60" || ukuran === "60 x 60 (3)") {
            return {
                diameter_ruang: panjang * lebar,
                kebutuhan_keramik: Math.ceil((panjang * lebar) / 1.08),
                ukuran: ukuran,
                diameter_perdus: 1.08,
            };
        } else if (ukuran === "60 x 60 (4)") {
            return {
                diameter_ruang: panjang * lebar,
                kebutuhan_keramik: Math.ceil((panjang * lebar) / 1.44),
                ukuran: ukuran,
                diameter_perdus: 1.44,
            };
        } else {
            return {
                diameter_ruang: 0,
                kebutuhan_keramik: 0,
                ukuran: '-',
                diameter_perdus: 0,
            };
        }
    } else if (type === "keramik-dinding") {
        if (
            ukuran === "20 x 20" ||
            ukuran === "25 x 25" ||
            ukuran === "50 x 50" ||
            ukuran === "25 x 40" ||
            ukuran === "20 x 25" ||
            ukuran === "25 x 50"
        ) {
            return {
                diameter_ruang: (panjang * lebar).toFixed(1),
                kebutuhan_keramik: Math.ceil((panjang * 2 + lebar * 2) * tinggi),
                ukuran: ukuran,
                diameter_perdus: 1,
            };
        } else if (ukuran === "40 x 40" || ukuran === "20 x 40") {
            return {
                diameter_ruang: (panjang * lebar).toFixed(1),
                kebutuhan_keramik: Math.ceil(
                    ((panjang * 2 + lebar * 2) * tinggi) / 0.96
                ),
                ukuran: ukuran,
                diameter_perdus: 0.96,
            };
        } else if (ukuran === "30 x 30") {
            return {
                diameter_ruang: (panjang * lebar).toFixed(1),
                kebutuhan_keramik: Math.ceil(
                    ((panjang * 2 + lebar * 2) * tinggi) / 0.99
                ),
                ukuran: ukuran,
                diameter_perdus: 0.99,
            };
        } else if (ukuran === "30 x 60" || ukuran === "60 x 60 (3)") {
            return {
                diameter_ruang: (panjang * lebar).toFixed(1),
                kebutuhan_keramik: Math.ceil(
                    ((panjang * 2 + lebar * 2) * tinggi) / 1.08
                ),
                ukuran: ukuran,
                diameter_perdus: 1.08,
            };
        } else if (ukuran === "60 x 60 (4)") {
            return {
                diameter_ruang: (panjang * lebar).toFixed(1),
                kebutuhan_keramik: Math.ceil(
                    ((panjang * 2 + lebar * 2) * tinggi) / 1.44
                ),
                ukuran: ukuran,
                diameter_perdus: 1.44,
            };
        } else {
            return {
                diameter_ruang: 0,
                kebutuhan_keramik: 0,
                ukuran: '-',
                diameter_perdus: 0,
            };
        }
    } else {
        return {
            diameter_ruang: 0,
            kebutuhan_keramik: 0,
            ukuran: '-',
            diameter_perdus: 0,
        };
    }
};


export default calculate_ceramics;