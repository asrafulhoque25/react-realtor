import { Link, useLocation } from "react-router-dom";
import logo from "/assets/img/rdc-logo.svg";
export default function Header() {
  const location = useLocation();
  console.log(location.pathname);

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm">
      <div className="container">
      <div className="navbar py-5  sticky top-0 z-50 flex items-center justify-between gap-5">
        <Link to={"/"}>
          <img src={logo} className="h-5" alt="" />
        </Link>
        <ul className=" list-none flex items-center gap-6">
          <li>
            <Link to={"/"}
              className={`text-sm font-semibold text-gray-400  py-5 border-b-[3px]  
              ${pathMatchRoute("/") ? "border-b-red-500 text-black" :"border-b-transparent" }`} >
              Home
            </Link>
          </li>
          <li>
            <Link to={"/offers"} className={`text-sm font-semibold text-gray-400  py-5 border-b-[3px]  
              ${pathMatchRoute("/offers")  ? "border-b-red-500 text-black" :"border-b-transparent" }`}>
              Offers
            </Link>
          </li>
          <li>
            <Link to={"/Signin"} className={`text-sm font-semibold text-gray-400  py-5 border-b-[3px]  
              ${pathMatchRoute("/Signin")  ? "border-b-red-500 text-black" :"border-b-transparent" }`}>
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}
