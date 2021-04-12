import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Confira nossos serviços!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="A beleza não está na cor da pele ou no tipo de cabelo. 
              A beleza está em você e em sabermos ressaltar o que você tem de melhor! "
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Estique, enrole, colora. Qualquer que seja seu desejo, sempre fazemos nosso melhor! 
              Sua satisfação é nosso objetivo! E sempre buscamos produtos que não agridem seu organismo."
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Aquele momento especial, aquele dia que não pode dar nada errado. 
              Garantimos seu cabelo dos sonhos, suas unhas perfeitas, a melhor pele, o que você precisar!"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Unhas lindas? Nós garantimos! As técnicas mais modernas do mercado,
              com a maior segurança e higienização."
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Uma bela maquiagem não pode faltar. Seja algo simples e discreto, ou esuberante e na medida, 
              utilizamos técnicas de visagismo para garantir o melhor contraste, equilíbrio e brilho!"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
