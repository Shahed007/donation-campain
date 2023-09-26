import { useOutletContext } from "react-router-dom"
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';


const Category = ({getSearch, getChange}) => {
  const [getData, setGetData] = useState([]);
  const [notFound, setNotFound]= useState(false);
  const data = useOutletContext();
  


  useEffect(()=> {
   if(data.length > 0){

    
   if(!getSearch){
      setGetData(data);
      setNotFound(false);
    }else if(getSearch.toLowerCase() === 'all'){
        setGetData(data);
        setNotFound(false);
    }else{
      const filterData = data.filter(item => {
        if(item.category.toLowerCase().includes(getSearch.toLowerCase())){
          return item;
        }else if(item.title.toLowerCase().includes(getSearch.toLowerCase())){
          return item
        }
      });
      if(!filterData.length){
        setNotFound(true);
      }else{
        setNotFound(false);
        setGetData(filterData);
        
      }
    }

    
   }
  
  }, [data,getSearch]);

  useEffect(()=>{
    if(data.length > 0){
      if(getChange === ""){
        setGetData(data);
        setNotFound(false);
      }
    }
  },[data,getChange])
 
  return (
    <>
      {
        notFound ? 
        <h2 className="text-center h-screen flex justify-center items-center">Search data not found</h2>
        :
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          getData?.map(item => <Card key={item.id} item={item}></Card>)
        }
       </div>
      }
    </>
  )
}

Category.propTypes = {
  getSearch: PropTypes.string.isRequired,
  getChange: PropTypes.string.isRequired,

}

export default Category