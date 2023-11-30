import logo from "../../assets/img/logo.png";
import "../header/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__burger">
          <span></span>
        </div>
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__menu menu">
          <ul className="menu__list">
            <li className="menu__list-item"></li>
            <li className="menu__list-item"></li>
            <li className="menu__list-item"></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
