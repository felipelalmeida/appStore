import { IonContent, IonPage } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import Header from "../../components/Header/Header";

const Apps: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <Header showLeftArrow={false}/>
        <ExploreContainer name="Apps page" />
      </IonContent>
    </IonPage>
  );
};

export default Apps;
