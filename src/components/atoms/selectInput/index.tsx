import { useEffect, useState } from "react";
import Select from "react-select";

export default function SelectInput(props: {
  label?: string;
  other?: any;
  name: string;
  options: any[];
  onChange: (e: any) => void;
  placeholder?: string;
  isNull?: boolean;
  isMulti?: boolean;
  value?: any;
}) {
  const [isNull, setIsNull] = useState(props.isNull);

  useEffect(() => {
    setIsNull(props.isNull);
  }, [props.isNull]);

  return (
    <div className={props.other}>
      <label
        className={`${
          props.label ? "" : "hidden"
        } text-base capitalize font-semibold text-sky-900 select-none`}
      >
        {props.label}
      </label>
      <Select
        options={props.options}
        onChange={(value) => props.onChange(value)}
        instanceId={props.name}
        isSearchable={true}
        value={props.value}
        noOptionsMessage={() => "Tidak Ditemukan"}
        placeholder={props.placeholder || ""}
        isMulti={props.isMulti || false}
        styles={{
          control: (base) => ({
            ...base,
            padding: "3px",
            borderColor: isNull ? "#D32F2F" : "#555",
            backgroundColor: isNull ? "#FFCDD2" : "#fff",
          }),
          option: (style, { isSelected }) => ({
            ...style,
            backgroundColor: isSelected ? "#008080" : "#fff",
            color: isSelected ? "#fff" : "#000",
            ":hover": {
              ...style[":hover"],
              backgroundColor: isSelected ? "#008080" : "#E0F2F1",
            },
          }),
        }}
      />
      <div className={`${isNull ? "block" : "hidden"}`}>
        <p className="text-sm text-red-500 font-semibold">Wajib Diisi</p>
      </div>
    </div>
  );
}
