import { IconButton } from "../../../../src/components/atoms";
import { DataTable } from "../../../../src/layout";
import { DashboardLayout } from "../../../../src/template";

const column = [
  {
    title: "Nama Items",
    dataIndex: "nama_items",
  },
  {
    title: "Brand",
    dataIndex: "nama_brand",
  },
  {
    title: "Ukuran",
    dataIndex: "nama_ukuran",
  },
  {
    title: "Stok",
    dataIndex: "stok",
  },
  {
    title: "aksi",
    type: "custom",
    cell: (row: any) => (
      <div className="text-center">
        <IconButton
          other={"mr-3"}
          backgroundColor="transparent"
          color="blue"
          icon="akar-icons:eye"
          onClick={() => {}}
        />
        <IconButton
          other={"mr-3"}
          backgroundColor="transparent"
          color="orange"
          icon="bxs:edit"
          onClick={() => {}}
        />
        <IconButton
          backgroundColor="transparent"
          color="red"
          icon="bi:trash-fill"
          onClick={() => {}}
        />
      </div>
    ),
  },
];

const data = [
  {
    nama_items: "Murano White",
    nama_brand: "Asia Tiles",
    nama_ukuran: "40 x 40",
    stok: 23,
  },
];

export default function Items() {
  return (
    <DashboardLayout
      pageName="Items"
      icon="icon-park-outline:ad-product"
      main={
        <DataTable column={column} data={data} rowsPerPage={[5, 10, 50, 100]} />
      }
    />
  );
}
