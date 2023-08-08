import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import Navbar from './Navbar';
const uniqueList=[
    ...new Set(Menu.map((curElem)=>{
return curElem.category;
})
),
"All",]
console.log(uniqueList)
function Resturant() {
    const[menuData,setMenuData]= useState(Menu);
    // eslint-disable-next-line
    const[menuList,setMenuList]=useState(uniqueList);
    const filterItem=(category)=>{
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedList= Menu.filter((curElem)=>{
            return curElem.category===category;
        })
        setMenuData(updatedList);
    }
  return (
    <div>
        <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData} />
    </div>
  )
}

export default Resturant
