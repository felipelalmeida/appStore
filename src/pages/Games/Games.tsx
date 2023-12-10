import { IonContent, IonPage } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import Header from "../../components/Header/Header";

const Games: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Header showLeftArrow={false}/>
        <ExploreContainer name="Games page" />
      </IonContent>
    </IonPage>
  );
};

export default Games;
