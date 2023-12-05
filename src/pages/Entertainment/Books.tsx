import { IonContent, IonPage } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";

const Entertainment: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ExploreContainer name="Books page" />
      </IonContent>
    </IonPage>
  );
};

export default Entertainment;
