import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {
  const [data, setData] = useState([]);
  const loc = useLocation();
  useEffect(()=>{
    fetch('/data.json')
    .then(res => res.json())
    .then(data => setData(data));
  },[]);

  useEffect(()=>{
    if(loc.pathname == "/"){
      document.title = "Donation-Home";
    }else{
      document.title = `Donation${loc.pathname.replace("/","-")}`;
    }
  },[loc])

  

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