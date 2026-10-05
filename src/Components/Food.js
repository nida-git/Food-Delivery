import { foodURL, imageURL } from "../utils/constants";

const Food = ({foodDetails})=>{
  
    return <div className="food-item"  >

        <img src= {imageURL + foodDetails?.imageId} />
    </div>
}

export default Food;