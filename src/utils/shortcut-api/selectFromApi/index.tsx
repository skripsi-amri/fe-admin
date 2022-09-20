import { useEffect, useState } from "react";
import { SelectInput } from "../../../components/atoms";

function SelectFromApi(props: {
  getAllDataApi: () => Promise<any>;
  data: any;
  setData: any;
  nama: string;
  showError: boolean;
  label: string;
  //label options adalah label yang di ambil dari key data api
  labelOptions: string;
}) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    props
      .getAllDataApi()
      .then((res: any) => {
        const newKategori = res.data.result.map((item: any) => {
          return {
            label: item[props.labelOptions],
            value: item._id,
          };
        });
        setOptions(newKategori);
      })
      .catch((err: any) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <SelectInput
        options={options}
        other={"mb-4"}
        value={options.find((item: any) => {
          if (props.data[props.nama] === item.value) {
            return item;
          }
        })}
        label={props.label}
        name={props.nama}
        isNull={!props.data[props.nama] ? props.showError : false}
        onChange={(v) =>
          props.setData({
            ...props.data,
            [props.nama]: v.value,
          })
        }
      />
    </div>
  );
}

export default SelectFromApi;
