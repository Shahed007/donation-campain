import { Link, NavLink } from "react-router-dom"
import Logo from "../../assets/logo/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  const links = [
    {
      path: '/',
      path_name: 'Home',
    },
    {
      path: '/donation',
      path_name: 'Donation',
    },
    {
      path: '/statistics',
      path_name: 'Statistics',
    },
  ]
  return (
    <nav className="h-24 flex justify-between items-center">
      <Link to="/"><img src={Logo} className="h-14" alt="donation campaign logo" /></Link>
      <ul className="main-nav flex gap-12">
        {
          links.map((link,idx) => <li key={idx}><NavLink to={link.path} className="text-lg text-[#0B0B0B] duration-150 hover:text-[#FF444A] font-medium">{link.path_name}</NavLink></li>)
        }
      </ul>
    </nav>
  )
}

export default Navbar