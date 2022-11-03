import { useRouter } from "next/router";
import { Notify } from "notiflix";
import { useState } from "react";
import { connect } from "react-redux";
import { Button } from "../../../../src/components/atoms";
import {
  FormWithTable,
  TextfieldGroup,
} from "../../../../src/components/organisms";
import { ValidationSubmit } from "../../../../src/functions";
import {
  getAllBarang,
  getAllGudang,
  tambahBarangKeluar,
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

const column = [
  {
    title: "id item",
    dataIndex: "id_item",
  },
  {
    title: "qty",
    dataIndex: "qty",
  },
];

const FormBarang = (props: {
  tambahBarangKeluar: (data: any) => Promise<any>;
}) => {
  const router = useRouter();
  const [data, setData] = useState({} as any);
  const [checkForm, setCheckForm] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    const check = ValidationSubmit(form, data);
    setCheckForm(!check);
    if (check) {
      props
        .tambahBarangKeluar(data)
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

  return (
    <DashboardLayout
      icon="bxs:archive-out"
      pageName="Form Barang Keluar"
      arrowBack={true}
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
          <FormWithTable
            column={column}
            form={formItems}
            setData={setData}
            data={data}
          />
          <Button onClick={handleSubmit} child="Simpan Data" />
        </div>
      }
    />
  );
};

const actions = (dispatch: any) => ({
  tambahBarangKeluar: (data: any) => dispatch(tambahBarangKeluar(data)),
});

export default connect(null, actions)(FormBarang);
