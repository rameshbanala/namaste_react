import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, costForTwo, areaName } =
    resData?.info;
  //console.log(name, cloudinaryImageId);
  const { slaString } = resData?.info?.sla;
  /* Dummy data for restaurant card */
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-img"
        alt="Restaurant"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4>
        Restaurant Name: <span>{name}</span>
      </h4>
      <h4>
        Location: <span>{areaName}</span>
      </h4>
      <h4>
        Rating: <span>{avgRating}</span>
      </h4>
      <h4>
        Price: <span>{costForTwo}</span>
      </h4>
      <h4>
        Delivery in: <span>{slaString}</span>
      </h4>
    </div>
  );
};
export default RestaurantCard;
