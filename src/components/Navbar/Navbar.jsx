import { Link, NavLink } from "react-router-dom"
import links from "../../utility/links";
import {HiMenuAlt1} from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai";
import Logo from "../../assets/logo/Logo.png";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="h-24 flex justify-between items-center container mx-auto px-3">
      <Link to="/"><img src={Logo} className="h-14" alt="donation campaign logo" /></Link>
      <ul className="main-nav hidden gap-12 md:flex">
        {
          links.map((link,idx) => <li key={idx}><NavLink to={link.path} className="text-lg text-[#0B0B0B] duration-150 hover:text-[#FF444A] font-medium">{link.path_name}</NavLink></li>)
        }
      </ul>
      <div onClick={()=> setToggle(!toggle)} className="cursor-pointer text-[#0B0B0B] text-xl active:scale-95  h-10 w-10 bg-[#FF444A]/40 shadow-md rounded-full flex justify-center items-center md:hidden">
        {
          toggle ? <AiOutlineClose></AiOutlineClose> : <HiMenuAlt1></HiMenuAlt1>
        }
      </div>
      <ul className={`md:hidden flex flex-col gap-6 justify-center items-center main-nav absolute  bg-gray-300/80 rounded-b-sm top-24 duration-150 w-1/2 py-4  ${toggle ? 'right-0':'-right-full'}`}>
        {
          links.map((link,idx) => <li key={idx}><NavLink to={link.path} className="text-lg text-[#0B0B0B] duration-150 hover:text-[#FF444A] font-medium">{link.path_name}</NavLink></li>)
        }
      </ul>
    </nav>
  )
}

export default Navbar