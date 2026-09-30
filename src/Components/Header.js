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
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
          <li>Shops</li>
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
