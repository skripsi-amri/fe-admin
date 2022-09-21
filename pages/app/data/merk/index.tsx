import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { IconButton } from "../../../../src/components/atoms";
import { DataTable } from "../../../../src/layout";
import {
  getAllMerkBarang,
  hapusMerkBarang,
} from "../../../../src/redux/actions";
import { DashboardLayout } from "../../../../src/template";
import { handleRemove } from "../../../../src/utils";

function Merk(props: {
  getAllMerkBarang: () => Promise<any>;
  hapusMerkBarang: (id: string) => Promise<any>;
}) {
  const router = useRouter();
  const [data, setData] = useState([]);

  const column = [
    {
      title: "Nama merk",
      dataIndex: "nama_merk",
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
              handleRemove(row._id, props.hapusMerkBarang, setData, data)
            }
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    props
      .getAllMerkBarang()
      .then((res) => {
        setData(res.data.result);
      })
      .catch((err) => console.log(err));
  }, [props]);

  return (
    <DashboardLayout
      pageName="Merk"
      icon="icon-park-outline:ad-product"
      main={
        <DataTable column={column} data={data} rowsPerPage={[10, 25, 50, 100]} />
      }
    />
  );
}

const actions = (dispatch: any) => ({
  getAllMerkBarang: () => dispatch(getAllMerkBarang()),
  hapusMerkBarang: (id: string) => dispatch(hapusMerkBarang(id)),
});

export default connect(null, actions)(Merk);