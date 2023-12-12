import {
  IonContent,
  IonPage,
  useIonViewWillEnter,
  IonGrid,
  IonCol,
} from "@ionic/react";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import "./AppPage.css";
import Header from "../../components/Header/Header";

const AppPage: React.FC = () => {
  useIonViewWillEnter(() => {
    const tabBar = document.querySelector("ion-tab-bar");
    if (tabBar) {
      tabBar.style.display = "flex";
    }
  }, []);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };
  return (
    <IonPage>
      <IonContent>
        <Header showLeftArrow={true} />
        <IonGrid>
          <div className="page-content">
            <div className="top-content">
              <div className="main-info">
                <img className="icon-img-app-page" src="/minecraft_icon.png" />
                <div>
                  <h1 className="app-name">Minecraft</h1>
                  <p className="app-developer">Mojang</p>
                  <div className="app-price">
                    <h2 className="app-price-number">R$ 39,99</h2>
                  </div>
                </div>
              </div>
              <Swiper
                slidesPerView={3}
                spaceBetween={0}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                className="info-swiper"
              >
                <SwiperSlide className="info-swiper-slide">
                  <div className="info-swiper-slide">
                    <h3 className="star-number">4,6</h3>
                    <div className="stars">
                      <img className="star" src="/star-full2.svg" />
                      <img className="star" src="/star-full2.svg" />
                      <img className="star" src="/star-full2.svg" />
                      <img className="star" src="/star-full2.svg" />
                      <img className="star" src="/half-star.svg" />
                    </div>
                    <p className="rating-number">4,9M avaliações</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="info-swiper-slide">
                  <div className="info-swiper-slide">
                    <p className="slider-title-text">Tamanho</p>
                    <p className="star-number">1,9</p>
                    <p className="slider-subtitle-text">GB</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="info-swiper-slide">
                  <div className="info-swiper-slide">
                    <p className="slider-title-text">Idade</p>
                    <img className="l" src="/l.png" />
                    <p className="slider-subtitle-text">Livre</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="info-swiper-slide">
                  <div className="info-swiper-slide">
                    <p className="slider-title-text">Categoria</p>
                    <img className="controller" src="/controller.svg" />
                    <p className="slider-subtitle-text">Games</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="info-swiper-slide">
                  <div className="info-swiper-slide">
                    <p className="slider-title-text">Desenvolvedor</p>
                    <img className="l" src="/pfp.png" />
                    <p className="slider-subtitle-text">Mojang</p>
                  </div>
                </SwiperSlide>
              </Swiper>
              <Swiper
                slidesPerView={1.2}
                spaceBetween={10}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                className="img-swiper"
              >
                <SwiperSlide className="img-swiper-slide">
                  <img className="mine-img" src="/minecraft-store-image.png" />
                </SwiperSlide>
                <SwiperSlide className="img-swiper-slide">
                  <img className="mine-img" src="/minecraft-store-image.png" />
                </SwiperSlide>
                <SwiperSlide className="img-swiper-slide">
                  <img className="mine-img" src="/minecraft-store-image.png" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="main-content">
              <div className="main-description">
                <p className="app-description app-description1">
                  Explore mundos infinitos e construa de tudo, desde as casas
                  mais simples até os mais grandiosos castelos. Jogue com
                  recursos ilimitados no modo criativo ou minere as profundezas
                  do mundo no modo de sobrevivência, criando armas e armaduras
                  para se defender de criaturas perigosas.
                </p>
                <p
                  className={`app-description app-description2 ${
                    !isDescriptionVisible ? "hidden" : ""
                  }`}
                >
                  Minecraft agora vem com a opção de comprar Minecraft Realms.
                  Realms é um serviço de assinatura mensal que permite a criação
                  de um mundo sempre online no Minecraft. Atualmente há duas
                  opções de assinatura para escolha, dependendo de quantas
                  pessoas você deseja convidar para jogar simultaneamente no seu
                  realm. Um Realm para você e mais 2 amigos custa 3.99
                  dólares/mês (ou equivalente local) e um Realm para você e mais
                  10 amigos custa 7.99 dólares/mês (ou equivalente local).
                </p>
                <p className="read-more" onClick={toggleDescription}>
                  {isDescriptionVisible ? "ler menos" : "ler mais"}
                </p>
              </div>
            </div>
            <p className="review-title">Avaliações</p>
            <Swiper
              slidesPerView={1.2}
              spaceBetween={10}
              freeMode={true}
              modules={[FreeMode, Pagination]}
              className="rating-swiper"
            >
              <SwiperSlide className="img-swiper-slide">
                <div className="rating-box">
                  <h3 className="review-user-title">Bem massa!</h3>
                  <div className="star-r-div">
                    <img className="star-r" src="/full-b-star.svg" />
                    <img className="star-r" src="/full-b-star.svg" />
                    <img className="star-r" src="/full-b-star.svg" />
                    <img className="star-r" src="/full-b-star.svg" />
                    <img className="star-r" src="/half-b-star.svg" />
                  </div>
                  <p className="review-user-text">
                    Jogo muito legal, recomendo a todos.
                  </p>
                  <p className="review-user-user">xXgamerXx - 20/12/2020</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="img-swiper-slide">
                <div className="rating-box">
                  <h3 className="review-user-title">Ok</h3>
                  <div className="star-r-div">
                    <img className="star-r" src="/full-b-star.svg" />
                    <img className="star-r" src="/full-b-star.svg" />
                    <img className="star-r" src="/full-b-star.svg" />
                    <img className="star-r" src="/half-b-star.svg" />
                  </div>
                  <p className="review-user-text">
                    Bedrock pior q Java. A versão Java suporta uma ampla
                    variedade de mods e plugins, proporcionando aos jogadores a
                    capacidade de modificar significativamente o jogo.
                  </p>
                  <p className="review-user-user">adsasd69 - 26/12/2021</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="img-swiper-slide">
                <div className="rating-box">
                  <h3 className="review-user-title">🤢</h3>
                  <div className="star-r-div">
                    <img className="star-r" src="/half-b-star.svg" />
                  </div>
                  <p className="review-user-text">
                    Jogo de quadrado, muito ruim.
                  </p>
                  <p className="review-user-user">robloxEnjoyer - 20/10/2020</p>
                </div>
              </SwiperSlide>
              <div className="rating-btns">
                <img className="rating-img" src="/pen.svg" />
                <p className="rating-img-text">Avalie</p>
                <img className="rating-img" src="/filter.svg" />
                <p className="rating-img-text">Filtro</p>
              </div>
            </Swiper>
            <p className="review-title">Informações</p>
            <div className="bottom-content">
              <div className="list">
                <p className="list-i-1">Tamanho</p>
                <p className="list-i-2">1,9 GB</p>
              </div>
              <div className="list">
                <p className="list-i-1">Classificação etária</p>
                <p className="list-i-2">Livre</p>
              </div>
              <div className="list">
                <p className="list-i-1">Localização</p>
                <p className="list-i-2">Português (BR) e outros 18</p>
              </div>
              <div className="list">
                <p className="list-i-1">Compatibilidade</p>
                <p className="list-i-2">Funciona nesse sistema</p>
              </div>
              <div className="list">
                <p className="list-i-1">Copyright</p>
                <p className="list-i-2">@ Mojang AB</p>
              </div>
            </div>
            <p className="review-title">Outros Aplicativos Como Esse</p>
            <div className="footer-d-content">
              <IonCol size="2">
                <a href="#">
                  <img className="icon-img" src="/imgs/games/dead/icon.png" />
                </a>
              </IonCol>
              <IonCol size="7">
                <p className="item-line-one">Dead Cells</p>
                <div>
                  <p className="item-line-two">
                    Hack and Slash • 4,7{" "}
                    <img className="rating-star" src={"/icons/full-star.svg"} />
                  </p>
                </div>
              </IonCol>
              <IonCol size="3">
                <div className="app-price-f">
                  <h2 className="app-price-number-f">Gratuito</h2>
                </div>
              </IonCol>
            </div>
            <div className="footer-d-content">
              <IonCol size="2">
                <a href="#">
                  <img className="icon-img" src="/imgs/games/birds/icon.png" />
                </a>
              </IonCol>
              <IonCol size="7">
                <p className="item-line-one">Angry Birds 2</p>
                <div>
                  <p className="item-line-two">
                    Casual • 4,2{" "}
                    <img className="rating-star" src={"/icons/full-star.svg"} />
                  </p>
                </div>
              </IonCol>
              <IonCol size="3">
                <div className="app-price-f">
                  <h2 className="app-price-number-f">Gratuito</h2>
                </div>
              </IonCol>
            </div>
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AppPage;
