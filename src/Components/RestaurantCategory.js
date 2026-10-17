import MenuItems from "./menuItems";
import { useState } from "react";

const RestaurantCategory = ({ catDetails , command , showIndex }) => {
    // const [showItem, setShowItem] = useState(false)
  const { title, itemCards } = catDetails;
  return (
    <div className="acc-container">
      <div onClick={()=>{
       showIndex()
      }} className="accordian-head">
        <h2> {title}</h2>
        <p> 🔽 </p>
      </div>
      <div className="accordian-body">
        {console.log(command)}
        {
       
        command == "true" ? <div> {itemCards.map((elem) => {
          return <MenuItems key={elem.card.info.id} itemDetails={elem} />;
        })} </div> : <div></div> 
       }
       
      </div>
    </div>
  );
};
export default RestaurantCategory;
