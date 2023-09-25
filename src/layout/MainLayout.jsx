import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const MainLayout = () => {
  return (
    <div className="font-inter relative overflow-hidden h-screen">
      <header className=" bg-transparent relative z-20 ">
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default MainLayout;