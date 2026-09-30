import React from "react"
import ReactDOM from "react-dom/client"



const restaurantArr = [

      {
        "itemID": 76,
"itemName": "Afghan Kebabs",
"itemDescription": "Grilled kebabs made with marinated lamb, served with naan.",
"itemPrice": 450,
"restaurantName": "Peacock Rooftop Restaurant",
"restaurantID": 28,
"imageUrl": "https://fakerestaurantapi.runasp.net/images/afghan%20kebabs.jpg"
},
{
    "itemID": 11,
    "itemName": "Bagara Baingan",
    "itemDescription": "Fried brinjal cooked in a rich, flavorful curry.",
    "itemPrice": 250,
    "restaurantName": "Mumtaz Restaurant",
"restaurantID": 6,
"imageUrl": "https://fakerestaurantapi.runasp.net/images/bagara%20baigan.webp"
},
 {
    "itemID": 78,
    "itemName": "Baklava",
    "itemDescription": "Sweet pastry made with layers of filo dough, honey, and nuts.",
    "itemPrice": 200,
    "restaurantName": "Peacock Rooftop Restaurant",
    "restaurantID": 28,
    "imageUrl": "https://fakerestaurantapi.runasp.net/images/baklava.jpg"
},

]
const Header = ()=>{
    return <div className="header">
        <div className="logo" >
      <img src="https://static.vecteezy.com/system/resources/thumbnails/035/767/491/small/food-logo-silhouette-black-color-illustration-vector.jpg" />
      GoodFood
        </div>
      <div className="nav-bar" >
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
            <li>Shops</li>
        </ul>
      </div>
      <div className="search-icon">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94_wUVuu15uVQ8ICRGUjpZ_xB9nfFLSmbGM504-NaZg&s=10" /> 
      </div>
      <div className="profile">
        <img src="https://freesvg.org/img/abstract-user-flat-4.png" />

      </div>
    </div>
}

const Food = ()=>{
    return <div className="food-item"  >
        <img src="https://img.magnific.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?semt=ais_hybrid&w=740&q=80" />
        <p> Pasta</p>
    </div>
}

const Card = ({resDetails})=>{
    const {itemName, restaurantName , itemPrice, imageUrl} = resDetails
    return <div className="card-container" >
        <img src= {imageUrl} /> 
        <h2> {itemName} </h2>
        <p> {restaurantName} </p>
        <div className="price"  > $ {itemPrice} </div>
        <div className="rating" > Rating: 4.5 </div>

    </div>
}


const Body = ()=>{
    return <div>
       
       <div className="top-food" >
        <div className="top-heading" >
        <h2> Our Top foods</h2>
        </div>
        <div className="food-cards" >
            <Food/>
            <Food/>
            <Food/>
            <Food/>
            <Food/>
            <Food/>

        </div>
       </div>
       <div className="restaurants" >
        <div className="res-heading" >
            <h2>Restaurants</h2>
        </div>
        <div className="res-cards" >

            { restaurantArr.map((elem)=>{
                return <Card resDetails={elem} />
            })}

            {/* <Card resDetails = {obj1} />
            <Card resDetails = {obj2} />
            <Card resDetails = {obj3} /> */}
           

        </div>

       </div>
    </div>
}
const Footer = ()=>{
    return <div className="footer" >
        <p>
            All Copyright reserved
        </p>
        
    </div>
}

const App = ()=>{
    return <div>
        <Header/>
        <Body/>
        <Footer/>

    </div>
}







const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App/>)