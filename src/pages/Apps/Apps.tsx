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

const Apps: React.FC = () => {
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
              <img src="/imgs/apps/miro/banner.png" />
            </a>
            <div className="banner-content">
              <IonCol size="2">
                <a >
                  <img className="icon-img" src="/imgs/apps/miro/icon.png" />
                </a>
              </IonCol>
              <IonCol size="8">
                <p className="item-line-one">Miro</p>
                <div>
                  <p className="item-line-two">
                    Produtividade • 4,5{" "}
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
              <img src="/imgs/apps/max/banner.png" />
            </a>
            <div className="banner-content">
              <IonCol size="2">
                <a >
                  <img className="icon-img" src="/imgs/apps/max/icon.png" />
                </a>
              </IonCol>
              <IonCol size="8">
                <p className="item-line-one">Max: TV, & Movies</p>
                <div>
                  <p className="item-line-two">
                    Entretenimento • 4,3{" "}
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
              <img src="/imgs/apps/deezer/banner.png" />
            </a>
            <div className="banner-content">
              <IonCol size="2">
                <a >
                  <img className="icon-img" src="/imgs/apps/deezer/icon.png" />
                </a>
              </IonCol>
              <IonCol size="8">
                <p className="item-line-one">Deezer: Músicas e Podcasts</p>
                <div>
                  <p className="item-line-two">
                    Entretenimento • 4,9{" "}
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
              <img src="/duo_banner.png" />
            </a>
            <div className="banner-content">
              <IonCol size="2">
                <a >
                  <img className="icon-img" src="/duo_icon.png" />
                </a>
              </IonCol>
              <IonCol size="8">
                <p className="item-line-one">Duolingo</p>
                <div>
                  <p className="item-line-two">
                    Educação • 4,7{" "}
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

export default Apps;
