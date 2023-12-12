import { IonSearchbar } from "@ionic/react";
import "./Header.css";
import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";

const Header = ({ showLeftArrow }: { showLeftArrow: boolean }) => {
  const [isShowDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    window.history.back();
  };

  const showDropdown = () => {
    setShowDropdown(!isShowDropdown);
  };

  const renderizeHeader = () => {
    if (showLeftArrow) {
      return (
        <div className="header-container padding-arrow">
          <div className="left-arrow" onClick={handleClick}>
            <img src="/icons/arrow-left.svg" alt="left arrow" />
          </div>
          <div className="icon-account">
            <img
              src="/icons/person.svg"
              alt="person icon"
              onClick={showDropdown}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="header-container">
          <div className="search-bar">
            <IonSearchbar placeholder="Pesquisar na loja"></IonSearchbar>
          </div>
          <div className="icon-account">
            <img
              src="/icons/person.svg"
              alt="person icon"
              onClick={showDropdown}
            />
          </div>
        </div>
      );
    }
  };

  const renderizeDropdown = () => {
    if (isShowDropdown) {
      return <Dropdown />;
    }
  };
  return (
    <>
      {renderizeHeader()}
      {renderizeDropdown()}
    </>
  );
};

export default Header;
