import { Iconify, Typograhpy } from "../../components/atoms";

export default function Header(props: { pageName: string; icon: string }) {
  return (
    <div className="py-7 flex justify-center md:justify-between px-16 items-center">
      <div className="flex items-center">
        <Iconify
          size="2xl"
          icon={props.icon}
          other={"mr-2 bg-blue-800 p-1 rounded"}
          color="white"
        />
        <h1 className="text-blue-800 text-xl select-none">|</h1>
        <Typograhpy
          variant="xl"
          other={"ml-2 text-blue-800 select-none"}
          child={props.pageName}
        />
      </div>
      <div className="hidden md:block">
        <Typograhpy other={"select-none"} variant="sm" child="Home / About" />
      </div>
    </div>
  );
}
