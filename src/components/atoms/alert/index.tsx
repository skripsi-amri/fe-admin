export default function Alert(props: {
  variant: "success" | "warning" | "danger";
  child: any;
  position: "left" | "center" | "right";
  other?: any;
}) {
  const position = props.position || "center";
  return (
    <div
      className={`${
        position === "center"
          ? "text-center"
          : position === "right"
          ? "text-right"
          : "text-left"
      } ${props.other}`}
    >
      <div
        className={`border ${
          props.variant === "success"
            ? "border-green-500 bg-green-50"
            : props.variant === "warning"
            ? "border-orange-500 bg-orange-50"
            : props.variant === "danger"
            ? "border-red-500 bg-red-50"
            : "border-blue-500 bg-blue-50"
        } inline-flex rounded p-2 capitalize font-semibold`}
      >
        {props.child}
      </div>
    </div>
  );
}
