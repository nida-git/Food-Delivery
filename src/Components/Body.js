import { foodArr, restaurantArr } from "../utils/mockData";
import Card from "./Card";
import Food from "./Food";

const Body = () => {
  return (
    
    <div>
        <div className="top-food" >
        <div className="top-heading" >
        <h2> Our Top foods</h2>
        </div>
        <div className="food-cards" >
            {foodArr.map((elem)=>{
                return <Food foodDetails={elem} />
            })
            }
          

        </div>
       </div>
      <div className="restaurants">
        <div className="res-heading">
          <h2>Restaurants</h2>
        </div>
        <div className="res-cards">
          {restaurantArr.map((elem) => {
            return <Card resDetails={elem} key={elem.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
