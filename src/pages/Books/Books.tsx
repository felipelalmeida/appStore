import {
  IonContent,
  IonPage,
  useIonViewWillEnter,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonButton,
} from "@ionic/react";
import Header from "../../components/Header/Header";
import "../../theme/pageStyle.css";
import "./Books.css";

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
          <div className="items">
            <IonRow>
              <div className="item">
                <img src="/imgs/books/witcher.png" className="book-img" />
                <div className="book-info">
                  <IonLabel>O Último Desejo</IonLabel>
                  <label className="book-author">Andrzej Sapkowski</label>
                </div>
                <IonButton shape="round" className="btn-price" size="small">
                  R$ 49,12
                </IonButton>
              </div>
            </IonRow>
            <IonRow>
              <div className="item">
                <img src="/imgs/books/leonardo.png" className="book-img" />
                <div className="book-info">
                  <IonLabel>Leonardo da Vinci</IonLabel>
                  <label className="book-author">Walter Isaacson</label>
                </div>
                <IonButton shape="round" className="btn-price" size="small">
                  R$ 85,40
                </IonButton>
              </div>
            </IonRow>
            <IonRow>
              <div className="item">
                <img src="/imgs/books/one-piece.png" className="book-img" />
                <div className="book-info">
                  <IonLabel>One Piece vol 2</IonLabel>
                  <label className="book-author">Eiichiro Oda</label>
                </div>
                <IonButton shape="round" className="btn-price" size="small">
                  R$ 34,37
                </IonButton>
              </div>
            </IonRow>
            <IonRow>
              <div className="item">
                <img src="/imgs/books/hunterXhunter.png" className="book-img" />
                <div className="book-info">
                  <IonLabel>Hunter X Hunter</IonLabel>
                  <label className="book-author">Yoshihiro Togashi</label>
                </div>
                <IonButton shape="round" className="btn-price" size="small">
                  R$ 34,37
                </IonButton>
              </div>
            </IonRow>
            <IonRow>
              <div className="item">
                <img src="/imgs/books/tolken.png" className="book-img" />
                <div className="book-info">
                  <IonLabel>A Irmandade do Anel</IonLabel>
                  <label className="book-author">J. R. R. Tolkien</label>
                </div>
                <IonButton shape="round" className="btn-price" size="small">
                  R$ 58,95
                </IonButton>
              </div>
            </IonRow>
            <IonRow>
              <div className="item">
                <img src="/imgs/books/hakusho.png" className="book-img" />
                <div className="book-info">
                  <IonLabel>Yu Yu Hakusho</IonLabel>
                  <label className="book-author">Yoshihiro Togashi</label>
                </div>
                <IonButton shape="round" className="btn-price" size="small">
                  R$ 34,37
                </IonButton>
              </div>
            </IonRow>
            <IonRow>
              <div className="item">
                <img src="/imgs/books/fourth.png" className="book-img" />
                <div className="book-info">
                  <IonLabel>Quarta Asa</IonLabel>
                  <label className="book-author">Rebecca Yarros</label>
                </div>
                <IonButton shape="round" className="btn-price" size="small">
                  R$ 73,70
                </IonButton>
              </div>
            </IonRow>
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Books;
