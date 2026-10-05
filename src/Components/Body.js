import { useEffect, useState } from "react";
import Card from "./Card";
import Food from "./Food";
import { fetchDataURL } from "../utils/constants";
import { Circles, Squares } from "./Shimmer";

const Body = () => {
  const [restaurantArr, setRestaurantArr] = useState(null);
  const [foodArr, setFoodArr] = useState(null)

async function fetchData() {
  let response = await fetch(fetchDataURL)
  const data = await response.json()
  console.log(data);
  setRestaurantArr(data?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants)
  setFoodArr(data?.data?.cards[0]?.card?.card.imageGridCards.info)
}



useEffect(()=>{
    fetchData()
}, [])

function handleClick() {
    const filterredArr = restaurantArr.filter((elem) => {
      if (elem.itemPrice >= 400) {
        return true;
      } else {
        return false;
      }
    });
    setRestaurantArr(filterredArr);
  }



if(restaurantArr == null){
  return <div className="shimmer" >
<div className="food-shimmer" >
  <Circles/>
  <Circles/>
  <Circles/>
  <Circles/>
  <Circles/>
  <Circles/>
  <Circles/>

</div  >

<div className="res-shimmer" >
  <Squares / >
  <Squares / >
  <Squares / >
  <Squares / >
  <Squares / >
  <Squares / >
  <Squares / >
  <Squares / >

</div>

  </div>
}

  return (
    <div>
      <div className="top-food">
        <div className="top-heading">
          <h2> Our Top foods</h2>
        </div>
        <div className="food-cards">
          {foodArr.map((elem) => {
            return <Food foodDetails={elem} key={elem.id} />;
          })}
        </div>
      </div>
      <div className="restaurants">
        <button className="filter-btn" onClick={handleClick}>Filter by price</button>
        <div className="res-heading">
          <h2>Restaurants</h2>
        </div>
        <div className="res-cards">
          {restaurantArr.map((elem) => {
            return <Card resDetails={elem} key={elem.info.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
