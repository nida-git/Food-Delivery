
import { baseURL } from "../utils/constants";

const MenuItems = ({ itemDetails }) => {
  const { name, imageId, defaultPrice, description, ratings } = itemDetails.card.info;


  return (
    <div className="item-container" >
      <div className="item-text" >
        <h3> {name} </h3>
        <p> ₹ {defaultPrice / 100} </p>
        <div>
           ⭐ {ratings.aggregatedRating.rating} ({ratings.aggregatedRating.ratingCountV2})
        </div>
        <div> {description} </div>
      </div>

      <div className="item-img"> <img src= {baseURL + imageId} />  </div>
    </div>
  );
};

export default MenuItems;
