import { IonContent, IonPage } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";

const Games: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ExploreContainer name="Home page" />
      </IonContent>
    </IonPage>
  );
};

export default Games;
