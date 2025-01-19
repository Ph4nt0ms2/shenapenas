import { useState, useRef } from "react";
import styled from "styled-components";
import { Button } from "@heroui/button";

import DefaultLayout from "./layouts/default.tsx";
import "./index.css";

const GradientText = styled.span`
  background: linear-gradient(90deg, #0f0c29, #302b63, #24243e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
`;

const Card = styled.div`
  background: rgba(28, 28, 30, 0.9);
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  padding: 24px;
  margin: 16px 0;
  width: 100%;
  max-width: 500px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
  }

  p,
  li {
    color: #e0e0e0;
  }
`;

const WideCard = styled(Card)`
  max-width: 800px;
`;

const StyledButton = styled(Button)`
  background: linear-gradient(90deg, #0f0c29, #302b63, #24243e);
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #24243e, #302b63, #0f0c29);
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const StyledPrimaryButton = styled(StyledButton)`
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  color: #fff;

  &:hover {
    background: linear-gradient(90deg, #feb47b, #ff7e5f);
  }
`;

interface StyledTabProps {
  selected: boolean;
}

const StyledTab = styled.div<StyledTabProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
  background: ${(props: { selected: boolean }) =>
    props.selected
      ? "linear-gradient(90deg, #0f0c29, #302b63, #24243e)"
      : "transparent"};
  transform: ${(props: { selected: boolean }) =>
    props.selected ? "translateY(-5px)" : "none"};

  &:hover {
    background: linear-gradient(90deg, #24243e, #302b63, #0f0c29);
  }

  .icon-tab-tab-img {
    width: 64px;
    height: 64px;
    margin-bottom: 8px;
  }

  .icon-tab-label {
    color: #e0e0e0;
    font-weight: 600;
  }
`;

const abilities = [
  {
    name: "Barreira de Ki",
    img: "https://henriquebicudo.github.io/onlyshen/Shen_files/Shen_Passive.png",
    videoMp4: "https://henriquebicudo.github.io/onlyshen/Shen_files/ability_0098_P1.mp4",
    description: "Shen ganha uma barreira de Ki que absorve dano.",
    key: "P",
  },
  {
    name: "Ataque Crepúsculo",
    img: "https://henriquebicudo.github.io/onlyshen/Shen_files/ShenQ.png",
    videoMp4: "https://henriquebicudo.github.io/onlyshen/Shen_files/ability_0098_Q1.mp4",
    description:
      "Shen chama sua espada espiritual para atacar com ela, causando dano com base na Vida máxima do alvo.",
    key: "Q",
  },
  {
    name: "Refúgio Espiritual",
    img: "https://henriquebicudo.github.io/onlyshen/Shen_files/ShenW.png",
    videoMp4: "https://henriquebicudo.github.io/onlyshen/Shen_files/ability_0098_W1.mp4",
    description: "Shen cria uma área de proteção que bloqueia ataques inimigos.",
    key: "W",
  },
  {
    name: "Corrida das Sombras",
    img: "https://henriquebicudo.github.io/onlyshen/Shen_files/ShenE.png",
    videoMp4: "https://henriquebicudo.github.io/onlyshen/Shen_files/ability_0098_E1.mp4",
    description: "Shen avança em uma direção, provocando inimigos no caminho.",
    key: "E",
  },
  {
    name: "Manter a União",
    img: "https://henriquebicudo.github.io/onlyshen/Shen_files/ShenR.png",
    videoMp4: "https://henriquebicudo.github.io/onlyshen/Shen_files/ability_0098_R1.mp4",
    description: "Shen teleporta para um aliado, protegendo-o com uma barreira.",
    key: "R",
  },
];

const backgroundImages = [
  "Shen_0.jpg",
  "Shen_1.jpg",
  "Shen_2.jpg",
  "Shen_3.jpg",
  "Shen_4.jpg",
  "Shen_5.jpg",
  "Shen_6.jpg",
  "Shen_15.jpg",
  "Shen_16.jpg",
  "Shen_22.jpg",
  "Shen_40.jpg",
  "Shen_49.jpg",
];


function App() {
  const [selectedAbility, setSelectedAbility] = useState(abilities[0]);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const quemEShenRef = useRef(null);
  const oQueEleFazRef = useRef(null);
  const diferencialRef = useRef(null);
  const conhecaOJogadorRef = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const changeBackground = () => {
    setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  return (
    <DefaultLayout>
      <header />
      <section className="flex flex-col items-center justify-center gap-6 ">
        <div className="inline-block max-w-lg text-center">
          <GradientText>&nbsp;Shen apenas&nbsp;</GradientText>
        </div>

        <div className="flex gap-4">
          <StyledPrimaryButton
            onClick={() =>
              scrollToSection(quemEShenRef as React.RefObject<HTMLElement>)
            }
          >
            Quem é Shen?
          </StyledPrimaryButton>
          <StyledPrimaryButton
            onClick={() =>
              scrollToSection(oQueEleFazRef as React.RefObject<HTMLElement>)
            }
          >
            O que ele faz?
          </StyledPrimaryButton>
          <StyledPrimaryButton
            onClick={() =>
              scrollToSection(
                conhecaOJogadorRef as React.RefObject<HTMLElement>,
              )
            }
          >
            Conheça o jogador
          </StyledPrimaryButton>
        </div>

        <div className="mt-8">
          <StyledButton
            variant="bordered"
            onClick={() =>
              scrollToSection(diferencialRef as React.RefObject<HTMLElement>)
            }
          >
            <span>
              Saiba o diferencial do Shen que pode jogar em qualquer Lane
            </span>
          </StyledButton>
        </div>
        <div
          className="container"
          style={{
            backgroundImage: `url('https://henriquebicudo.github.io/onlyshen/Shen_files/${backgroundImages[backgroundIndex]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "600px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
            cursor: "url(''https://henriquebicudo.github.io/onlyshen/Shen_files/cursor.png') auto"
          }}
          onClick={changeBackground}
        >          
          <div className="bg-gray-400 bg-opacity-50 rounded-md">
            <h1 className="text-4xl mt-4">O OLHO DO CREPÚSCULO</h1>
            <h2 className="text-3xl">SHEN APENAS</h2>
            <p className="text-2x1 mt-[15px] mb-4 ml-3 mr-3">
              Para os guerreiros ionianos sigilosos conhecidos como Kinkou,
              Shen, o Olho do Crepúsculo, é um líder. Ele busca permanecer livre
              da confusão das emoções, preconceito ou ego, caminhando pelo
              caminho nunca visto do julgamento imparcial entre o reino dos
              espíritos e o mundo físico. Incumbido de impor harmonia entre os
              dois, Shen empunha lâminas de aço e energia arcana contra qualquer
              um que ameaçar o equilíbrio.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <h2
            ref={quemEShenRef}
            className="text-3xl font-bold text-white"
            id="quem-e-shen"
          >
            Quem é Shen?
          </h2>
          <Card>
            <p>
              Shen é um campeão do jogo League of Legends, conhecido como o Olho
              do Crepúsculo. Ele é um ninja que serve como líder espiritual de
              sua ordem, mantendo o equilíbrio entre os reinos espiritual e
              físico.
            </p>
          </Card>

          <h2
            ref={oQueEleFazRef}
            className="text-3xl font-bold text-white"
            id="o-que-ele-faz"
          >
            O que ele faz?
          </h2>
          <div className="flex gap-4">
            {abilities.map((ability, index) => (
              <StyledTab
                key={index}
                selected={selectedAbility.name === ability.name}
                onClick={() => setSelectedAbility(ability)}
              >
                <div className="icon-tab-tab-img">
                  <div className="sc-cf6885cf-0 bktZSc" data-aspect-ratio="1">
                    <div className="innerWrapper">
                      <img
                        alt={ability.name}
                        className="sc-de10a588-0 eowlkv sc-53895c5d-0 dflrpz sc-26e0dd2-0 eJReQo"
                        src={ability.img}
                      />
                    </div>
                  </div>
                </div>
                <div className="icon-tab-label">{ability.name}</div>
              </StyledTab>
            ))}
          </div>

          <Card>
            <div className="icon-tab--media">
              <div className="icon-tab-media-position">
                <div className="icon-tab-media-media arNativeBordered">
                  <div
                    className="sc-cf6885cf-0 gaVUax"
                    data-aspect-ratio="1.4666666666666666"
                  >
                    <div className="innerWrapper">
                      <video
                        key={selectedAbility.videoMp4} // Adiciona a chave para forçar a atualização do vídeo
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="sc-f3d622cf-0 eOxAvt sc-26e0dd2-0 eJReQo"
                      >
                        <source
                          src={selectedAbility.videoMp4}
                          type="video/mp4"
                        />
                        <track
                          kind="captions"
                          label="English"
                          src="path/to/captions.vtt"
                          srcLang="en"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="icon-tab-media-content">
                <div className="icon-tab-media-content-header">
                  <span
                    className="icon-tab-media-title"
                    style={{ color: "#fff", fontSize: "1.5rem" }}
                  >
                    {selectedAbility.name}
                  </span>
                </div>
                <div
                  className="icon-tab-media-subtitle"
                  style={{ color: "#fff", fontSize: "1.5rem" }}
                >
                  {selectedAbility.key}
                </div>
                <div
                  className="icon-tab-media-description"
                  style={{
                    minHeight: "104px",
                    color: "#fff",
                    fontSize: "1.2rem",
                  }}
                >
                  <div className="richText sc-22d16ee7-0 iGhZEP">
                    <div className="sc-4225abdc-0 lnNUuw">
                      <div>{selectedAbility.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <h2 ref={diferencialRef} className="text-3xl font-bold text-white">
            Diferencial do Shen
          </h2>
          <WideCard>
            <p className="">
              Shen é um campeão incrivelmente versátil em League of Legends,
              capaz de se adaptar a diversas funções graças ao seu kit único e à
              sua utilidade estratégica. Ele se destaca como um top laner
              resistente, um suporte de alto impacto e até mesmo como um jungler
              situacional. Essa flexibilidade vem de suas habilidades, que
              combinam durabilidade, controle de grupo e uma presença global
              incomparável. Sua [Q] concede dano adicional e um efeito de cura,
              tornando-o eficiente no duelo e na troca de dano na rota superior,
              enquanto sua [W] oferece proteção ao negar ataques básicos,
              beneficiando tanto ele quanto seus aliados próximos, o que é
              valioso em lutas em equipe. A [E], com seu provocação em área,
              permite que ele desarme oponentes, iniciando ou interrompendo
              combates de maneira decisiva, uma ferramenta especialmente útil na
              selva, onde o controle de grupo é essencial para ganks
              bem-sucedidos. Como suporte, Shen é um verdadeiro guardião,
              protegendo carregadores frágeis e sendo uma ameaça constante para
              os adversários que tentam abusar de posicionamento. No entanto, o
              que realmente diferencia Shen é sua habilidade suprema, a [R], que
              permite teletransportar-se para um aliado em perigo, concedendo um
              escudo massivo e virando o rumo de batalhas em qualquer lugar do
              mapa. É essa presença global que o torna &quot;o Shen do
              Rio,&quot; uma referência à sua capacidade de impactar rotas e
              objetivos neutros com sua mobilidade estratégica. Ele pode
              controlar a rota superior, desaparecer para proteger o time no
              dragão ou no arauto, e voltar sem perder muito tempo ou recursos,
              maximizando sua pressão no mapa. Shen é, em essência, um campeão
              que combina habilidade mecânica com um senso estratégico apurado,
              sendo uma escolha fantástica para jogadores que buscam dominar
              várias posições enquanto comandam o mapa com precisão cirúrgica.
            </p>
          </WideCard>

          <h2
            ref={conhecaOJogadorRef}
            className="text-3xl font-bold text-white"
          >
            Conheça o jogador
          </h2>
          <div className="pros-cons">
            <Card className="pros">
              <h3>Prós</h3>
              <ul>
                <li>
                  Ótimo Engage: Este jogador consegue ver ótimas janelas de
                  engage, você devera acompanhar cada uma delas.
                </li>
                <li>
                  Ótima visão de mapa: Este jogador sabe a hora certa de
                  utilizar sua ultimate, ajudando o time na hora mais precisa
                </li>
                <li>
                  Conhecimento do campeão: Este jogador já foi mono Shen, ele
                  conhece muito bem o campeão
                </li>
              </ul>
            </Card>
            <Card className="cons">
              <h3>Contras</h3>
              <ul>
                <li>
                  É o divas: Este jogador tem um sério problema em ver
                  oportunidades de dive, ele geralmente mergulha nos piores
                  momentos
                </li>
                <li>
                  Ladrão: Este jogador pode não saber a hora de dar um dive, mas
                  sabe a hora de cancelar um AA ou um ignite para roubar a kill
                  de seus companheiros de equipe, fique esperto...
                </li>
                <li>
                  Broxa: A energia do Shen impossibilita que ele fique com
                  vontade de participar de uma porradaria de 3 horas
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
} export default App;