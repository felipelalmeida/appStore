import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import Home from "../../pages/Home/Home";
import Games from "../../pages/Games/Games";
import {
  apps,
  book,
  gameController,
  homeSharp,
} from "ionicons/icons";
import Apps from "../../pages/Apps/Apps";
import Entertainment from "../../pages/Entertainment/Books";

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
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon aria-hidden="true" icon={homeSharp} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="games" href="/games">
              <IonIcon aria-hidden="true" icon={gameController} />
              <IonLabel>Jogos</IonLabel>
            </IonTabButton>
            <IonTabButton tab="apps" href="/apps">
              <IonIcon aria-hidden="true" icon={apps} />
              <IonLabel>Apps</IonLabel>
            </IonTabButton>
            <IonTabButton tab="entertainment" href="/entertainment">
              <IonIcon aria-hidden="true" icon={book} />
              <IonLabel>Livros</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </>
  );
};

export default Tabs;
