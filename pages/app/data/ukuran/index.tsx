import { useRouter } from "next/router";
import { Block } from "notiflix";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { IconButton } from "../../../../src/components/atoms";
import { DataTable } from "../../../../src/layout";
import {
  getAllUkuranBarang,
  hapusUkuranBarang,
} from "../../../../src/redux/actions";
import { DashboardLayout } from "../../../../src/template";
import { handleRemove } from "../../../../src/utils";

function Ukuran(props: {
  getAllUkuranBarang: () => Promise<any>;
  hapusUkuranBarang: (id: string) => Promise<any>;
}) {
  const router = useRouter();
  const [data, setData] = useState([]);

  const column = [
    {
      title: "Nama ukuran",
      dataIndex: "nama_ukuran",
    },
    {
      title: "aksi",
      type: "custom",
      cell: (row: any) => (
        <div className="text-center">
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
              handleRemove(row._id, props.hapusUkuranBarang, setData, data)
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
      .getAllUkuranBarang()
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
      pageName="Ukuran"
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
  getAllUkuranBarang: () => dispatch(getAllUkuranBarang()),
  hapusUkuranBarang: (id: string) => dispatch(hapusUkuranBarang(id)),
});

export default connect(null, actions)(Ukuran);
