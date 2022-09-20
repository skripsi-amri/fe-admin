import { IconButton } from "../../../../src/components/atoms";
import { DataTable } from "../../../../src/layout";
import { DashboardLayout } from "../../../../src/template";

const column = [
  {
    title: "Nama Ukuran",
    dataIndex: "nama_ukuran",
  },
  {
    title: "aksi",
    type: "custom",
    cell: (row: any) => (
      <div className="text-center">
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
    nama_ukuran: "40 x 40"
  }
]

export default function Ukuran() {
  return (
    <DashboardLayout
      pageName="Ukuran"
      icon="icon-park-outline:ad-product"
      main={<DataTable column={column} data={data} rowsPerPage={[5, 10, 50, 100]} />}
    />
  );
}
