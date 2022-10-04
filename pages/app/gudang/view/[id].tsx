import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllBarang, getGudang } from "../../../../src/redux/actions";
import { DashboardLayout } from "../../../../src/template";
import { DataTable } from "../../../../src/layout";

const column = [
  {
    title: "Nama Items",
    dataIndex: "nama_item",
  },
  {
    title: "Brand",
    dataIndex: "merk",
  },
  {
    title: "Ukuran",
    dataIndex: "ukuran",
  },
  {
    title: "Stok",
    dataIndex: "stok",
  },
];

function ViewItems(props: {
  getGudang: (id: string) => Promise<any>;
  getAllItems: () => Promise<any>;
}) {
  const router = useRouter();
  const id = router.query.id as string;
  const [detailgudang, setDetailGudang] = useState({} as any);
  const [Item, setItem] = useState([]);

  useEffect(() => {
    if (id) {
      props
        .getGudang(id)
        .then((res) => setDetailGudang(res.data.result))
        .catch((err) => console.log(err));
    }
    props
      .getAllItems()
      .then((res) => setItem(res.data.result))
      .catch((err) => console.log(err));
  }, [props, id]);

  return (
    <DashboardLayout
      pageName="Detail Gudang"
      icon="mdi:warehouse"
      main={
        <div>
          <div className="mb-6">
            <h1 className="text-xl capitalize text-sky-800 font-bold mb-4">
              Detail Gudang
            </h1>
            <ul className="capitalize font-bold">
              <li className="mb-2">
                Nama Gudang:{" "}
                <span className="font-semibold">
                  {detailgudang.nama_gudang}
                </span>
              </li>
              <li className="mb-2">
                Alamat:{" "}
                <span className="font-semibold">{detailgudang.alamat}</span>
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
              data={Item}
              rowsPerPage={[10, 25, 50, 100]}
            />
          </div>
        </div>
      }
    />
  );
}

const actions = (dispatch: any) => ({
  getGudang: (id: string) => dispatch(getGudang(id)),
  getAllItems: () => dispatch(getAllBarang()),
});

export default connect(null, actions)(ViewItems);
