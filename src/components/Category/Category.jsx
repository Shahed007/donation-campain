import { useOutletContext } from "react-router-dom"
import Card from "../Card/Card";


const Category = () => {

  const data = useOutletContext();
  console.log(data);
  return (
    <div>
    {
      data.map(item => <Card key={item.id} item={item}></Card>)
    }
    </div>
  )
}

export default Category