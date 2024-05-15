import profilePhoto from "../assets/snehamoy-dp.jpg";
import "/src/styles/header.css";

const Header = () => (
  <header className="header">
    <div className="header__text-wrapper">
      <h1 className="header__title">Sneahamoy Bag</h1>
      <p className="header__sub-title">Web Developer</p>
    </div>
    <div className="header__img-wrapper">
      <img
        src={profilePhoto}
        alt="Photo of Snehamoy Bag"
        className="header__img"
      />
    </div>
  </header>
);
export default Header;
