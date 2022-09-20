export function currencyFormat(num: number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(
        num
    )
}

export function percentFormat(num: number) {
    return new Intl.NumberFormat("id-ID", {
        style: "percent",
        minimumFractionDigits: 0
    }).format(
        num
    )
}