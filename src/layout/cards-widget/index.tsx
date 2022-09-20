import { CardWidget } from "../../components/molecules";

export default function CardsWidget() {
  return (
    <div className="flex flex-col md:flex-row w-full justify-between">
      <CardWidget
        icon="mdi:currency-usd"
        title={"Pemasok"}
        subtitle={"2 Perusahaan"}
        bgColor="blue"
      />
      <CardWidget
        icon="mdi:account-group-outline"
        title={"Mitra"}
        subtitle={"3 Orang"}
        bgColor="green"
      />
      <CardWidget
        icon="icon-park-outline:ad-product"
        title={"Barang"}
        subtitle={"232 Items"}
        bgColor="gray"
      />
      <CardWidget
        icon="icon-park-solid:sales-report"
        title={"Penjualan"}
        subtitle={"Rp 500.000"}
        bgColor="orange"
      />
    </div>
  );
}
