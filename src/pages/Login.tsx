import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonIcon, IonButton,useIonViewWillEnter } from '@ionic/react';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';
import customIcon from '/profile-icon.svg';
import './Login.css';


const Login: React.FC = () => {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    setIsValid(undefined);
    if (value === '') return;
    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useIonViewWillEnter(() => {
    const tabBar = document.querySelector('ion-tab-bar');
    if (tabBar) {
      tabBar.style.display = 'none';
    }
  }, []);

  return (
    <IonPage>
      <IonContent className="ion-content" fullscreen>
        <div>
          <p className="login-first-text">Bem vindo(a) ao XXX</p>
        </div>
        <div className="login-grey-rectangle">
          <img className="login-logo" src="/login-logo.svg" alt=""/>
        </div>
        <div>
          <p className="login-second-text">Para acessar XXX entre ou crie uma conta</p>
        </div>
        <IonInput
          className={`login-input-email login-input ${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
          type="email"
          placeholder="fulano@email.com"
          fill="solid"
          label="Email"
          labelPlacement="floating"
          onIonInput={(event) => {
            validate(event);
            setEmail(event.target.value as string);
          }}
          onIonBlur={() => markTouched()}
        >
          <img className="login-icon login-icon-email" src="/profile-icon.svg" />
        </IonInput>
        <IonInput
          className={`login-input login-input-password`}
          type={showPassword ? "text" : "password"}
          placeholder="Senha"
          fill="solid"
          label="Senha"
          labelPlacement="floating"
          onIonInput={(event) => setPassword(event.target.value as string)}
        >
          <IonIcon className="login-icon" icon={showPassword ? eyeOffOutline : eyeOutline} onClick={toggleShowPassword} />
        </IonInput>
        <IonButton className="login-btn" routerLink="/apps" disabled={!email || !password}>Entrar</IonButton>
        <div className="login-third-text-div">
          <p className="login-third-text-a">Não tem login?</p>
          <p className="login-third-text-b"> Cadastre-se</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;

