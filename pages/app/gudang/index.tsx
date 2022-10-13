import { useRouter } from "next/router";
import { Block } from "notiflix";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { IconButton } from "../../../src/components/atoms";
import { DataTable } from "../../../src/layout";
import { getAllGudang, hapusGudang } from "../../../src/redux/actions";
import { DashboardLayout } from "../../../src/template";
import { handleRemove } from "../../../src/utils";

function Gudang(props: {
  getAllGudang: () => Promise<any>;
  hapusGudang: (id: string) => Promise<any>;
}) {
  const router = useRouter();
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
        <div className="text-center">
          <IconButton
            other={"mr-3"}
            backgroundColor="transparent"
            color="blue"
            icon="akar-icons:eye"
            onClick={() => router.push(`${router.pathname}/view/${row._id}`)}
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
              handleRemove(row._id, props.hapusGudang, setData, data)
            }
          />
        </div>
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
