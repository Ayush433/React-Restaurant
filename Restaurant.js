import React from "react";
import"./style.css";
import Menu from "./menuApi.js";
import MenuCart from "./menuCart.js";

const Restaurant = () => {
   // use of React Hook (use state hook )//
   // useState is not defined error lai solve grna ko lago react.useState grna preko ho 
   const [menuData, setMenuData]= React.useState(Menu); //Hooks
   const filterItem =(category) =>{
       const updatedList = Menu.filter((curElem)=>{
           return  curElem.category === category;

       });
       setMenuData(updatedList);

   };

    return (
        <>
        <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group__item" onClick ={() => filterItem("breakfast")}>Breakfast</button>
                <button className="btn-group__item"onClick ={() => filterItem("lunch")}>lunch</button>
                <button className="btn-group__item"onClick ={() => filterItem("evening")}>Evening</button>
                <button className="btn-group__item"onClick ={() => filterItem("dinner")}>Dinner</button>
                <button className="btn-group__item"onClick ={() => setMenuData(Menu)}>All</button>
            </div>
        </nav>
        <MenuCart menuData={menuData} /> {/* Data pass through one component to another conmponent  from parents to child */}
        </>
    );
};
 
export default Restaurant;