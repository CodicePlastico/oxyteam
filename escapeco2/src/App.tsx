import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { alarm, statsChart } from 'ionicons/icons';
import Tab2 from './pages/Tab2';
import Now from './pages/Now';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
      <IonReactRouter>
        <IonTabs>
            <IonRouterOutlet>
              <Route path="/now" component={Now} exact={true} />
              <Route path="/stats" component={Tab2} exact={true} />
              <Route path="/" render={() => <Redirect to="/now" />} exact={true} />
            </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/now">
              <IonIcon icon={alarm} />
              <IonLabel>Now</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/stats">
              <IonIcon icon={statsChart} />
              <IonLabel>Stats</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
  </IonApp>
);

export default App;