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
const fullStar = "/public/icons/full-star.svg";
const download = "/public/icons/download-icon.svg";

const Books: React.FC = () => {
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
            <a href="#" className="banner-img">
              <img src="/duo_banner.png" />
            </a>
            <div className="banner-content">
              <IonCol size="2">
                <a href="#">
                  <img className="icon-img" src="/duo_icon.png" />
                </a>
              </IonCol>
              <IonCol size="8">
                <p className="item-line-one">Duolingo</p>
                <div>
                  <p className="item-line-two">
                    Educação • 4,7{" "}
                    <img className="rating-star" src={fullStar} />
                  </p>
                </div>
              </IonCol>
              <IonCol size="2">
                <a href="#">
                  <img className="download-img" src={download} />
                </a>
              </IonCol>
            </div>
          </div>
          {/* Banner2 */}
          <div className="main-item-banner">
            <a href="#" className="banner-img">
              <img src="/duo_banner.png" />
            </a>
            <div className="banner-content">
              <IonCol size="2">
                <a href="#">
                  <img className="icon-img" src="/duo_icon.png" />
                </a>
              </IonCol>
              <IonCol size="8">
                <p className="item-line-one">Duolingo</p>
                <div>
                  <p className="item-line-two">
                    Educação • 4,7{" "}
                    <img className="rating-star" src={fullStar} />
                  </p>
                </div>
              </IonCol>
              <IonCol size="2">
                <a href="#">
                  <img className="download-img" src={download} />
                </a>
              </IonCol>
            </div>
          </div>
          {/* Banner3 */}
          <div className="main-item-banner">
            <a href="#" className="banner-img">
              <img src="/duo_banner.png" />
            </a>
            <div className="banner-content">
              <IonCol size="2">
                <a href="#">
                  <img className="icon-img" src="/duo_icon.png" />
                </a>
              </IonCol>
              <IonCol size="8">
                <p className="item-line-one">Duolingo</p>
                <div>
                  <p className="item-line-two">
                    Educação • 4,7{" "}
                    <img className="rating-star" src={fullStar} />
                  </p>
                </div>
              </IonCol>
              <IonCol size="2">
                <a href="#">
                  <img className="download-img" src={download} />
                </a>
              </IonCol>
            </div>
          </div>
          {/* Banner4 */}
          <div className="main-item-banner">
            <a href="#" className="banner-img">
              <img src="/duo_banner.png" />
            </a>
            <div className="banner-content">
              <IonCol size="2">
                <a href="#">
                  <img className="icon-img" src="/duo_icon.png" />
                </a>
              </IonCol>
              <IonCol size="8">
                <p className="item-line-one">Duolingo</p>
                <div>
                  <p className="item-line-two">
                    Educação • 4,7{" "}
                    <img className="rating-star" src={fullStar} />
                  </p>
                </div>
              </IonCol>
              <IonCol size="2">
                <a href="#">
                  <img className="download-img" src={download} />
                </a>
              </IonCol>
            </div>
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Books;
