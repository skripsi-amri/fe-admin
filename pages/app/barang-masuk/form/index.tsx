import { useRouter } from "next/router";
import { Notify } from "notiflix";
import { useState } from "react";
import { connect } from "react-redux";
import { Button } from "../../../../src/components/atoms";
import { Table } from "../../../../src/components/molecules";
import { TextfieldGroup } from "../../../../src/components/organisms";
import { ValidationSubmit } from "../../../../src/functions";
import {
  getAllBarang,
  getAllGudang,
  tambahBarang,
} from "../../../../src/redux/actions";
import { DashboardLayout } from "../../../../src/template";

const form = [
  {
    label: "Pilih Gudang",
    nama: "id_gudang",
    type: "select-api",
    apiOptions: getAllGudang,
    labelOptions: "nama_gudang",
  },
];

const formItems = [
  {
    label: "Pilih Items",
    nama: "id_item",
    type: "select-api",
    apiOptions: getAllBarang,
    labelOptions: "nama_item",
  },
  {
    label: "Qty Item",
    nama: "qty",
    type: "number",
  },
];

const FormBarang = (props: { tambahBarang: (data: any) => Promise<any> }) => {
  const router = useRouter();
  const [data, setData] = useState({} as any);
  const [dataBarang, setDataBarang] = useState([]);
  const [checkForm, setCheckForm] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const check = ValidationSubmit(form, data);
    setCheckForm(!check);
    if (check) {
      props
        .tambahBarang(data)
        .then((res) => {
          Notify.success(res.data.message, {
            position: "right-bottom",
          });
          router.back();
        })
        .catch((err) => {
          if (err.response.data) {
            Notify.failure(err.response.data.message, {
              position: "right-bottom",
            });
            setError(err.response.data.errors);
          }
        });
    }
  };

  const addBarang = (data: {}) => {

  }

  return (
    <DashboardLayout
      icon="bxs:archive-in"
      pageName="Form Barang Masuk"
      main={
        <div className="mx-3">
          <TextfieldGroup
            setError={setError}
            error={error}
            showError={checkForm}
            form={form}
            setData={setData}
            data={data}
          />
          <div className="w-full md:w-1/2">
            <TextfieldGroup
              setError={setError}
              error={error}
              showError={checkForm}
              form={formItems}
              setData={setData}
              data={data}
            />
            <div className="mt-2 flex justify-end">
              <Button child="Tambah Items" backgroundColor="green" />
            </div>
          </div>
          <div className="my-3">
            <Table
              column={[]}
              data={dataBarang}
              rowPerPage={25}
              handleSort={() => {}}
            />
          </div>
          <Button child="Simpan Data" />
        </div>
      }
    />
  );
};

const actions = (dispatch: any) => ({
  tambahBarang: (data: any) => dispatch(tambahBarang(data)),
});

export default connect(null, actions)(FormBarang);
