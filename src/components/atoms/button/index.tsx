import Iconify from "../Iconify";

function Button(props: {
  onClick?: () => void;
  child: any;
  loading?: boolean;
  color?: "black" | "white";
  backgroundColor?:
    | "red"
    | "blue"
    | "green"
    | "yellow"
    | "orange"
    | "transparent"
    | "sky";
  other?: any;
  form?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: string;
  id?: string;
}) {
  const bgColor = props.backgroundColor || "sky";
  const color = props.color || "#fff";

  return (
    <button
      id={props.id}
      form={props.form}
      disabled={props.disabled || props.loading || false}
      type={props.type || "button"}
      onClick={props.onClick}
      className={`
        ${
          props.loading || props.disabled
            ? "bg-gray-500 cursor-not-allowed"
            : "cursor-pointer"
        }
        ${bgColor === "sky" ? "bg-sky-500 hover:bg-sky-600" : ""}
        ${bgColor === "red" ? "bg-red-500 hover:bg-red-600" : ""}
        ${bgColor === "blue" ? "bg-blue-500 hover:bg-blue-600" : ""}
        ${bgColor === "green" ? "bg-green-500 hover:bg-green-600" : ""}
        ${bgColor === "yellow" ? "bg-yellow-500 hover:bg-yellow-600" : ""}
        ${bgColor === "orange" ? "bg-orange-500 hover:bg-orange-600" : ""}
        ${bgColor === "transparent" ? "bg-transparent" : ""}
        ${color === "black" ? "text-black" : "text-white"}
        py-2 px-4 rounded transition select-none
        ${props.other}`}
    >
      <div
        className={`font-semibold first-letter:uppercase text-base font-sans ${
          props.icon ? "inline-flex items-center" : ""
        }`}
      >
        <Iconify
          color={props.color || "white"}
          icon={props.icon || ""}
          other={`mr-2 ${
            props.loading || props.disabled
              ? "cursor-not-allowed"
              : "cursor-pointer"
          } ${props.icon ? "block" : "hidden"}`}
        />
        {props.child}
      </div>
    </button>
  );
}

function IconButton(props: {
  icon: string;
  onClick?: () => void;
  loading?: boolean;
  color?:
    | "red"
    | "blue"
    | "green"
    | "yellow"
    | "orange"
    | "transparent"
    | "sky"
    | "white"
    | "black";
  backgroundColor?:
    | "red"
    | "blue"
    | "green"
    | "yellow"
    | "orange"
    | "transparent"
    | "sky";
  other?: any;
  disabled?: boolean;
  otherIcon?: any;
}) {
  return (
    <Button
      onClick={props.onClick}
      disabled={props.disabled || props.loading || false}
      backgroundColor={props.backgroundColor}
      other={props.other}
      child={
        <div className="flex justify-center items-center">
          <Iconify
            color={props.color}
            icon={props.icon}
            other={`${
              props.loading || props.disabled
                ? "cursor-not-allowed"
                : "cursor-pointer"
            } ${props.otherIcon}`}
          />
        </div>
      }
    />
  );
}
export { Button, IconButton };
