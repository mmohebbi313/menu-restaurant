import React from "react";

const Menu = ({exthing}) => {
  return (
    <div className="section-center">
      {exthing.map( tt => (
       <article key={tt.id} className="menu-item">
       <img src={tt.img} alt={tt.title} className="photo" />
       <div className="item-info">
         <header>
           <h4>{tt.title}</h4>
           <h4 className="price">{tt.price}</h4>
         </header>
         <p className="item-text">{tt.desc}</p>
       </div>
     </article>
      ))}
      
    </div>
  );
};

export default Menu;
