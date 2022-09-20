import { DataTable } from "../../../src/layout";
import { DashboardLayout } from "../../../src/template";

export default function BarangMasuk() {
  return (
    <DashboardLayout
      pageName="Barang Masuk"
      icon="bxs:archive-in"
      main={<DataTable column={[]} data={[]} rowsPerPage={[5, 10, 50, 100]} />}
    />
  );
}
