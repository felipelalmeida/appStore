import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";
import Home from "../../pages/Home/Home";
import Games from "../../pages/Games/Games";
import { apps, gameController, gift, home } from "ionicons/icons";
import Apps from "../../pages/Apps/Apps";
import Entertainment from "../../pages/Entertainment/Entertainment";

const Tabs: React.FC = () => {
  return (
    <>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/games">
              <Games />
            </Route>
            <Route path="/apps">
              <Apps />
            </Route>
            <Route path="/entertainment">
              <Entertainment />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon aria-hidden="true" icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="games" href="/games">
              <IonIcon aria-hidden="true" icon={gameController} />
              <IonLabel>Games</IonLabel>
            </IonTabButton>
            <IonTabButton tab="apps" href="/apps">
              <IonIcon aria-hidden="true" icon={apps} />
              <IonLabel>Apps</IonLabel>
            </IonTabButton>
            <IonTabButton tab="entertainment" href="/entertainment">
              <IonIcon aria-hidden="true" icon={gift} />
              <IonLabel>Entertainment</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </>
  );
};

export default Tabs;
