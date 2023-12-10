import { IonContent, IonPage,useIonViewWillEnter } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import Header from "../../components/Header/Header";

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
        <Header showLeftArrow={false}/>
        <ExploreContainer name="Apps page" />
      </IonContent>
    </IonPage>
  );
};

export default Apps;
