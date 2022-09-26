import { useState } from "react";
import { ValidationSubmit } from "../../../functions";
import { Button } from "../../atoms";
import { Table } from "../../molecules";
import TextfieldGroup from "../textfield-group";

export default function FormWithTable(props: {
  column: any;
  form: any;
  setData: any;
  data: any;
}) {
  const [item, setitem] = useState({} as any);
  const [dataBarang, setDataBarang] = useState([] as any);
  const [checkForm, setCheckForm] = useState(false);
  const [error, setError] = useState(null);

  const addBarang = (e: any) => {
    e.preventDefault();
    const check = ValidationSubmit(props.form, item);
    setCheckForm(!check);
    if (check) {
      setDataBarang([...dataBarang, item]);
      props.setData({
        ...props.data,
        items: [...dataBarang, item],
      });
    }
  };

  return (
    <div>
      <form onSubmit={addBarang} id="form-barang" className="w-full md:w-1/2">
        <TextfieldGroup
          setError={setError}
          error={error}
          showError={checkForm}
          form={props.form}
          setData={setitem}
          data={item}
        />
        <div className="mt-2 flex justify-end">
          <Button
            type="submit"
            form="form-barang"
            child="Tambah Items"
            backgroundColor="green"
          />
        </div>
      </form>
      <div className="my-3">
        <Table
          column={props.column}
          data={dataBarang}
          rowPerPage={10}
          handleSort={() => {}}
        />
      </div>
    </div>
  );
}
