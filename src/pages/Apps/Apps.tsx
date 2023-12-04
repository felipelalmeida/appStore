import { IonContent, IonHeader, IonPage, IonTitle } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";

const Apps: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ExploreContainer name="Apps page" />
      </IonContent>
    </IonPage>
  );
};

export default Apps;
