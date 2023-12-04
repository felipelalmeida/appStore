import { IonContent, IonHeader, IonPage, IonTitle } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";

const Games: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ExploreContainer name="Games page" />
      </IonContent>
    </IonPage>
  );
};

export default Games;
