import { useRouter } from "next/router";
import { DoubleList, Iconify, SingleList } from "../../components/atoms";
import { lists } from "../../utils";

export default function Sidebar(props: {
  fullWidth: boolean;
  setFullWidth: (bool: boolean) => void;
}) {
  const router = useRouter();
  return (
    <div
      className={`fixed overflow-auto ${
        props.fullWidth ? "w-full md:w-72" : "w-0 hidden"
      } h-full z-20 bg-blue-800 transition-all`}
    >
      <div className="h-20 p-3 flex justify-between px-5 items-center">
        <p className="text-2xl font-semibold text-white">Logo</p>
        <Iconify
          icon="bi:arrow-left-circle-fill"
          other={"hover:text-gray-100"}
          onClick={() => props.setFullWidth(false)}
        />
      </div>
      <div className="text-white font-sans pb-10 pt-5">
        <ul>
          <SingleList
            icon={"bxs:dashboard"}
            active={router.pathname === "/app"}
            child={"Dashboard"}
            url={"/app"}
          />
          {lists.map((list, i) => {
            return list.type !== "double" ? (
              <div key={i}>
                <SingleList
                  icon={list.icon}
                  active={
                    list.url !== undefined
                      ? router.pathname.includes(list.url)
                      : list.url === router.pathname
                  }
                  child={list.title}
                  url={list.url !== undefined ? list.url : ""}
                />
              </div>
            ) : (
              <div key={i}>
                <DoubleList
                  icon={list.icon}
                  child={list.title}
                  secondList={list.secondList}
                />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
