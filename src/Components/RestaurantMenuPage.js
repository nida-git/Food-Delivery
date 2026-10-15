import { useParams } from "react-router";
import { menuAPI } from "../utils/constants";
import { useEffect, useState } from "react";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenuPage = () => {

    const [menu, setMenu] = useState(null)
    const { restaurantId } = useParams();

  async function fetchMenu() {
    const response = await fetch(menuAPI + restaurantId);
    const data = await response.json();
    setMenu(data)


  }
  

  useEffect(()=>{
    fetchMenu()
  }, [])



if (menu === null){
    return <div> Loading..</div>
}

const categoryArr = menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards

const filterredArr = categoryArr.filter((elem)=>{
    if(elem.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"){
      return true
    }else {
      return false
    }
  })

  return <div>

    <RestaurantMenu details = {menu} />
{
filterredArr.map((elem)=> {
console.log(elem.card.card);
 return <RestaurantCategory key={elem.card.card.categoryId} catDetails = {elem.card.card} />

})}
     

  </div>;
}

export default RestaurantMenuPage;
