import { useOutletContext } from "react-router-dom"
import Card from "../Card/Card";
import { useEffect, useState } from "react";


const Category = () => {
  const [searchText, setSearchText] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [getData, setData] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const form_data = document.getElementById('form-data');
  const search = document.getElementById('search');
  const data = useOutletContext();
  // console.log(data);
  useEffect(()=>{
    if(data.length > 0){
      form_data.addEventListener('submit', (e) => {
        e.preventDefault();
        setSearchText(e.target.search.value);
      });

      search.addEventListener('input', (e) => {
        setSearchInput(e.target.value);
      });

      if(!searchInput){
          setData(data);
          setNotFound(false);

      }else{
        const filterData = data.filter(item => {
          if(item.category.toLowerCase().includes(searchText.toLowerCase())){
            return item;
          }else if(item.title.toLowerCase().includes(searchText.toLowerCase())){
            return item;
          }
        });

         if(!filterData.length){
          setNotFound(true)
         }else{
          setData(filterData);
         }
          
        
        
      }
    }
  },[data.length, data, form_data, search, searchInput, searchText]);
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

export default Category