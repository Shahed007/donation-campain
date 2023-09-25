import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const MainLayout = () => {
  return (
    <div className="font-inter relative overflow-hidden ">
      <header className=" bg-transparent relative z-40 ">
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default MainLayout;