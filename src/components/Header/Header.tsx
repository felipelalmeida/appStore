import { IonIcon, IonSearchbar } from "@ionic/react";
import "./Header.css";

const person = "/public/icons/person.svg";
const leftArrow = "/public/icons/arrow-left.svg";

const Header = ({ showLeftArrow }: { showLeftArrow: boolean }) => {
  const handleClick = () => {
    window.history.back();
  };

  const renderizeHeader = () => {
    if (showLeftArrow) {
      return (
        <div className="header-container padding-arrow">
          <div className="left-arrow" onClick={handleClick}>
            <IonIcon icon={leftArrow}></IonIcon>
          </div>
          <div className="icon-account">
            <IonIcon icon={person}></IonIcon>
          </div>
        </div>
      );
    } else {
      return (
        <div className="header-container">
          <div className="search-bar">
            <IonSearchbar placeholder="Pesquisar apps ou jogos"></IonSearchbar>
          </div>
          <div className="icon-account">
            <IonIcon icon={person}></IonIcon>
          </div>
        </div>
      );
    }
  };
  return <>{renderizeHeader()}</>;
};

export default Header;
