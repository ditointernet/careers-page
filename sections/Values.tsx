import React, { useState, useCallback } from "react";

import { COLORS, GRID } from "@ditointernet/uai-foundation";
import styled from "styled-components";
import Ztext from "react-ztext";

import Particles from "../components/Particles";

const Values = () => {
  const [selectedLetter, setLetter] = useState<number>(0);

  let isMobile = useCallback(() => {
    return Boolean(
      window?.navigator.userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
  }, []);

  return (
    <Section>
      <ParticleWrapper>
        <Particles />
      </ParticleWrapper>
      <Title>Nossos valores dizem muito sobre nós.</Title>
      <SubTitle>
        Para entender melhor nosso jeito de trabalhar, você precisa conhecer
        nossos valores. Eles estão em tudo o que a gente faz e em cada pessoa do
        nosso time.
      </SubTitle>
      <Fera hover={selectedLetter}>
        <Ztext
          depth={isMobile() ? "2rem" : "4rem"}
          direction="forwards"
          event="none"
          eventRotation="0"
          eventDirection="reverse"
          fade={false}
          layers={isMobile() ? 10 : 20}
          perspective="500px"
        >
          <span onMouseOver={() => setLetter(0)}>F</span>
          <span onMouseOver={() => setLetter(1)}>E</span>
          <span onMouseOver={() => setLetter(2)}>R</span>
          <span onMouseOver={() => setLetter(3)}>A</span>
        </Ztext>
      </Fera>
      <Content>
        <Line hover={selectedLetter === 0} onMouseOver={() => setLetter(0)}>
          Pega e <b>FAZ</b> com <b>FOCO</b> e planejamento.
        </Line>
        <Line hover={selectedLetter === 1} onMouseOver={() => setLetter(1)}>
          Age com <b>ÉTICA</b> e transparência.
        </Line>
        <Line hover={selectedLetter === 2} onMouseOver={() => setLetter(2)}>
          Se preocupa com <b>RESULTADOS</b> dos clientes.
        </Line>
        <Line hover={selectedLetter === 3} onMouseOver={() => setLetter(3)}>
          Trabalha com <b>ALEGRIA</b> e sede por <b>APRENDER</b>.{" "}
        </Line>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  padding: ${GRID(10)} 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATQAAACnCAYAAACfBKDGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIrSURBVHgB7dRBEcAgEACxa13g/40nnICPnUREZgAC9j3rH4AIoQEZQgMyhAZkCA3IEBqQITQgQ2hAhtCADKEBGUIDMoQGZAgNyBAakCE0IENoQIbQgAyhARlCAzKEBmQIDcgQGpAhNCBDaECG0IAMoQEZQgMyhAZkCA3IEBqQITQgQ2hAhtCADKEBGUIDMoQGZAgNyBAakCE0IENoQIbQgAyhARlCAzKEBmQIDcgQGpAhNCBDaECG0IAMoQEZQgMyhAZkCA3IEBqQITQgQ2hAhtCADKEBGUIDMoQGZAgNyBAakCE0IENoQIbQgAyhARlCAzKEBmQIDcgQGpAhNCBDaECG0IAMoQEZQgMyhAZkCA3IEBqQITQgQ2hAhtCADKEBGUIDMoQGZAgNyBAakCE0IENoQIbQgAyhARlCAzKEBmQIDcgQGpAhNCBDaECG0IAMoQEZQgMyhAZkCA3IEBqQITQgQ2hAhtCADKEBGUIDMoQGZAgNyBAakCE0IENoQIbQgAyhARlCAzKEBmQIDcgQGpAhNCBDaECG0IAMoQEZQgMyhAZkCA3IEBqQITQgQ2hAhtCADKEBGUIDMoQGZAgNyBAakCE0IENoQIbQgAyhARlCAzKEBmQIDcgQGpAhNCBDaECG0IAMoQEZQgMyhAZkCA3IEBqQITQgQ2hAhtCADKEBGUIDMoQGZAgNyBAakCE0IENoQIbQgAyhARlCAzKEBmQIDcj49j1rAAIeZ0IGlryQ1BMAAAAASUVORK5CYII="),
    linear-gradient(180deg, #121a2d 0%, #111723 49.72%, #121a2d 100%);
  overflow: hidden;
  min-height: ${GRID(128)};

  @media (max-width: 768px) {
    padding: ${GRID(4.5)} 0;
    min-height: ${GRID(96)};
  }
`;

const ParticleWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  color: ${COLORS.WHITE};
  font-size: ${GRID(4.75)};
  text-align: center;
  line-height: 1.2;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: ${GRID(2.75)};
  }
`;

const SubTitle = styled.p`
  color: ${COLORS.WHITE};
  font-size: ${GRID(2.75)};
  margin: 0 auto;
  max-width: ${GRID(120)};
  text-align: center;

  @media (max-width: 768px) {
    font-size: ${GRID(2)};
    padding: 0 ${GRID(2)};
  }
`;

const Fera = styled.div<{ hover: number }>`
  margin: ${GRID(2)} auto 0 auto;
  padding: 0;
  font-size: ${GRID(32)};
  font-weight: bold;

  > div {
    transform: skew(-14deg);
  }

  @media (max-width: 768px) {
    font-size: ${GRID(13)};
    margin: ${GRID(3)} auto ${GRID(2)} auto;

    div > span > span:not(:first-child) > span {
      color: #026d50;
    }

    div > span > span:first-child {
      background: -webkit-linear-gradient(270deg, #b7ffed 0%, #0bffb8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media (min-width: 768px) {
    div > span > span:not(:first-child) > span {
      color: #373737;
      transition: all 0.3s ease;
      opacity: 0.3;

      &:nth-child(${(props) => props.hover + 1}) {
        opacity: 1;
        transition: all 0.2s ease;
        color: #026d50;
      }
    }

    div > span > span:first-child {
      opacity: 0.9;
      color: rgba(196, 196, 196, 0.4);
      text-shadow: 0 0 0 rgba(11, 255, 184, 0);
      transition: all 0.3s ease;
      cursor: pointer;

      span:nth-child(${(props) => props.hover + 1}) {
        opacity: 1;
        background: -webkit-linear-gradient(270deg, #b7ffed 0%, #0bffb8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 0 ${GRID(1.6)} rgba(11, 255, 184, 0.8);
        transition: all 0.3s ease;
      }
    }
  }
`;

const Line = styled.p<{ hover: boolean }>`
  font-size: ${GRID(3.5)};
  padding: ${GRID(2)} 0;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  @media (max-width: 768px) {
    opacity: 1;
    font-size: ${GRID(2)};
    padding: ${GRID(1.5)} ${GRID(2)};
  }

  @media (min-width: 768px) {
    opacity: ${(props) => (props.hover ? 1 : 0.5)};
    transform: scale(${(props) => (props.hover ? 1.05 : 1)});
    padding: ${GRID(1)};
  }

  b {
    color: ${(props) => (props.hover ? "#0bffb8" : "#01AF7D")};
    text-transform: uppercase;
  }
`;

const Content = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${COLORS.WHITE};
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

export default Values;
