import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO } from "../contants";
import userContext from "../utils/userContext";

const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2"
      alt="logo"
      src={LOGO}
    />
  </a>
);


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {user, setUser} = useContext(userContext);
  return (
    <div className="flex justify-between bg-pink-200 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2"><Link to='/'>Home</Link></li>
          <li className="px-2"><Link to='/about' >About</Link></li>
          <li className="px-2"><Link to='/contact' >Contact</Link></li>
          <li className="px-2"><Link to='/cart' >Cart</Link></li>
          <li className="px-2"><Link to='/instamart' >Instamart</Link></li>
        </ul>
      </div>
      <span className ="p-10 font-bold text-red-900">{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
