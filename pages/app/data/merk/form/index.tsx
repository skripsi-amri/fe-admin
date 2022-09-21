import { useRouter } from "next/router";
import { Notify } from "notiflix";
import { useState } from "react";
import { connect } from "react-redux";
import { Button } from "../../../../../src/components/atoms";
import { TextfieldGroup } from "../../../../../src/components/organisms";
import { ValidationSubmit } from "../../../../../src/functions";
import { tambahMerkBarang } from "../../../../../src/redux/actions";
import { DashboardLayout } from "../../../../../src/template";

const form = [
  {
    label: "Nama merk",
    nama: "nama_merk",
  },
];

const FormMerk = (props: {
  tambahMerkBarang: (data: any) => Promise<any>;
}) => {
  const router = useRouter();
  const [data, setData] = useState({} as any);
  const [checkForm, setCheckForm] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const check = ValidationSubmit(form, data);
    setCheckForm(!check);
    if (check) {
      props
        .tambahMerkBarang(data)
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
      icon="icon-park-outline:ad-product"
      pageName="Form Merk Barang"
      main={
        <form onSubmit={handleSubmit} className="mt-5 w-full md:w-1/2">
          <TextfieldGroup
            setError={setError}
            error={error}
            showError={checkForm}
            form={form}
            setData={setData}
            data={data}
          />
          <Button type="submit" other={"mt-2"} child={"Simpan Data"} />
        </form>
      }
    />
  );
};

const actions = (dispatch: any) => ({
  tambahMerkBarang: (data: any) => dispatch(tambahMerkBarang(data)),
});

export default connect(null, actions)(FormMerk);