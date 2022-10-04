import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getBarangMasuk } from "../../../../src/redux/actions";
import { DashboardLayout } from "../../../../src/template";
import { DataTable } from "../../../../src/layout";

const column = [
  {
    title: "nama item",
    dataIndex: "nama_item",
  },
  {
    title: "qty",
    dataIndex: "qty",
  },
];

function ViewItems(props: { getBarangMasuk: (id: string) => Promise<any> }) {
  const router = useRouter();
  const id = router.query.id as string;
  const [detailgudang, setDetailGudang] = useState({} as any);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (id) {
      props
        .getBarangMasuk(id)
        .then((res) => {
          setDetailGudang(res.data.result);
          setItems(res.data.result.items);
        })
        .catch((err) => console.log(err));
    }
  }, [props, id]);

  return (
    <DashboardLayout
      pageName="Detail Barang Masuk"
      icon="bxs:archive-in"
      main={
        <div>
          <div className="mb-6">
            <h1 className="text-xl capitalize text-sky-800 font-bold mb-4">
              Detail
            </h1>
            <ul className="capitalize font-bold">
              <li className="mb-2">
                Tanggal Masuk:{" "}
                <span className="font-semibold">
                  {detailgudang.tanggal_masuk}
                </span>
              </li>
              <li className="mb-2">
                Nomor STM:{" "}
                <span className="font-semibold">{detailgudang.no_stm}</span>
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
  getBarangMasuk: (id: string) => dispatch(getBarangMasuk(id)),
});

export default connect(null, actions)(ViewItems);
