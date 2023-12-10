import { IonContent, IonPage,useIonViewWillEnter } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";

const Apps: React.FC = () => {
  useIonViewWillEnter(() => {
    const tabBar = document.querySelector('ion-tab-bar');
    if (tabBar) {
      tabBar.style.display = 'flex';
    }
  }, []);
  return (
    <IonPage>
      <IonContent>
        <ExploreContainer name="Apps page" />
      </IonContent>
    </IonPage>
  );
};

export default Apps;
