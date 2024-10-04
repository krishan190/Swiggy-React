import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import userContext from "../utils/UserContext";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  costForTwo,
  avgRatingString,
  areaName,
  id,
}) => {
  const { user } = useContext(userContext);
  return (
    <div className="w-56 p-3 m-3 shadow-xl  bg-pink-200">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{costForTwo}</h3>
      <h4>{avgRatingString} stars</h4>
      <h4>{areaName}</h4>
      <h4>{id}</h4>
      <h4 className="font-bold">{user.name}</h4>
      <h4 className="font-bold">{user.email}</h4>
    </div>
  );
};

export default RestaurantCard;
