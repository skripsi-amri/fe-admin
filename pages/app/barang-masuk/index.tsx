import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { IconButton } from "../../../src/components/atoms";
import { DataTable } from "../../../src/layout";
import {
  getAllBarangMasuk,
  hapusBarangMasuk,
} from "../../../src/redux/actions";
import { DashboardLayout } from "../../../src/template";
import { handleRemove } from "../../../src/utils";

function BarangMasuk(props: {
  getAllBarangMasuk: () => Promise<any>;
  hapusBarangMasuk: (id: string) => Promise<any>;
}) {
  const router = useRouter();
  const [data, setData] = useState([]);

  const column = [
    {
      title: "Nomor Stm",
      dataIndex: "no_stm",
    },
    {
      title: "Nama gudang",
      dataIndex: "gudang",
    },
    {
      title: "Tanggal Masuk",
      dataIndex: "tanggal_masuk",
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
              handleRemove(row._id, props.hapusBarangMasuk, setData, data)
            }
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    props
      .getAllBarangMasuk()
      .then((res) => {
        setData(res.data.result);
      })
      .catch((err) => console.log(err));
  }, [props]);

  return (
    <DashboardLayout
      pageName="Barang Masuk"
      icon="bxs:archive-in"
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
            ** STM adalah Surat Tanda Masuk
          </p>
        </div>
      }
    />
  );
}

const actions = (dispatch: any) => ({
  getAllBarangMasuk: () => dispatch(getAllBarangMasuk()),
  hapusBarangMasuk: (id: string) => dispatch(hapusBarangMasuk(id)),
});

export default connect(null, actions)(BarangMasuk);
