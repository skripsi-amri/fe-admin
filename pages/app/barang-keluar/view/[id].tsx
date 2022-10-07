import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getBarangKeluar } from "../../../../src/redux/actions";
import { DashboardLayout } from "../../../../src/template";
import { DataTable } from "../../../../src/layout";

const column = [
  {
    title: "nama item",
    dataIndex: "item",
  },
  {
    title: "qty",
    dataIndex: "qty",
  },
];

function ViewItems(props: { getBarangKeluar: (id: string) => Promise<any> }) {
  const router = useRouter();
  const id = router.query.id as string;
  const [detailgudang, setDetailGudang] = useState({} as any);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (id) {
      props
        .getBarangKeluar(id)
        .then((res) => {
          setDetailGudang(res.data.result);
          setItems(res.data.result.items);
        })
        .catch((err) => console.log(err));
    }
  }, [props, id]);

  return (
    <DashboardLayout
      pageName="Detail Barang Keluar"
      icon="bxs:archive-in"
      arrowBack={true}
      main={
        <div>
          <div className="mb-6">
            <h1 className="text-xl capitalize text-sky-800 font-bold mb-4">
              Detail
            </h1>
            <ul className="capitalize font-bold">
              <li className="mb-2">
                Tanggal Keluar:{" "}
                <span className="font-semibold">
                  {detailgudang.tanggal_keluar}
                </span>
              </li>
              <li className="mb-2">
                Nomor STK:{" "}
                <span className="font-semibold">{detailgudang.no_stk}</span>
              </li>
              <li className="mb-2">
                Nama Gudang:{" "}
                <span className="font-semibold">{detailgudang.gudang}</span>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl capitalize text-sky-800 font-bold mb-4">
              Items
            </h1>
            <DataTable
              addData={false}
              column={column}
              data={items}
              rowsPerPage={[10, 25, 50, 100]}
            />
          </div>
        </div>
      }
    />
  );
}

const actions = (dispatch: any) => ({
  getBarangKeluar: (id: string) => dispatch(getBarangKeluar(id)),
});

export default connect(null, actions)(ViewItems);
