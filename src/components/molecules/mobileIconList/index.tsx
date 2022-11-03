import { useRouter } from "next/router";
import { useState } from "react";
import { IconButton } from "../../atoms";

export default function MobileIconList(props: {
  row: any;
  data: any;
  setData: any;
  hapusBarang: any;
  handleRemove: any;
}) {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState({
    status: false,
    id: "",
  });
  return (
    <div>
      <div className="text-center md:hidden block">
        <IconButton
          other={"mr-3"}
          backgroundColor="transparent"
          color="blue"
          icon="bx:dots-horizontal-rounded"
          onClick={() => {
            console.log({
              status: !showMenu.status,
              id: props.row._id,
            });
            setShowMenu({
              status: !showMenu.status,
              id: props.row._id,
            });
          }}
        />
        {showMenu.id === props.row._id && (
          <PopUpMenu
            hapusBarang={props.hapusBarang}
            row={props.row}
            showProfileMenu={showMenu.status}
            data={props.data}
            setData={props.setData}
            handleRemove={props.handleRemove}
          />
        )}
      </div>
      <div className="text-center md:block hidden">
        <IconButton
          other={"mr-3"}
          backgroundColor="transparent"
          color="blue"
          icon="akar-icons:eye"
          onClick={() =>
            router.push(`${router.pathname}/view/${props.row._id}`)
          }
        />
        <IconButton
          other={"mr-3"}
          backgroundColor="transparent"
          color="orange"
          icon="bxs:edit"
          onClick={() =>
            router.push(`${router.pathname}/form/${props.row._id}`)
          }
        />
        <IconButton
          backgroundColor="transparent"
          color="red"
          icon="bi:trash-fill"
          onClick={() =>
            props.handleRemove(
              props.row._id,
              props.hapusBarang,
              props.setData,
              props.data
            )
          }
        />
      </div>
    </div>
  );
}

const PopUpMenu = (props: {
  showProfileMenu: boolean;
  row: any;
  hapusBarang: any;
  data: any;
  setData: any;
  handleRemove: any;
}) => {
  const router = useRouter();
  return (
    <div
      className={`${
        props.showProfileMenu ? "relative" : "hidden"
      } z-20 border w-16 overflow-hidden bg-white rounded-md shadow-sm shadow-blue-50`}
    >
      <div className="block px-1 py-1 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-blue-50">
        <IconButton
          backgroundColor="transparent"
          color="blue"
          icon="akar-icons:eye"
          onClick={() =>
            router.push(`${router.pathname}/view/${props.row._id}`)
          }
        />
      </div>

      <div className="block px-1 py-1 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-blue-50">
        <IconButton
          backgroundColor="transparent"
          color="orange"
          icon="bxs:edit"
          onClick={() =>
            router.push(`${router.pathname}/form/${props.row._id}`)
          }
        />
      </div>

      <div className="block px-1 py-1 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-blue-50">
        <IconButton
          backgroundColor="transparent"
          color="red"
          icon="bi:trash-fill"
          onClick={() =>
            props.handleRemove(
              props.row._id,
              props.hapusBarang,
              props.setData,
              props.data
            )
          }
        />
      </div>
    </div>
  );
};
