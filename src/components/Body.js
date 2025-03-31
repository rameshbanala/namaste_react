import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mock_data";
import { useState } from "react";
const Body = () => {
    const [resList,setResList] = useState(restaurantList);
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for food..." />
      </div>
      <button onClick={()=>{
        const filteredList = restaurantList.filter((res) => res.info.avgRating > 4.4);
        setResList(filteredList);
      }}>Top restaurants</button>
      <div className="restaurants-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
