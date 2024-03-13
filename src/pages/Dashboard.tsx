import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { BsSearch } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'
import { HiTrendingDown,HiTrendingUp } from 'react-icons/hi'
import { WiDayThunderstorm } from 'react-icons/wi'
import data from '../assets/data.json'
const dashboard = () => {
  return (
    <div className='adminContainer'>
{/* sidebar */}
<AdminSidebar/>
<main className='dashboard'>
  <div className="bar">
    <BsSearch/>
    <input type="text" placeholder='Search for data,users,docs' />
    <FaRegBell/>
    <img src="" alt="" />
  </div>
  <section className="widgetContainer">
      <WidgetItem percent={40} amount={true} value={340000} heading="Revenue" color='rgb(0,115,255)' />
      <WidgetItem percent={-10} value={3400} heading="Inflation" color='red' />
      <WidgetItem percent={80}  value={40000} heading="Transactions" color='green' />
      <WidgetItem percent={40} amount={true} value={1000} heading="Products" color='orange' />

  </section>
  <section className="graphContainer">
    <div className="revenueChart">
        <h2>Revenue & Transaction</h2>
        {/* //graph here */}

    </div>
    <div className="dashboardCategories">
          <h2>Inventory</h2>
          <div>
            {
              data.categories.map(i=>
                
                (
                  <CategoryItem 
                  key={i.heading}
                  heading={i.heading} 
                  value={i.value} 
                  color={`hsl(${i.value*4},${i.value}%,50%)`}/>

                ))
            }
          </div>
          </div>
  </section>
</main>
{/* main */}
    </div>
  )
}
interface WidgetItemProps{
  heading:string,
  value:number,
  percent:number,
  color:string,
  amount?:boolean;

}
const WidgetItem=({heading,value,percent,color,amount}:WidgetItemProps)=><article className='widget'>
  <div className='WidgetInfo'>
    <p>{heading}</p>
    <h4>{amount? `$${value}`: value}</h4>
    {
      percent>0?<span className='green'><HiTrendingUp/>+{percent}%{" "}</span>:<span className='red'><HiTrendingDown/>{percent}%{" "}</span>
    }
  </div>
  <div className="widgetCircle" style={{background:`conic-gradient(${color} ${Math.abs(percent)/100*360}deg,rgb(255,255,255) 0)`}}>
    <span style={{color,}}>{percent}%</span>
  </div>
</article>
interface CategoryItemProps{
  color:string,
  value:number,
  heading:string,
}
const CategoryItem=({color,value,heading}:CategoryItemProps)=>(
  <div className='categoryItem'>

    <h5>
      {heading}
    </h5>
    <div>
    <div style={{backgroundColor:color,width:`${value}%`}}></div>

    </div>
    <span>{value}%</span>
  </div>
)
export default dashboard