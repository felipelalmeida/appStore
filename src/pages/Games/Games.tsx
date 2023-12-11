import {
  IonContent,
  IonPage,
  useIonViewWillEnter,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import Header from "../../components/Header/Header";
import "../../theme/pageStyle.css";

const Games: React.FC = () => {
  useIonViewWillEnter(() => {
    const tabBar = document.querySelector("ion-tab-bar");
    if (tabBar) {
      tabBar.style.display = "flex";
    }
  }, []);
  return (
    <IonPage>
      <IonContent>
        <Header showLeftArrow={false} />
        <IonGrid>
          <IonRow className="row-class">
            <IonCol className="column-class column-class-first">
              Para você
            </IonCol>
            <IonCol className="column-class">Em alta</IonCol>
            <IonCol className="column-class">Novidades</IonCol>
            <IonCol className="column-class">Premium</IonCol>
          </IonRow>
          {/* Banner1 */}
          <div className="main-item-banner">
            <a  className="banner-img">
              <img src="/imgs/games/minecraft/banner.png" />
            </a>
            <div className="banner-content">
              <IonCol size="2">
                <a >
                  <img className="icon-img" src="/imgs/games/minecraft/icon.png" />
                </a>
              </IonCol>
              <IonCol size="8">
                <p className="item-line-one">Minecraft</p>
                <div>
                  <p className="item-line-two">
                    Ação e Aventura • 5{" "}
                    <img className="rating-star" src={"/icons/full-star.svg"} />
                  </p>
                </div>
              </IonCol>
              <IonCol size="2">
                <a >
                  <img className="download-img" src="/icons/download-icon.svg" />
                </a>
              </IonCol>
            </div>
          </div>
          {/* Banner2 */}
          <div className="main-item-banner">
            <a  className="banner-img">
              <img src="/imgs/games/dead/banner.png" />
            </a>
            <div className="banner-content">
              <IonCol size="2">
                <a >
                  <img className="icon-img" src="/imgs/games/dead/icon.png" />
                </a>
              </IonCol>
              <IonCol size="8">
                <p className="item-line-one">Dead Cells</p>
                <div>
                  <p className="item-line-two">
                    Hack and Slash • 4,7{" "}
                    <img className="rating-star" src={"/icons/full-star.svg"} />
                  </p>
                </div>
              </IonCol>
              <IonCol size="2">
                <a >
                  <img className="download-img" src="/icons/download-icon.svg" />
                </a>
              </IonCol>
            </div>
          </div>
          {/* Banner3 */}
          <div className="main-item-banner">
            <a  className="banner-img">
              <img src="/imgs/games/birds/banner.png" />
            </a>
            <div className="banner-content">
              <IonCol size="2">
                <a >
                  <img className="icon-img" src="/imgs/games/birds/icon.png" />
                </a>
              </IonCol>
              <IonCol size="8">
                <p className="item-line-one">Angry Birds 2</p>
                <div>
                  <p className="item-line-two">
                    Casual • 4,2{" "}
                    <img className="rating-star" src={"/icons/full-star.svg"} />
                  </p>
                </div>
              </IonCol>
              <IonCol size="2">
                <a >
                  <img className="download-img" src="/icons/download-icon.svg" />
                </a>
              </IonCol>
            </div>
          </div>
          {/* Banner4 */}
          <div className="main-item-banner">
            <a  className="banner-img">
              <img src="/imgs/games/ff/banner.png" />
            </a>
            <div className="banner-content">
              <IonCol size="2">
                <a >
                  <img className="icon-img" src="/imgs/games/ff/icon.png" />
                </a>
              </IonCol>
              <IonCol size="8">
                <p className="item-line-one">Free Fire</p>
                <div>
                  <p className="item-line-two">
                    Battle Royale • 3,9{" "}
                    <img className="rating-star" src={"/icons/full-star.svg"} />
                  </p>
                </div>
              </IonCol>
              <IonCol size="2">
                <a >
                  <img className="download-img" src="/icons/download-icon.svg" />
                </a>
              </IonCol>
            </div>
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Games;
