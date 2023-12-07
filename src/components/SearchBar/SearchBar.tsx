import { IonIcon, IonSearchbar } from "@ionic/react";
import { person } from "ionicons/icons";
import './SearchBar.css';

function SearchBar() {
    return (
        <>
            <div className="search-bar-container">
                <IonSearchbar placeholder="Pesquisar apps ou jogos" className="search-bar"></IonSearchbar>
                <IonIcon icon={person} className="icon-account"></IonIcon>
            </div>
        </>
    )
}

export default SearchBar;