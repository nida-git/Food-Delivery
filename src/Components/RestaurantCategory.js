import MenuItems from "./menuItems";

const RestaurantCategory = ({ catDetails }) => {

  const { title, itemCards } = catDetails;
  console.log("running");
  return (
    <div>
        <div className="accordian-head" >
   <h2> {title}</h2>
        </div>
        <div className="accordian-body">
            {itemCards.map(()=>{
                return <MenuItems />
            })}
        </div>
   

     
    </div>
  );
};
export default RestaurantCategory;
