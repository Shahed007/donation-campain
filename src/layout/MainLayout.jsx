import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const MainLayout = () => {
  return (
    <div className="font-inter relative overflow-x-hidden">
      <header className="container mx-auto px-3 bg-transparent relative z-20">
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default MainLayout;