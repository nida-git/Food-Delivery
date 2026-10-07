import { Link } from "react-router";
import { dummyProfile, logoURL, searchIcon } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logoURL} />
        <i>GoodFood</i>
      </div>
      <div className="nav-bar">
        <ul>
          <li> <Link to="/" >Home </Link> </li>
          <li> <Link to="/about"> About </Link> </li>
          <li> <Link to="/contact" >Contact </Link> </li>
          <li> <Link to="/cart">Shops</Link> </li>
        </ul>
      </div>
      <div className="search-icon">
        <img src={searchIcon} />
      </div>
      <div className="profile">
        <img src={dummyProfile} />
      </div>
    </div>
  );
};

export default Header;
