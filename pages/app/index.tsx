import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { CardsWidget } from "../../src/layout";
import { getDataWidget } from "../../src/redux/actions";
import { DashboardLayout } from "../../src/template";

function App(props: { getDataWidget: () => Promise<any> }) {
  const [data, setData] = useState({} as any);
  useEffect(() => {
    props
      .getDataWidget()
      .then((res) => {
        setData(res.data.result);
      })
      .catch((err) => console.log(err));
  }, [props]);

  return (
    <DashboardLayout
      pageName="Dashboard"
      icon="ci:dashboard"
      main={
        <div>
          <CardsWidget data={data} />
        </div>
      }
    />
  );
}

const actions = (dispatch: any) => ({
  getDataWidget: () => dispatch(getDataWidget()),
});

export default connect(null, actions)(App);
