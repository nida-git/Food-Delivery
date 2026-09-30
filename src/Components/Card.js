import { imageURL } from "../utils/constants";

const Card = ({resDetails})=>{
    const {itemName, restaurantName , itemPrice, imageId} = resDetails
    return <div className="card-container" >
        <img src= {imageURL + imageId} /> 
        <h2> {itemName} </h2>
        <p> {restaurantName} </p>
        <div className="price"  > $ {itemPrice} </div>
        <div className="rating" > Rating: 4.5 </div>

    </div>
}

export default Card;