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
  const [showPopUp, setShowPopUp] = useState(false);

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
      setShowPopUp(false);
      setitem({});
      e.target.reset();
    }
  };

  return (
    <div>
      <div className="mt-2 flex justify-end">
        <Button
          onClick={() => setShowPopUp(true)}
          child="Tambah Items"
          backgroundColor="green"
        />
      </div>
      <div
        className={`${
          showPopUp ? "block" : "hidden"
        } w-full h-full shadow-lg bg-white z-10 my-3 p-5 rounded-md`}
      >
        <div
          className="flex justify-end text-lg font-extrabold text-red-600 cursor-pointer"
          onClick={() => setShowPopUp(false)}
        >
          X
        </div>
        <form onSubmit={addBarang}>
          <TextfieldGroup
            setError={setError}
            error={error}
            showError={checkForm}
            form={props.form}
            setData={setitem}
            data={item}
          />
          <Button type="submit" other={"w-full mb-6"} child={"Simpan"} />
        </form>
      </div>
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
