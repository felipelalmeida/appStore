import { IonContent, IonHeader, IonPage, IonTitle } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ExploreContainer name="Home page" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
