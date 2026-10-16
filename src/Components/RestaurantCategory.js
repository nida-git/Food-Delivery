import MenuItems from "./menuItems";
import { useState } from "react";

const RestaurantCategory = ({ catDetails , command }) => {
    const [showItem, setShowItem] = useState(false)
  const { title, itemCards } = catDetails;
    console.log(command)
  return (
    <div className="acc-container">
      <div onClick={()=>{
        setShowItem(!showItem)
      }} className="accordian-head">
        <h2> {title}</h2>
        <p> 🔽 </p>
      </div>
      <div className="accordian-body">
        {command ? <div> {itemCards.map((elem) => {
          return <MenuItems key={elem.card.info.id} itemDetails={elem} />;
        })} </div> : <div></div> }
       
      </div>
    </div>
  );
};
export default RestaurantCategory;
