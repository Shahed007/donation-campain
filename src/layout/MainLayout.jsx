import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('/data.json')
    .then(res => res.json())
    .then(data => setData(data));
  },[])
  return (
    <div className="font-inter relative overflow-x-hidden ">
      <header className=" bg-transparent relative z-40 ">
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet context={data}></Outlet>
        <ToastContainer></ToastContainer>
      </main>
      
    </div>
  )
}

export default MainLayout;