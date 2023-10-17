import { Link, useLocation } from "react-router-dom";
import logo from '/public/assets/img/rdc-logo.svg'
export default function Header() {
 
  const location = useLocation ()
  console.log(location.pathname);

  function pathMatchRoute(route){
    if(route=== location.pathname){
      return true
    }
  }

  return (
    <div className="container">
      <div className="navbar bg-white border-b shadow-sm  py-5  sticky top-0 z-50 flex items-center justify-between gap-5">
        <Link>
          <img src={logo} className="h-5" alt="" />
        </Link>
        <ul className=" list-none flex items-center gap-6">
          <li>
            <Link className={`${pathMatchRoute("/")} text-sm font-semibold text-gray-400  py-5  border-b-[3px] border-b-transparent`}>Home</Link>
          </li>
          <li>
           <Link className=" text-sm font-semibold text-gray-400  py-5  ">Offers</Link>
          </li>
          <li>
            <Link className=" text-sm font-semibold text-gray-400  py-5  ">Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
