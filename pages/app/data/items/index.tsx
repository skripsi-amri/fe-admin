import { DataTable } from "../../../../src/layout";
import { DashboardLayout } from "../../../../src/template";

export default function Items() {
  return (
    <DashboardLayout
      pageName="Items"
      icon="icon-park-outline:ad-product"
      main={<DataTable column={[]} data={[]} rowsPerPage={[5, 10, 50, 100]} />}
    />
  );
}
