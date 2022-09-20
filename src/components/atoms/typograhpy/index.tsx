const Typograhpy = (props: {
  child: string;
  variant?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
  other?: any;
}) => {
  const fontSize = props.variant || "base";
  return (
    <p
      className={`font-sans ${
        fontSize === "xs"
          ? "text-xs"
          : fontSize === "sm"
          ? "text-sm"
          : fontSize === "base"
          ? "text-base"
          : fontSize === "lg"
          ? "text-lg"
          : fontSize === "xl"
          ? "text-xl"
          : fontSize === "2xl"
          ? "text-2xl"
          : "text-base"
      } ${props.other}`}
    >
      {props.child}
    </p>
  );
};

export { Typograhpy };
