import { useEffect, useState } from "react"
import { getLocalStorage } from "../utility/LocalStorage/LocalStorage";
import DonationCard from "../components/Card/DonationCard/DonationCard";
import { useOutletContext } from "react-router-dom";

const Donation = () => {
  const [donateData, setDonateData] = useState([]);
  const data = useOutletContext();


    
 
    useEffect(()=>{
      const getStorage = getLocalStorage();

      const filterData = data.filter(item => getStorage.includes(item.id));
      setDonateData(filterData);
    },[data])
 
  return (
    <section className="container mx-auto px-3 mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
      {
        donateData?.map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)
      }
    </section>
  )
}

export default Donation