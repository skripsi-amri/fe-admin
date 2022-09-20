import { CardsWidget } from "../../src/layout";
import { DashboardLayout } from "../../src/template";

export default function App() {
  return (
    <DashboardLayout
      pageName="Dashboard"
      icon="ci:dashboard"
      main={
        <div>
          <CardsWidget />
        </div>
      }
    />
  );
}
