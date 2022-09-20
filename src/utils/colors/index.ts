const colors = (color: string, pos: 'bg' | 'text', kalibrasi: string) => {
    if (pos === 'bg') {
        switch (color) {
            case "blue":
                return 'bg-blue-' + kalibrasi;
            case "black":
                return 'bg-black';
            case "red":
                return 'bg-red-' + kalibrasi;
            case "green":
                return 'bg-green-' + kalibrasi;
            case "yellow":
                return 'bg-yellow-' + kalibrasi;
            case "orange":
                return 'bg-orange-' + kalibrasi;
            default:
                return "bg-blue-" + kalibrasi;
        }
    } else if (pos === 'text') {
        switch (color) {
            case "blue":
                return 'text-blue-' + kalibrasi;
            case "black":
                return 'text-black';
            case "red":
                return 'text-red-' + kalibrasi;
            case "green":
                return 'text-green-' + kalibrasi;
            case "yellow":
                return 'text-yellow-' + kalibrasi;
            case "orange":
                return 'text-orange-' + kalibrasi;
            default:
                return "text-blue-" + kalibrasi;
        }
    }
}

export default colors;