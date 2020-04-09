import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Now.scss';

const Now: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>EscapeCO2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="now">
          <h2 className="now__title">Ultima rilevazione</h2>
          <h1 className="now__date">Mercoledì 1 Aprile 2020</h1>
          <p className="now__time">16:51</p>
          <img className="now__room-icon" src="/assets/room-alert.png" alt="room-icon"/>
          <p className="now__co2"><b>2510,15</b> ppm</p>
          <p className="now__diff">+ +150 ppm rispetto all’ora precedente</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Now;
