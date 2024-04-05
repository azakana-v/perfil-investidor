import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Quizz.css";
import logoBraSolo from "../assets/logo-bra-solo.png";
import logoBraFull from "../assets/bradesco brnaco.png";

let arrIndice = 1;
let as = 0;
let bs = 0;
let cs = 0;
let quizzFinished = false;

function Quizz() {
  const navigate = useNavigate();
  const [quizzStarted, setQuizzStarted] = useState(false);
  const [question, setQuestion] = useState(1);
  const pergunta1 = {
    titulo:
      "Lembra da história da lebre e da tartaruga? Quem você seria nela?? Dessa vez pode ser que a tartaruga não vença...",
    a: "Lebre com certeza!",
    b: "Tartaruga faz mais meu estilo.",
    c: "Nenhum, eu seria o juiz da corrida!",
  };
  const pergunta2 = {
    titulo:
      "Qual conselho você daria para alguém que acabou de perder o emprego?",
    a: "Se eu fosse você, pegava o dinheiro da rescisão e aplicava tudo em criptomoedas.",
    b: "Não desanima, não. Você vai sair logo dessa!",
    c: "Corre e atualiza seu currículo!",
  };
  const pergunta3 = {
    titulo: "Quando você pensa em dinheiro, você é do tipo que:",
    a: "Tem pressa em ficar rico logo.",
    b: "Quer aumentar sua renda, mas aos poucos.",
    c: "Só pensa em manter o que tem.",
  };
  const pergunta4 = {
    titulo: "Para você, as férias perfeitas têm que ter:",
    a: "Um roteiro de aventura, no qual possa desbravar novos cenários e ganhar novas experiências.",
    b: "Um resort que combina descanso, festas e passeios diferenciados.",
    c: "Uma praia deserta e tranquila para relaxar corpo e mente.",
  };
  const pergunta5 = {
    titulo: "Na hora de fazer uma refeição fora de casa você...",
    a: "Prefere pratos exóticos.",
    b: "Pede o prato mais famoso da casa para provar algo novo.",
    c: "Pede o trivial, afinal há menos chances de não gostar de algum alimento.",
  };
  const pergunta6 = {
    titulo: "Você faz compras online?",
    a: "Sempre! Inclusive tenta descobrir novos marketplaces estrangeiros que tenham o melhor custo x benefício.",
    b: "Sim, mas apenas de lojas virtuais conhecidas e com boa reputação.",
    c: "Só em último caso! Porque prefere ver e tocar os itens que está adquirindo.",
  };
  const pergunta7 = {
    titulo:
      "Quando pensa em comprar um carro, qual das opções abaixo você escolheria?",
    a: "O que oferece mais inovações tecnológicas. Você procura tecnologia a favor da esportividade e do desempenho. Não se importa com a autonomia, custo de manutenção e valor de revenda, pois prioriza a pilotagem.",
    b: "Aquele com maior espaço interno. Tudo bem perder um pouco de autonomia para ter um pouco mais de potência no motor, sem esquecer os itens de série tecnológicos em prol da segurança.",
    c: "Um veículo com boa autonomia, menos potente, manutenção de custo baixo e fácil de revender.",
  };
  const pergunta8 = {
    titulo: "O que você acha da caderneta de poupança?",
    a: "Acha ultrapassada e não colocaria o dinheiro ali.",
    b: "Acha a rentabilidade baixa, mas não descarta a possibilidade de aplicar uma parte da sua renda nesse investimento.",
    c: "É uma opção segura para guardar o dinheiro, mesmo que renda pouco.",
  };
  const pergunta9 = {
    titulo: "E o que pensa das criptomoedas?",
    a: "Adora e conhece diversas moedas digitais.",
    b: "Tem vontade de conhecer melhor, mas se preocupa com o risco de investir muito e perder dinheiro.",
    c: "Modernas demais para o seu gosto.",
  };
  const pergunta10 = {
    titulo: "Como estão as suas contas? ",
    a: "Boletos pagos no cartão de crédito e dinheiro investido para ganhar um pouco de renda até o pagamento da próxima fatura.",
    b: "Boletos todos pagos, algumas compras parceladas e cheque especial eventualmente utilizado para não ficar no vermelho.",
    c: "Sempre pagas em dia e a conta corrente no azul.",
  };

  const perguntas = [
    pergunta1,
    pergunta2,
    pergunta3,
    pergunta4,
    pergunta5,
    pergunta6,
    pergunta7,
    pergunta8,
    pergunta9,
    pergunta10,
  ];
  function changeIndice(alternative) {
    if (arrIndice != perguntas.length) {
      arrIndice++;
      console.log(arrIndice);
      setQuestion(arrIndice);
    }

    if (as + bs + cs != 10) {
      if (alternative == "a") {
        as++;
      } else if (alternative == "b") {
        bs++;
      } else {
        cs++;
      }
      if (as + bs + cs == perguntas.length) {
        //Finaliza o quizz
        quizzFinished = true;
        arrIndice = 0;
        setQuizzStarted(false);
      }
    }
  }
  function startQuizz() {
    setQuizzStarted(true);
  }
  return (
    <div className="quizz">
      <div className="quizz-container">
        {quizzFinished ? (
          <div>
            {(as > cs) & (as > bs) ? (
              <div className="finish-card">
                <p className="finish-title">Você é um investidor: </p>
                <p className="finish-title">
                  <strong>arriscado!</strong>
                </p>
                <p className="finish-info">
                  Esse perfil de investidor entende que as perdas a curto prazo
                  são momentâneas e necessárias para aproveitar lucros mais
                  altos a longo prazo.{" "}
                  <p>
                    Mesmo sendo arrojado, é muito recomendado que o investidor
                    tenha uma reserva de emergência para situações do cotidiano
                    que demandem dinheiro a curto prazo.
                  </p>
                  <p>
                    Essa parcela da sua carteira é mais conservadora para
                    garantir o resgate rápido em cerca de 24 horas, sem perda de
                    rentabilidade
                  </p>
                </p>
              </div>
            ) : (cs > as) & (cs > bs) ? (
              <div className="finish-card">
                <p className="finish-title">Você é um investidor: </p>
                <p className="finish-title">
                  <strong>conservador!</strong>
                </p>
                <p className="finish-info">
                  Esse tipo de investidor prioriza a segurança em suas
                  aplicações. Em sua diversificação de investimentos, o
                  conservador deve manter a maior parte da sua carteira de
                  investimentos em produtos de baixo risco, como por exemplo:
                  tesouro direto, CDB, LC, LCI/LCA e fundos de Renda Fixa.
                  <p>
                    E se você quiser adicionar um pouco de renda fixa privada,
                    você pode aplicar em debêntures também. A característica
                    principal do perfil conservador é preservar o seu
                    patrimônio.
                  </p>
                  <p>
                    Normalmente ele opta por investimentos com baixa oscilação e
                    risco. Ou seja, está disposto a abrir mão de rentabilidade
                    em troca de mais segurança e liquidez.
                  </p>
                </p>
              </div>
            ) : (
              <div className="finish-card">
                <p className="finish-title">Você é um investidor: </p>
                <p className="finish-title">
                  <strong>moderado!</strong>
                </p>
                <p className="finish-info">
                  Esse investidor está entre os conservadores e os arrojados.
                  Ele gosta de segurança, mas já possui tolerância a riscos de
                  longo prazo. Assim, opta por investimentos mais arriscados
                  dependendo da situação.
                  <p>
                    Esse perfil de investidor possui mais conhecimento do
                    mercado e um patrimônio em crescimento, que já é grande o
                    suficiente para diversificar em diferentes prazos.
                  </p>
                  <p>
                    É um investidor que tem a segurança da Renda Fixa, mas
                    também aplica parte de seus recursos em Renda Variável,
                    buscando retornos acima da média do mercado.
                  </p>
                </p>
              </div>
            )}
          </div>
        ) : quizzStarted ? (
          <div>
            <p className="question-title">{perguntas[question - 1].titulo}</p>
            <p className="question-indice">{question}/10</p>
            <div className="alternativas">
              <div onClick={() => changeIndice("a")} className="a">
                <span className="alternative-icon">A</span>
                <div className="alternative-info">
                  {perguntas[question - 1].a}
                </div>
              </div>
              <div className="b" onClick={() => changeIndice("b")}>
                <span className="alternative-icon">B</span>
                <div className="alternative-info">
                  {perguntas[question - 1].b}
                </div>
              </div>
              <div className="c" onClick={() => changeIndice("c")}>
                <span className="alternative-icon">C</span>
                <div className="alternative-info">
                  {perguntas[question - 1].c}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p className="quizz-title">
              Responda o quiz e invista melhor o seu dinheiro.
            </p>
            <button onClick={startQuizz} className="start-quizz">
              <i class="bx bx-play"></i>
              Iniciar o teste!
            </button>
            <p className="quizz-subtitle">
              O quiz leva apenas <strong>5 minutos!</strong>
            </p>
            <img className="bradesco-logo" src={logoBraSolo} alt="" />
          </div>
        )}
      </div>
      <img className="aside-logo" src={logoBraFull} alt="" />
    </div>
  );
}

export default Quizz;
