import React, { useEffect, useState } from "react";
import { SelectFromApi } from "../../../utils";
import { SelectInput, Textfield } from "../../atoms";

export default function TextfieldGroup(props: {
  form: any[];
  setData: (data: any) => void;
  data: any;
  showError: boolean;
  error?: any;
  setError?: (error: any) => void;
}) {
  return (
    <React.Fragment>
      {props.form.map((input, i) => {
        if (input.type === "select") {
          return (
            <SelectInput
              key={i}
              options={input.options}
              other={"mb-4"}
              value={input.options.find((item: any) => {
                if (props.data[input.nama] === item.value) {
                  return item;
                }
              })}
              label={input.label}
              name={input.nama}
              isNull={!props.data[input.nama] ? props.showError : false}
              onChange={(v) =>
                props.setData({
                  ...props.data,
                  [input.nama]: v.value,
                })
              }
            />
          );
        } else if (input.type === "select-api") {
          return (
            <SelectFromApi
              key={i}
              getAllDataApi={input.apiOptions()}
              data={props.data}
              setData={props.setData}
              nama={input.nama}
              showError={props.showError}
              label={input.label}
              labelOptions={input.labelOptions}
            />
          );
        } else {
          return (
            <Textfield
              key={i}
              onInput={(e: any) =>
                props.setData({
                  ...props.data,
                  [input.nama]: e.target.value,
                })
              }
              value={props.data[input.nama]}
              other="mb-4"
              name={input.nama}
              label={input.label}
              disabled={input.disabled || false}
              type={input.type}
              hidden={input.hidden || false}
              isNull={!props.data[input.nama] ? props.showError : false}
              onKeyUp={(e: any) => {
                if (props.error !== null && props.error !== undefined) {
                  const newError = { ...props.error };
                  delete newError[input.nama];
                  props.setError && props.setError(newError);
                }
              }}
              costumErrMessage={
                props.error !== null && props.error !== undefined
                  ? Object.keys(props.error).includes(input.nama) &&
                    props.error[input.nama]
                    ? props.error[input.nama]
                    : ""
                  : ""
              }
            />
          );
        }
      })}
    </React.Fragment>
  );
}
