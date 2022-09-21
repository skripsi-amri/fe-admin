import { IconButton } from "../../../src/components/atoms";
import { DataTable } from "../../../src/layout";
import { DashboardLayout } from "../../../src/template";

const column = [
  {
    title: "Nama Gudang",
    dataIndex: "nama_gudang",
  },
  {
    title: "Alamat Gudang",
    dataIndex: "alamat",
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
    nama_gudang: "Gudang 1",
    alamat: "JL.Teuku Umar No 90",
  },
];

export default function Gudang() {
  return (
    <DashboardLayout
      pageName="Gudang"
      icon="mdi:warehouse"
      main={
        <DataTable column={column} data={data} rowsPerPage={[5, 10, 50, 100]} />
      }
    />
  );
}
