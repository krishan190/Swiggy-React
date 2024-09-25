import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  costForTwo,
  avgRatingString,
  areaName,
  id,
}) => {
  return (
    <div className="w-56 p-3 m-3 shadow-xl  bg-pink-200">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{costForTwo}</h3>
      <h4>{avgRatingString} stars</h4>
      <h4>{areaName}</h4>
      <h4>{id}</h4>
    </div>
  );
};

export default RestaurantCard;
