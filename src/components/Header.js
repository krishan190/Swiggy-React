import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

export const Title = () => (
  <a href="/">
    <img
      className="h-24 p-2"
      alt="logo "
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBfy-1v_MLOMDjTVOEPHJL6S7NTp1Fkz0yIA&s"
    />
  </a>
);

const Header = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  

  return (
    <div className="flex justify-between bg-pink-200 ">
      <Title />
      <div className="nav-items">
        <ul className="flex py-9">
          <Link to="/">
            <li className="px-4">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-4">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-4">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-4">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-4">Cart-{cartItems.length} Items</li>
          </Link>
        </ul>
      </div>
      <h1 className="flex py-9">{isOnline ? "🟢" : "🔴"}</h1>
      <h1 className="p-10 font-bold text-blue-600">{user.name}</h1>
      {isloggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
