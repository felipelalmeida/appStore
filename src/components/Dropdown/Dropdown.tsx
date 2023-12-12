import { IonItemDivider, IonRow } from "@ionic/react";
import "./Dropdown.css";

const Dropdown = () => {
  return (
    <div className="dropdown-container">
      <IonRow>
        <div className="list-item">
          <img src="/icons/payments.svg" alt="payments" />
          <label>Assinaturas</label>
        </div>
      </IonRow>
      <IonRow>
        <div className="list-item">
          <img src="/icons/notifications.svg" alt="notifications" />
          <label>Notificações</label>
        </div>
      </IonRow>
      <IonRow>
        <div className="list-item">
          <img src="/icons/devices.svg" alt="devices" />
          <label>Dispositivos</label>
        </div>
      </IonRow>
      <IonRow>
        <div className="list-item">
          <img src="/icons/accounts.svg" alt="accounts" />
          <label>Gerenciar contas</label>
        </div>
      </IonRow>
      <IonRow>
        <div className="list-item">
          <img src="/icons/settings.svg" alt="settings" />
          <label>Configurações</label>
        </div>
      </IonRow>
      <div className="divider"></div>
      <IonRow>
        <div className="list-item">
          <img src="/icons/help.svg" alt="help" />
          <label>Ajuda</label>
        </div>
      </IonRow>
      <span className="policy-and-privacy">
        Politíca de Privacidade • Termos de Serviço
      </span>
    </div>
  );
};

export default Dropdown;
