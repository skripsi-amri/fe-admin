import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { DataTable } from "../../../../../src/layout";
import { getBarang } from "../../../../../src/redux/actions";
import { DashboardLayout } from "../../../../../src/template";

const column = [
  {
    title: "nama gudang",
    dataIndex: "gudang",
  },
  {
    title: "qty",
    dataIndex: "qty",
  },
];

function ViewItems(props: { getBarang: (id: string) => Promise<any> }) {
  const router = useRouter();
  const id = router.query.id as string;
  const [detailItem, setDetailItem] = useState({} as any);
  const [dataStok, setDataStok] = useState([]);

  useEffect(() => {
    if (id) {
      props
        .getBarang(id)
        .then((res) => {
          setDetailItem(res.data.result);
          setDataStok(res.data.result.detail_gudang);
        })
        .catch((err) => console.log(err));
    }
  }, [props, id]);

  return (
    <DashboardLayout
      pageName="Detail Items"
      icon="icon-park-outline:ad-product"
      arrowBack={true}
      main={
        <div>
          <div className="mb-6">
            <h1 className="text-xl capitalize text-sky-800 font-bold mb-4">
              Detail Barang
            </h1>
            <ul className="capitalize font-bold">
              <li className="mb-2">
                Nama Barang:{" "}
                <span className="font-semibold">{detailItem.nama_item}</span>
              </li>
              <li className="mb-2">
                Ukuran:{" "}
                <span className="font-semibold">{detailItem.ukuran}</span>
              </li>
              <li className="mb-2">
                Nama merk:{" "}
                <span className="font-semibold">{detailItem.merk}</span>
              </li>
              <li className="mb-2">
                Total Stok:{" "}
                <span className="font-semibold">{detailItem.stok}</span>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl capitalize text-sky-800 font-bold mb-4">
              Detail Stok
            </h1>
            <DataTable
              addData={false}
              column={column}
              data={dataStok}
              rowsPerPage={[10, 25, 50, 100]}
            />
          </div>
        </div>
      }
    />
  );
}

const actions = (dispatch: any) => ({
  getBarang: (id: string) => dispatch(getBarang(id)),
});

export default connect(null, actions)(ViewItems);
