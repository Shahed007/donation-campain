import { useEffect, useState } from "react"
import { getLocalStorage } from "../utility/LocalStorage/LocalStorage";
import DonationCard from "../components/Card/DonationCard/DonationCard";
import { useOutletContext } from "react-router-dom";

const Donation = () => {
  const [showAll, setShowAll] = useState(false);
  const [donateData, setDonateData] = useState([]);
  const data = useOutletContext();


    
 
    useEffect(()=>{
      const getStorage = getLocalStorage();
      console.log(getStorage);
      const filterData = data.filter(item => getStorage.includes(item.id));
      setDonateData(filterData);
    },[data])
 
  return (
    <section className="container mx-auto px-3 mt-20 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {
        donateData.length == 0  ? 
        <div className="flex justify-center items-center h-screen w-screen text-xl text-center font-bold md:text-4xl">You are not donated please donate some money</div>
        :
        showAll ? 
        donateData?.map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)
        :
        donateData?.slice(0,4)?.map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)
      }
      </div>
      <div className={` justify-center my-10 ${donateData?.length > 4 ? 'flex':'hidden'} ${showAll ? 'hidden' : ''}`}>
        <button onClick={()=> setShowAll(!showAll)} className=" bg-[#009444] active:scale-95 px-9 py-3 text-base rounded-lg text-white font-semibold">See All</button>
      </div>
    </section>
  )
}

export default Donation