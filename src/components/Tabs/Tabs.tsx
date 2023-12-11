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
import Games from "../../pages/Games/Games";
import {
  apps,
  book,
  gameController,
  homeSharp,
} from "ionicons/icons";
import Apps from "../../pages/Apps/Apps";
import Entertainment from "../../pages/Books/Books";
import Books from "../../pages/Books/Books";
import Login from "../../pages/Login";
import AppPage from "../../pages/AppPage/AppPage";

const Tabs: React.FC = () => {
  return (
    <>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/apps">
              <Apps />
            </Route>
            <Route path="/games">
              <Games />
            </Route>
            <Route path="/books">
              <Books />
            </Route>
            <Route path="/app-page">
              <AppPage />
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="apps" href="/apps">
              <IonIcon aria-hidden="true" icon={apps} />
              <IonLabel>Apps</IonLabel>
            </IonTabButton>
            <IonTabButton tab="games" href="/games">
              <IonIcon aria-hidden="true" icon={gameController} />
              <IonLabel>Jogos</IonLabel>
            </IonTabButton>
            <IonTabButton tab="entertainment" href="/books">
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
