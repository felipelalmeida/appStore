import { IonContent, IonPage } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import Header from "../../components/Header/Header";

const Books: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Header showLeftArrow={false}/>
        <ExploreContainer name="Books page" />
      </IonContent>
    </IonPage>
  );
};

export default Books;
