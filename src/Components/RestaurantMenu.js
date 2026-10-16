import { useState } from "react";
import { baseURL } from "../utils/constants";




const RestaurantMenu =({details})=>{
    const {name, city, cloudinaryImageId ,availability, costForTwoMessage , avgRating, totalRatingsString , cuisines} = details.data.cards[2].card.card.info
    return <div className="menu-container-div" >
           <h1>  {name} </h1>
           <img src={ baseURL + cloudinaryImageId} />
           <p className = "rating" > ⭐ {avgRating} ({totalRatingsString}) · {costForTwoMessage} </p>
           <p className = "cuisine" > {cuisines} </p>
           {availability.opened ? <div> open now </div> : <div> closed </div> }
       




    </div>
}

export default RestaurantMenu