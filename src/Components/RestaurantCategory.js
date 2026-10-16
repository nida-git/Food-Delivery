import MenuItems from "./menuItems";
import { useState } from "react";

const RestaurantCategory = ({ catDetails }) => {
    const [showItem, setShowItem] = useState(true)
  const { title, itemCards } = catDetails;
  return (
    <div className="acc-container">
      <div className="accordian-head">
        <h2> {title}</h2>
        <p> 🔽 </p>
      </div>
      <div className="accordian-body">
        {showItem? <div> {itemCards.map((elem) => {
          return <MenuItems key={elem.card.info.id} itemDetails={elem} />;
        })} </div> : <div></div> }
       
      </div>
    </div>
  );
};
export default RestaurantCategory;
