import { IonIcon, IonSearchbar } from "@ionic/react";
import "./Header.css";

const Header = ({ showLeftArrow }: { showLeftArrow: boolean }) => {
  const handleClick = () => {
    window.history.back();
  };

  const renderizeHeader = () => {
    if (showLeftArrow) {
      return (
        <div className="header-container padding-arrow">
          <div className="left-arrow" onClick={handleClick}>
            <img src="/icons/arrow-left.svg" alt="left arrow" />
          </div>
          <div className="icon-account">
            <img src="/icons/person.svg" alt="person icon" />
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
            <img src="/icons/person.svg" alt="person icon" />
          </div>
        </div>
      );
    }
  };
  return <>{renderizeHeader()}</>;
};

export default Header;
