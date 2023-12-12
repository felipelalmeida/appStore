import {
  IonContent,
  IonPage,
  useIonViewWillEnter,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonButton,
  IonSpinner,
} from "@ionic/react";
import Header from "../../components/Header/Header";
import "../../theme/pageStyle.css";
import "./Books.css";
import { useState } from "react";
import axios from "axios";

const Books: React.FC = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useIonViewWillEnter(() => {
    const tabBar = document.querySelector("ion-tab-bar");
    if (tabBar) {
      tabBar.style.display = "flex";
    }
    const fetchData = async () => {
      try {
        // const response = await axios.get(`http://localhost:3000/books`);
        const response = await axios.get(`https://71114d53-e4cf-4d7d-8870-02d9dcc9b5c7.mock.pstmn.io/books`);
        if (response.status === 200) {
          console.log(response.data.books)
          setData(response.data.books);
        }
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
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
            <IonSpinner className="middle-page" name="crescent" />
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  }

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
          {error ? (
            <div className="middle-page">
              Ocorreu um erro. Verifique sua conexão e tente novamente.
            </div>
          ) : (
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
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Books;
