import { IonContent, IonPage } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import SearchBar from "../../components/SearchBar/SearchBar";

const Apps: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <SearchBar />
        <ExploreContainer name="Apps page" />
      </IonContent>
    </IonPage>
  );
};

export default Apps;
