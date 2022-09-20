import { CardWidget } from "../../components/molecules";

export default function CardsWidget() {
  return (
    <div className="flex flex-col md:flex-row w-full justify-between">
      <CardWidget
        icon="mdi:currency-usd"
        title={"Barang Masuk"}
        subtitle={"2 item"}
        bgColor="blue"
      />
      <CardWidget
        icon="mdi:account-group-outline"
        title={"Barang Keluar"}
        subtitle={"3 item"}
        bgColor="green"
      />
      <CardWidget
        icon="icon-park-outline:ad-product"
        title={"Total Items"}
        subtitle={"232 Items"}
        bgColor="gray"
      />
    </div>
  );
}
