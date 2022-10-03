import { CardWidget } from "../../components/molecules";

export default function CardsWidget(props: { data: any }) {
  return (
    <div className="flex flex-col md:flex-row w-full justify-between">
      <CardWidget
        icon="bxs:archive-in"
        title={"Barang Masuk"}
        subtitle={props.data.jumlah_barang_masuk}
        bgColor="blue"
      />
      <CardWidget
        icon="bxs:archive-out"
        title={"Barang Keluar"}
        subtitle={props.data.jumlah_barang_keluar}
        bgColor="green"
      />
      <CardWidget
        icon="icon-park-outline:ad-product"
        title={"Total Items"}
        subtitle={props.data.jumlah_barang}
        bgColor="gray"
      />
    </div>
  );
}
