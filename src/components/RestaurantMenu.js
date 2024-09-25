import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  // how to read dynamic URL params

  //   const params = useParams();
  //   const { resId } = params;
  //   console.log(params);
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <div className="card1">
        <h1>Resaurant ID : {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="" />
        <h2>{restaurant?.area}</h2>
        <h2>{restaurant?.city}</h2>
        <h2>{restaurant?.avgRating} stars</h2>
        <h2>{restaurant?.costForTwoMessage}</h2>
      </div>
      <h2>{restaurant?.cuisines}</h2>
    </div>
  );
};

export default RestaurantMenu;

/*
object.values(restaurant?.menu?.items).map((item)=>(
  <li key={item.id} >{item.name}</li>
  ))
*/
