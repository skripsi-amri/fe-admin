import { DataTable } from "../../../src/layout";
import { DashboardLayout } from "../../../src/template";

export default function Gudang() {
  return (
    <DashboardLayout
      pageName="Gudang"
      icon="mdi:warehouse"
      main={<DataTable column={[]} data={[]} rowsPerPage={[5, 10, 50, 100]} />}
    />
  );
}
