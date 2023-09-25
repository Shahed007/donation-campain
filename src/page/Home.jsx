import HeroBanner from "../components/Bennar/HeroBanner"
import BannerImage from "../assets/image/hero-baner.png";

const Home = () => {
  return (
    <section className="h-screen">
    <div className="absolute top-0 left-0 w-full h-[90%] -z-10">
      <img className="h-full w-full" src={BannerImage} alt="" />
    </div>
    <div className="absolute top-0 left-0 w-full bg-white/90 h-full z-20"></div>
      <div className="relative z-30 mt-32">
      <HeroBanner></HeroBanner>
      </div>
    </section>
  )
}

export default Home