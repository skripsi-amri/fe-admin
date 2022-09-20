import { Icon } from "@iconify/react";

export default function Iconify(props: {
  icon: string;
  color?:
    | "red"
    | "blue"
    | "green"
    | "yellow"
    | "orange"
    | "transparent"
    | "teal"
    | "white"
    | "black";
  other?: any;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  onClick?: () => void;
}) {
  const color = props.color || "white";
  const size = props.size || "xl";

  return (
    <Icon
      onClick={props.onClick}
      icon={props.icon}
      className={`transition
      ${
        size === "xs"
          ? "text-xs"
          : size === "sm"
          ? "text-sm"
          : size === "base"
          ? "text-base"
          : size === "lg"
          ? "text-lg"
          : size === "xl"
          ? "text-xl"
          : size === "2xl"
          ? "text-2xl"
          : size === "3xl"
          ? "text-3xl"
          : size === "4xl"
          ? "text-4xl"
          : size === "5xl"
          ? "text-5xl"
          : "text-xl"
      }
        ${color === "teal" ? "text-teal-500 hover:text-teal-600" : ""}
        ${color === "red" ? "text-red-500 hover:text-red-600" : ""}
        ${color === "blue" ? "text-blue-500 hover:text-blue-600" : ""}
        ${color === "green" ? "text-green-500 hover:text-green-600" : ""}
        ${color === "yellow" ? "text-yellow-500 hover:text-yellow-600" : ""}
        ${color === "orange" ? "text-orange-500 hover:text-orange-600" : ""}
        ${color === "black" ? "text-black" : ""}
        ${color === "white" ? "text-white" : ""}
        ${props.onClick ? "cursor-pointer" : ""} ${props.other}`}
    />
  );
}
