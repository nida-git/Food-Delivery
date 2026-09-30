import { foodURL } from "../utils/constants";

const Food = ({foodDetails})=>{
    const {itemName, imageId} = foodDetails
    return <div className="food-item"  >

        <img src= {foodURL + imageId} />
        {console.log(foodURL + imageId)}
        <p> {itemName}</p>
    </div>
}

export default Food;