import HeroBanner from "../components/Bennar/HeroBanner"
import Category from "../components/Category/Category";
import BannerImage from "../assets/image/hero-baner.png";

const Home = () => {
  return (
    <>
    <section className="h-screen flex justify-center items-center relative">
   
      <img className=" w-full h-full -top-24 opacity-10 left-0 absolute" src={BannerImage} alt="" />
   
      {/* <div className="absolute top-0 left-0 w-full  h-full bg-white/90 z-20"></div> */}
    
      <div className="relative z-30  h-full -top-20">
      <HeroBanner></HeroBanner>
      </div>
    </section>
    <section className="container mx-auto px-3 mt-8">
      <Category></Category>
    </section>
    </>
  )
}

export default Home