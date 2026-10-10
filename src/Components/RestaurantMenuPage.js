import { useParams } from "react-router";
import { menuAPI } from "../utils/constants";
import { useEffect, useState } from "react";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantMenuPage = () => {

    const [menu, setMenu] = useState(null)
    const { restaurantId } = useParams();

  async function fetchMenu() {
    const response = await fetch(menuAPI + restaurantId);
    const data = await response.json();
    setMenu(data.data.cards[2].card.card.info)
    console.log(menu);

  }

  useEffect(()=>{
    fetchMenu()
  }, [])
if (menu === null){
    return <div> Loading..</div>
}

  return <div>

    <RestaurantMenu details = {menu} />

     

  </div>;
};
export default RestaurantMenuPage;
