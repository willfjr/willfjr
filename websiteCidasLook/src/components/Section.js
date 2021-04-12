import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Section.css";
import video from "../videos/Hair-51904.mp4";

function Section() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted nocontrols />
      <h1>Cida's Look</h1>
      <p>Amor, Cuidado e Beleza!</p>
      <p>25 anos</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          AGENDAR
        </Button>
      </div>
    </div>
  );
}

export default Section;
