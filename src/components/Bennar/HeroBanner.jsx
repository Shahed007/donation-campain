

const HeroBanner = () => {
  return (
    <div className="max-w-3xl mx-auto px-3 flex flex-col justify-center items-center">
    <h1 className="font-bold text-4xl  text-[#0B0B0B] text-center mb-10">I Grow By Helping People In Need</h1>
  
      <form  className="flex w-full justify-center">
      <input className="w-1/2  px-4 py-2 border-2 border-[#FF444A] rounded-l-lg" placeholder="Search hear" type="text" />
      <input className="px-6 py-3 bg-[#FF444A] rounded-r-lg text-white text-base font-semibold"  type="submit" value="Search" />
      </form>
 
    </div>
  )
}

export default HeroBanner