import React from "react";

const menuCart = ({ menuData }) => {
   //console.log(menuData)
    return (
        <>
        <section className="main-card--container">
     {menuData.map((curElem) => {     //Map method  ani mapmethod mah key pass grna prxa
            return(
                <>
                <div className="card-container" key={curElem.id}>
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">
            {curElem.id}
            </span>
            <span className="card-author subtle">{curElem.name}</span>
            <h2 className="card-title">{curElem.name}</h2>
            <span className="card-description subtle">
            {curElem.description}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis atque voluptates ipsum laboriosam. Quia, enim.
            </span>
            <div className="card-read">Read</div>
            </div>
            <img 
            src={curElem.image} 
            // alt="images" 
            className="card-media" />
            <span className="card-tag subtle">Order Now</span>
          </div>
        </div>
        </>

            );
        })}
        </section>
        </>
    );
};

export default menuCart;

