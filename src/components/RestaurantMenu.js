import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="m-5 p-5">
      <div>
        <h1>Resaurant ID : {resId}</h1>
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          alt=""
          className="h-80"
        />
        <h2>{restaurant?.name}</h2>
        <h2>{restaurant?.area}</h2>
        <h2>{restaurant?.city}</h2>
        <h2>{restaurant?.avgRating} stars</h2>
        <h2>{restaurant?.costForTwoMessage}</h2>
      </div>
      <div>
        <button
          className="border-solid border-2 border-black font-bold bg-green-300"
          onClick={() => {
            addFoodItem(restaurant?.name);
          }}
        >
          Add Item
        </button>
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
