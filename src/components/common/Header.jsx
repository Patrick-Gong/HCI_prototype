import logo from "../../assets/nav/NotiSSU_logo.svg";
import hovered_alarms from "../../assets/nav/hovered_alarms.svg";
import not_hovered_alarms from "../../assets/nav/not_hovered_alarms.svg";
import hovered_saved from "../../assets/nav/hovered_saved.svg";
import not_hovered_saved from "../../assets/nav/not_hovered_saved.svg";
import detail from "../../assets/nav/detail.svg";
import { Link, useLocation } from "react-router";

function Header() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <header className="flex justify-between w-screen items-center bg-neutral-50 h-14 px-16 fixed top-0 left-0 right-0 z-50">
      <Link to="/" className="hover:cursor-pointer">
        <img src={logo} alt="logo" />
      </Link>
      <div className="flex justify-between gap-4">
        <Link to="/alarms" className="hover:cursor-pointer w-10 h-10">
          <img
            src={
              location.pathname === "/alarms"
                ? hovered_alarms
                : not_hovered_alarms
            }
            alt={
              location.pathname === "/alarms"
                ? "hovered_alarms.svg"
                : "not_hovered_alarms.svg"
            }
            className="w-10 h-10"
          />
        </Link>
        <Link to="/saved" className="hover:cursor-pointer w-10 h-10">
          <img
            src={
              location.pathname === "/saved" ? hovered_saved : not_hovered_saved
            }
            alt={
              location.pathname === "/saved"
                ? "hovered_saved.svg"
                : "not_hovered_saved.svg"
            }
            className="w-10 h-10"
          />
        </Link>
        <div className="hover:cursor-pointer">
          <img src={detail} alt="detail.svg" className="w-10 h-10" />
        </div>
      </div>
    </header>
  );
}

export default Header;
