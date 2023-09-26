import HeroBanner from "../components/Bennar/HeroBanner"
import Category from "../components/Category/Category";
import BannerImage from "../assets/image/hero-baner.png";
import { useState } from "react";

const Home = () => {
  const [getSearch, setGetSearch] = useState('');

  const [getChange, setGetChange] = useState('');

 

  const handleSubmit = e => {
    e.preventDefault();
    setGetSearch(e.target.search.value);
  }

  const handleOnChange = e => {
    setGetChange(e.target.value);
  }


  return (
    <>
    <section className="h-screen flex justify-center items-center relative">
   
      <img className=" w-full h-full -top-24 opacity-10 left-0 absolute" src={BannerImage} alt="" />
   
      {/* <div className="absolute top-0 left-0 w-full  h-full bg-white/90 z-20"></div> */}
    
      <div className="relative z-30  h-full -top-20">
      <HeroBanner handleSubmit={handleSubmit} handleOnChange={handleOnChange}></HeroBanner>
      </div>
    </section>
    <section className="container mx-auto px-3 mt-8">
      <Category getSearch={getSearch} getChange={getChange}></Category>
    </section>
    </>
  )
}

export default Home