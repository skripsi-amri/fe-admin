import { useEffect, useState } from "react";
import styles from "./style.module.css";

function Textfield(props: {
  type?: string;
  otherInput?: string;
  value?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  readOnly?: boolean;
  required?: boolean;
  label?: string;
  placeholder?: string;
  hidden?: boolean;
  costumErrMessage?: string;
  other?: string;
  name?: string;
  isNull?: boolean;
  onKeyUp?: (e: any) => void;
  onInput?: (e: any) => void;
}) {
  const [isNull, setIsNull] = useState(props.isNull);

  useEffect(() => {
    setIsNull(props.isNull);
  }, [props.isNull]);

  return (
    <div className={`${props.hidden ? "hidden" : ""} ${props.other}`}>
      <label
        className={`
        text-base capitalize font-semibold text-blue-900 select-none
        ${props.label ? "" : "hidden"} `}
      >
        {props.label}
      </label>
      <input
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        name={props.name}
        autoComplete="off"
        disabled={props.disabled}
        autoFocus={props.autoFocus}
        readOnly={props.readOnly}
        required={props.required}
        onInput={props.onInput}
        onKeyUp={(e: any) => {
          if (e.target.value.length > 0) {
            e.target.style.borderColor = "";
            e.target.style.backgroundColor = "";
            e.target.setCustomValidity("");
          }
          props.onKeyUp && props.onKeyUp(e);
        }}
        onInvalid={(e: any) => {
          if (props.type === "email") {
            e.target.setCustomValidity("Email tidak valid");
          } else {
            e.target.setCustomValidity(`${props.label} tidak boleh kosong`);
          }
          e.target.onkeyup = () => {
            setIsNull(false);
          };
        }}
        className={`
        rounded p-2 w-full border border-gray-700 focus:border-gray-900 hover:border-gray-400 bg-white
        ${props.disabled ? "cursor-not-allowed bg-red-200" : ""}
        ${props.costumErrMessage ? "bg-red-200 border-red-700" : ""}
        ${isNull ? "bg-red-200 border-red-700" : ""}
        ${props.otherInput} ${styles.input}
        `}
      />
      <div className={`${isNull ? "block" : "hidden"}`}>
        <p className="text-sm text-red-500 font-semibold">Wajib Diisi</p>
      </div>
      <div className={`${props.costumErrMessage ? "block" : "hidden"}`}>
        <p className="text-sm text-red-500 font-semibold">
          {props.costumErrMessage}
        </p>
      </div>
    </div>
  );
}

export { Textfield };
