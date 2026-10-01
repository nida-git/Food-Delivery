import { useState } from "react";
import { foodArr, restaurantArr } from "../utils/mockData";
import Card from "./Card";
import Food from "./Food";



const Body = () => {
  const [restaurantArr, setRestaurantArr] = useState([  {
    "itemID": 76,
"itemName": "Afghan Kebabs",
"itemDescription": "Grilled kebabs made with marinated lamb, served with naan.",
"itemPrice": 450,
"restaurantName": "Peacock Rooftop Restaurant",
"restaurantID": 28,
"imageId": "afghan%20kebabs.jpg"
},
{
    "itemID": 11,
    "itemName": "Bagara Baingan",
    "itemDescription": "Fried brinjal cooked in a rich, flavorful curry.",
    "itemPrice": 250,
    "restaurantName": "Mumtaz Restaurant",
"restaurantID": 6,
"imageId": "bagara%20baigan.webp"
},
 {
    "itemID": 78,
    "itemName": "Baklava",
    "itemDescription": "Sweet pastry made with layers of filo dough, honey, and nuts.",
    "itemPrice": 200,
    "restaurantName": "Peacock Rooftop Restaurant",
    "restaurantID": 28,
    "imageId": "baklava.jpg"
},
{
"itemID": 28,
"itemName": "Butter Chicken",
"itemDescription": "Creamy chicken cooked in a tomato-based sauce.",
"itemPrice": 500,
"restaurantName": "Indian Accent",
"restaurantID": 12,
"imageId": "butter%20chicken.jpg"
},
{
"itemID": 23,
"itemName": "Butter Chicken",
"itemDescription": "Tender chicken cooked in a rich tomato-based gravy with butter and cream.",
"itemPrice": 420,
"restaurantName": "Grand Hotel",
"restaurantID": 10,
"imageId": "butter%20chicken.jpg"
},
{
"itemID": 52,
"itemName": "Chettinad Chicken",
"itemDescription": "Spicy chicken curry made with Chettinad spices.",
"itemPrice": 450,
"restaurantName": "Dakshin",
"restaurantID": 20,
"imageId": "chettinad%20chicken.jpg"
},
{
"itemID": 88,
"itemName": "Chicken Biryani",
"itemDescription": "Aromatic basmati rice cooked with tender chicken and spices.",
"itemPrice": 280,
"restaurantName": "Bawarchi",
"restaurantID": 4,
"imageId": "chickenn%20biryani.webp"
},
{
"itemID": 79,
"itemName": "Chole Bhature",
"itemDescription": "Deep-fried bread served with spicy chickpea curry.",
"itemPrice": 250,
"restaurantName": "Agashiye",
"restaurantID": 29,
"imageId": "chole%20batura.jpg"
},
{
"itemID": 48,
"itemName": "Coffee",
"itemDescription": "Freshly brewed coffee served hot.",
"itemPrice": 60,
"restaurantName": "Koshy’s",
"restaurantID": 18,
"imageId": "coffee.jpg"
},
{
"itemID": 71,
"itemName": "Dal Baati Churma",
"itemDescription": "Traditional Rajasthani dish with wheat dumplings, dal, and sweet churma.",
"itemPrice": 350,
"restaurantName": "1135 AD",
"restaurantID": 26,
"imageId": "dal%20bati%20churma.jpg"
},
{
"itemID": 25,
"itemName": "Dal Bukhara",
"itemDescription": "Slow-cooked black lentils in a rich, creamy sauce.",
"itemPrice": 250,
"restaurantName": "Bukhara",
"restaurantID": 11,
"imageId": "dal%20bhukara.jpg"
},
{
"itemID": 29,
"itemName": "Dal Makhani",
"itemDescription": "Black lentils cooked with butter and cream.",
"itemPrice": 300,
"restaurantName": "Indian Accent",
"restaurantID": 12,
"imageId": "Dal-Makhani.webp"
},
{
"itemID": 44,
"itemName": "Dosa",
"itemDescription": "Crispy rice crepes served with sambar and chutneys.",
"itemPrice": 180,
"restaurantName": "Mavalli Tiffin Room (MTR)",
"restaurantID": 17,
"imageId": "Dosa.jpg"
},
{
"itemID": 9,
"itemName": "Double Ka Meetha",
"itemDescription": "Sweet dessert made with fried bread soaked in milk and flavored with saffron.",
"itemPrice": 180,
"restaurantName": "Shah Ghouse",
"restaurantID": 3,
"imageId": ""
},
{
"itemID": 54,
"itemName": "Filter Coffee",
"itemDescription": "Traditional South Indian coffee brewed with a drip filter.",
"itemPrice": 100,
"restaurantName": "Dakshin",
"restaurantID": 20,
"imageId": "filter-coffee.jpg"
},
{
"itemID": 21,
"itemName": "Firni",
"itemDescription": "Sweet pudding made with milk and rice flour.",
"itemPrice": 120,
"restaurantName": "Alhamdulillah Hotel",
"restaurantID": 9,
"imageId": "firni.jpg"
},
{
"itemID": 14,
"itemName": "Fish Amritsari",
"itemDescription": "Deep-fried fish marinated with spices, served with chutney.",
"itemPrice": 350,
"restaurantName": "The Fisherman’s Wharf",
"restaurantID": 7,
"imageId": "Amritsari-fish.webp"
},
{
"itemID": 47,
"itemName": "Fish Curry",
"itemDescription": "Spicy fish curry cooked with traditional South Indian spices.",
"itemPrice": 350,
"restaurantName": "Koshy’s",
"restaurantID": 18,
"imageId": "fish%20curry.jpg"
},])
  
  function handleClick(){
  
    const filterredArr = restaurantArr.filter((elem)=>{
      console.log("button is clicked");
      if(elem.itemPrice >= 400){
        return true
      }else {
        return false
      }
    })
   setRestaurantArr(filterredArr)
  }
 

  return (
    <div>
        <div className="top-food" >
        <div className="top-heading" >
        <h2> Our Top foods</h2>
        </div>
        <div className="food-cards" >
            {foodArr.map((elem)=>{
                return <Food foodDetails={elem} key={elem.itemID} />
            })
            }
          

        </div>
       </div>
      <div className="restaurants">
    <button onClick={handleClick} >
      Filter by price
    </button>
        <div className="res-heading">
          <h2>Restaurants</h2>
        </div>
        <div className="res-cards">
          {restaurantArr.map((elem) => {
            return <Card resDetails={elem} key={elem.itemID} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
