import { DataTable } from "../../../src/layout";
import { DashboardLayout } from "../../../src/template";

export default function BarangKeluar() {
  return (
    <DashboardLayout
      pageName="Barang Keluar"
      icon="bxs:archive-out"
      main={<DataTable column={[]} data={[]} rowsPerPage={[5, 10, 50, 100]} />}
    />
  );
}
