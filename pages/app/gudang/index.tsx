import { Block } from "notiflix";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { MobileIconList } from "../../../src/components/molecules";
import { DataTable } from "../../../src/layout";
import { getAllGudang, hapusGudang } from "../../../src/redux/actions";
import { DashboardLayout } from "../../../src/template";
import { handleRemove } from "../../../src/utils";

function Gudang(props: {
  getAllGudang: () => Promise<any>;
  hapusGudang: (id: string) => Promise<any>;
}) {
  const [data, setData] = useState([]);

  const column = [
    {
      title: "Nama Gudang",
      dataIndex: "nama_gudang",
    },
    {
      title: "Alamat Gudang",
      dataIndex: "alamat",
    },
    {
      title: "aksi",
      type: "custom",
      cell: (row: any) => (
        <MobileIconList
          row={row}
          data={data}
          setData={setData}
          hapusBarang={props.hapusGudang}
          handleRemove={handleRemove}
        />
      ),
    },
  ];

  useEffect(() => {
    Block.dots("#table", "mengambil data...", {
      svgColor: "#1e40af",
      backgroundColor: "#f0f2f1",
    });
    props
      .getAllGudang()
      .then((res) => {
        Block.remove("#table");
        setData(res.data.result);
      })
      .catch((err) => {
        Block.remove("#table");
        console.log(err);
      });
  }, [props]);

  return (
    <DashboardLayout
      pageName="Gudang"
      icon="mdi:warehouse"
      main={
        <DataTable
          column={column}
          data={data}
          rowsPerPage={[10, 25, 50, 100]}
        />
      }
    />
  );
}

const actions = (dispatch: any) => ({
  getAllGudang: () => dispatch(getAllGudang()),
  hapusGudang: (id: string) => dispatch(hapusGudang(id)),
});

export default connect(null, actions)(Gudang);
