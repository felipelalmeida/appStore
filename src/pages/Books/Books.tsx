import {
  IonContent,
  IonPage,
  useIonViewWillEnter,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonButton,
} from "@ionic/react";
import Header from "../../components/Header/Header";
import "../../theme/pageStyle.css";
import "./Books.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Books: React.FC = () => {
  const [data, setData] = useState([]);

  useIonViewWillEnter(() => {
    const tabBar = document.querySelector("ion-tab-bar");
    if (tabBar) {
      tabBar.style.display = "flex";
    }
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/books`);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
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
            {data.map((item: any) => (
              <IonRow key={item.id}>
                <div className="item">
                  <img src={item.img} className="book-img" />
                  <div className="book-info">
                    <IonLabel>{item.title}</IonLabel>
                    <label className="book-author">{item.author}</label>
                  </div>
                  <IonButton shape="round" className="btn-price" size="small">
                    R$ {item.price}
                  </IonButton>
                </div>
              </IonRow>
            ))}
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Books;
