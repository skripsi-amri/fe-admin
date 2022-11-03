import { Block } from "notiflix";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { MobileIconList } from "../../../../src/components/molecules";
import { DataTable } from "../../../../src/layout";
import { getAllBarang, hapusBarang } from "../../../../src/redux/actions";
import { DashboardLayout } from "../../../../src/template";
import { handleRemove } from "../../../../src/utils";

function Items(props: {
  getAllBarang: () => Promise<any>;
  hapusBarang: (id: string) => Promise<any>;
}) {
  const [data, setData] = useState([]);

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
    {
      title: "aksi",
      type: "custom",
      cell: (row: any) => (
        <MobileIconList
          row={row}
          data={data}
          setData={setData}
          hapusBarang={props.hapusBarang}
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
      .getAllBarang()
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
      pageName="Items"
      icon="icon-park-outline:ad-product"
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
  getAllBarang: () => dispatch(getAllBarang()),
  hapusBarang: (id: string) => dispatch(hapusBarang(id)),
});

export default connect(null, actions)(Items);
