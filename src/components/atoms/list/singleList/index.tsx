import { useRouter } from "next/router";
import Iconify from "../../Iconify";

export default function SingleList(props: {
  child: string;
  active: boolean;
  icon: string;
  url: string;
}) {
  const router = useRouter();
  return (
    <li
      onClick={() => router.push(props.url)}
      className={`${
        props.active
          ? "text-teal-800 bg-teal-50 border-l-2 border-teal-900"
          : ""
      }  mb-3 font-medium flex items-center text-md cursor-pointer transition py-2 px-7 hover:text-teal-800 hover:bg-teal-50 hover:border-l-2 hover:border-teal-900`}
    >
      <Iconify color="yellow" other={"mr-2"} icon={props.icon} />
      <p className="select-none capitalize">{props.child}</p>
    </li>
  );
}
