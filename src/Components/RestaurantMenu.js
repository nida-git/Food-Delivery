import { useState } from "react";
import { baseURL } from "../utils/constants";




const RestaurantMenu =({details})=>{
    const {name, city, cloudinaryImageId , costForTwoMessage , avgRating, totalRatingsString , cuisines} = details.data.cards[2].card.card.info
    return <div className="menu-container-div" >
        <div className="menu-container" >
           <h1>  {name} </h1>
           <div> <img src={ baseURL + cloudinaryImageId} /> </div>
           <p> {avgRating} ({totalRatingsString}) . {costForTwoMessage} </p>
           <p> {cuisines} </p>
        </div>




    </div>
}

export default RestaurantMenu