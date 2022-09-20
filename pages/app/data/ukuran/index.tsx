import { DataTable } from "../../../../src/layout";
import { DashboardLayout } from "../../../../src/template";

export default function Ukuran() {
  return (
    <DashboardLayout
      pageName="Ukuran"
      icon="icon-park-outline:ad-product"
      main={<DataTable column={[]} data={[]} rowsPerPage={[5, 10, 50, 100]} />}
    />
  );
}
