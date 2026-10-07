import { imageURL } from "../utils/constants";

const Card = ({resDetails})=>{
   const {info} = resDetails
    return <div className="card-container" >
        <img src= {imageURL + info.cloudinaryImageId} /> 
        <div className="text-div" >
       <h2> {info.name} </h2>
        <p> {info.cuisines } </p>
        <div className="price"  > {info.costForTwo} </div>
        <div className="rating" > Rating: {info.avgRating} </div>

        </div>
 
    </div>
}

export default Card;

