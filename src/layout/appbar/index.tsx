import { Loading, Notify, Report } from "notiflix";
import { useState } from "react";
import { connect } from "react-redux";
import { IconButton, Iconify, Typograhpy } from "../../components/atoms";
import { LogoutApi } from "../../redux/actions";

function AppBar(props: {
  fullWidth: boolean;
  setFullWidth: (bool: boolean) => void;
  logout: () => Promise<any>;
}) {
  const [iconResize, setIconResize] = useState("fluent:resize-large-24-filled");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleFullScreen = () => {
    if (document.fullscreenElement) {
      setIconResize("fluent:resize-large-24-filled");
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    } else {
      setIconResize("fluent:resize-small-16-filled");
      var element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      }
    }
  };

  const handleLogout = () => {
    Loading.dots("loading...", {
      svgColor: "#1e40af",
      backgroundColor: "rgba(0, 0, 100, 0.5)",
    });
    props
      .logout()
      .then((res) => {
        Report.success("Kamu Telah Keluar", "", "Okay");
        window.location.href = "/login";
      })
      .catch((err) => {
        if (err.response.data) {
          Notify.failure(err.response.data.message, {
            position: "right-bottom",
          });
        }
      });
  };

  return (
    <div className="shadow bg-white shadow-blue-800 p-5 flex justify-between px-10 items-center">
      <div>
        <IconButton
          other={`mr-2 ${props.fullWidth ? "hidden" : ""}`}
          backgroundColor="transparent"
          color="blue"
          icon={"dashicons:menu-alt3"}
          onClick={() => props.setFullWidth(true)}
        />
        <IconButton
          other={"mr-2"}
          backgroundColor="transparent"
          color="blue"
          icon={"fa:search"}
        />
        <IconButton
          other={"hidden md:inline"}
          backgroundColor="transparent"
          color="blue"
          icon={iconResize}
          onClick={handleFullScreen}
        />
      </div>
      <div
        onClick={() => setShowProfileMenu(!showProfileMenu)}
        className="flex items-center cursor-pointer p-2"
      >
        <Iconify icon="mdi:face-man-profile" color="blue" other={"mr-2"} />
        <Typograhpy other={"select-none"} child="Superadmin" />
        <PopUpMenu
          showProfileMenu={showProfileMenu}
          handleLogout={handleLogout}
        />
      </div>
    </div>
  );
}

const actions = (dispatch: any) => ({
  logout: () => dispatch(LogoutApi()),
});

export default connect(null, actions)(AppBar);

const PopUpMenu = (props: {
  showProfileMenu: boolean;
  handleLogout: () => void;
}) => {
  return (
    <div
      className={`${
        props.showProfileMenu ? "absolute" : "hidden"
      } right-0 z-20 border w-56 py-2 mt-24 mr-16 overflow-hidden bg-white rounded-md shadow-sm shadow-blue-50`}
    >
      <div
        onClick={props.handleLogout}
        className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-blue-50"
      >
        <p>Sign Out</p>
      </div>
    </div>
  );
};
