import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { PieChart, Pie,  Cell, ResponsiveContainer,  } from 'recharts';
import { getLocalStorage } from '../utility/LocalStorage/LocalStorage';


const Statistics = () => {
  const [getFilterData, setFilterData] = useState([]);
  const [getTotal, setTotal] = useState(0);
  const [getSaveTotal, setSaveTotal] = useState(0);
  const data = useOutletContext();

  

  const obj = [
    {name: "Total Donation", value: getTotal},
    {name: "Your Donation", value: getSaveTotal},

  ]

  useEffect(()=>{
    if(data?.length > 0){
      
      const total = data?.reduce((prev,current) => prev + parseInt(current.price),0)
      setTotal(total);
      
    }
   

  },[data,setTotal]);

  useEffect(()=>{
    if(data?.length > 0){
      const getSaveData = getLocalStorage();
      const filterData = data?.filter(item => getSaveData.includes(item.id));
      setFilterData(filterData); 
    
    }

  },[data]);


  useEffect(()=>{
    if(getFilterData.length> 0){
      const saveTotal = getFilterData.reduce((prev,current) => prev + current.price,0);
      setSaveTotal(saveTotal);
    }
  },[getFilterData])

  useEffect(()=>{
    const percentageChange = ((getTotal - getSaveTotal) / (getTotal)) * 100;
   console.log(percentageChange); 
  },[getSaveTotal,getTotal])

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent,  }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

  return (
    <section className="container mx-auto px-3 flex justify-center items-center h-screen">
       <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={obj}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            fill="#8884d8"
            dataKey="value"
          >
          
            {obj.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </section>
  )
}

export default Statistics