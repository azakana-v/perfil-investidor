import React from "react";
import "./Header.css";
import bradescoLogo from "../../assets/bradesco brnaco.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <a href="#">
            <img className="logo" src={bradescoLogo} alt="" />
          </a>
          <div>
            <a className="saibaMais" href="#">
              Saiba mais!
            </a>
            <Link to={"/quizz"}>
              <span className="doTeste">Faça o teste!</span>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
