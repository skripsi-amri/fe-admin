import { IconButton } from "../../../src/components/atoms";
import { DataTable } from "../../../src/layout";
import { DashboardLayout } from "../../../src/template";

const column = [
  {
    title: "Nama Item",
    dataIndex: "nama_item",
  },
  {
    title: "Nama gudang",
    dataIndex: "nama_gudang",
  },
  {
    title: "Tanggal keluar",
    dataIndex: "tanggal_keluar",
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
    nama_item: "Murano White",
    nama_gudang: "Gudang 1",
    tanggal_keluar: "18 04 2022",
  },
];

export default function BarangKeluar() {
  return (
    <DashboardLayout
      pageName="Barang Keluar"
      icon="bxs:archive-out"
      main={<DataTable column={column} data={data} rowsPerPage={[5, 10, 50, 100]} />}
    />
  );
}
