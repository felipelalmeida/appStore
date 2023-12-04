import { IonContent, IonHeader, IonPage, IonTitle } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";

const Entertainment: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ExploreContainer name="Entertainment page" />
      </IonContent>
    </IonPage>
  );
};

export default Entertainment;
