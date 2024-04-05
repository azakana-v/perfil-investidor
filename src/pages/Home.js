import React from "react";
import "./Home.css";
import People from "../assets/pessoa.png";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="column1">
        <h1 className="title">Qual o seu Perfil de investidor?</h1>
        <div id="division"></div>
        <Link to="/quizz" className="startButton">
          Iniciar o teste!
        </Link>
        <button className="learnMoreButton">Saiba mais ↡</button>
      </div>
      <div className="column2">
        <img className="peopleImg" src={People} alt="" />{" "}
      </div>
    </div>
  );
}

export default Home;
