import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";



const DonationDetails = () => {
  const [getFindData, setFindData] = useState({})
  const data = useOutletContext();
  const params = useParams();
 
  
  useEffect(()=> {
    const findData = data?.find(item => item.id === parseInt(params.Id));
    setFindData(findData);

  },[data,params]);

 const {id,image,title,button_bg,description} = getFindData || {};
 console.log(image);
  return (
    <section className="container mx-auto px-3 w-full mt-16">
      <div className="flex flex-col mb-9 h-[700px] relative">
        <img src={image} className="w-full  h-full rounded-lg object-cover" alt={`image of ${title}`} />
        <div className="bg-black/20 w-full absolute bottom-0 left-0 p-9 rounded-b-lg">
          <button style={{backgroundColor: `${button_bg}`}} className="px-7 text-white py-4 rounded font-medium text-base active:scale-95">Donate $290</button>
        </div>
      </div>
      <h2 className="text-[#0B0B0B] text-3xl md:text-4xl font-bold mt-11 mb-6">{title}</h2>
      <p className="text-sm md:text-base text-gray-600 text-justify">{description}</p>
    </section>
  )
}

export default DonationDetails