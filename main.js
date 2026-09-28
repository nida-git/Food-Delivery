import React from "react"
import ReactDOM from "react-dom/client"

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

       </div>
    </div>
}
const Footer = ()=>{
    return <div>
        footer
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