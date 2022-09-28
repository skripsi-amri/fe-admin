import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { IconButton } from "../../../src/components/atoms";
import { DataTable } from "../../../src/layout";
import {
  getAllBarangKeluar,
  hapusBarangKeluar,
} from "../../../src/redux/actions";
import { DashboardLayout } from "../../../src/template";
import { handleRemove } from "../../../src/utils";

function BarangKeluar(props: {
  getAllBarangKeluar: () => Promise<any>;
  hapusBarangKeluar: (id: string) => Promise<any>;
}) {
  const router = useRouter();
  const [data, setData] = useState([]);

  const column = [
    {
      title: "Nomor Stk",
      dataIndex: "no_stk",
    },
    {
      title: "Nama gudang",
      dataIndex: "gudang",
    },
    {
      title: "Tanggal Keluar",
      dataIndex: "tanggal_keluar",
    },
    {
      title: "aksi",
      type: "custom",
      cell: (row: any) => (
        <div className="text-center">
          <IconButton
            other={"mr-3"}
            backgroundColor="transparent"
            color="blue"
            icon="akar-icons:eye"
            onClick={() => {}}
          />
          <IconButton
            other={"mr-3"}
            backgroundColor="transparent"
            color="orange"
            icon="bxs:edit"
            onClick={() => router.push(`${router.pathname}/form/${row._id}`)}
          />
          <IconButton
            backgroundColor="transparent"
            color="red"
            icon="bi:trash-fill"
            onClick={() =>
              handleRemove(row._id, props.hapusBarangKeluar, setData, data)
            }
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    props
      .getAllBarangKeluar()
      .then((res) => {
        setData(res.data.result);
      })
      .catch((err) => console.log(err));
  }, [props]);

  return (
    <DashboardLayout
      pageName="Barang Keluar"
      icon="bxs:archive-out"
      main={
        <div>
          <DataTable
            column={column}
            data={data}
            rowsPerPage={[10, 25, 50, 100]}
          />
          <p
            className={`text-sm text-sky-800 mt-2 ${
              data.length < 1 ? "hidden" : ""
            }`}
          >
            ** STK adalah Surat Tanda Keluar
          </p>
        </div>
      }
    />
  );
}

const actions = (dispatch: any) => ({
  getAllBarangKeluar: () => dispatch(getAllBarangKeluar()),
  hapusBarangKeluar: (id: string) => dispatch(hapusBarangKeluar(id)),
});

export default connect(null, actions)(BarangKeluar);
