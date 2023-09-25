import { toast } from "react-toastify";


const getLocalStorage = () => {
  const getStorage = localStorage.getItem('donate');

  if(getStorage){
    return JSON.parse(getStorage);
  }else{
    return [];
  }
}

const saveLocalStorage = id => {
  const getStorage = getLocalStorage();

 
  const ifExist = getStorage.find(item => item == id);

  if(ifExist){
    return toast.warn('You already donated', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }else{
    toast.success("Your donation is complete. Thanks for donating", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const addArr = [];

  addArr.push(...getStorage, id);

  localStorage.setItem('donate', JSON.stringify(addArr));
}

export {getLocalStorage, saveLocalStorage};