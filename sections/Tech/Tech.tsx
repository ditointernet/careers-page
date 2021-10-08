import { COLORS, GRID, RADII } from "@ditointernet/uai-foundation";
import styled from "styled-components";
// import { COLORS } from "@ditointernet/uai-foundation";

const TechSection = styled.section`
  background-color: #121a2d;
  color: white;
  padding: 70px 72px;
`;

const Title = styled.h2`
  max-width: 604px;
  background: linear-gradient(271.75deg, #0fe38a 16.6%, #85ffc4 89.72%);
  background-clip: text;
  -ms-background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Card = styled.div`
  position: relative;
  max-width: 356px;
  border-radius: ${RADII.BIG};
  padding: ${GRID(3)} ${GRID(5)};
  background-color: #0d1425;
  border: 1px solid #2e384e;
  box-shadow: 0px 7px 20px -2px rgba(0, 0, 0, 0.8);
  z-index: 1;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 28px;
    top: 41px;
    border-left: 1px solid ${COLORS.GRAY_5};
    height: calc(100% - 82px);
  }

  p {
    margin: 0;
    position: relative;

    &:not(:first-child):not(:last-child):before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: -12px;
      width: 5px;
      border-bottom: 1px solid ${COLORS.GRAY_5};
    }
  }

  p ~ p {
    margin-top: 26px;
  }
`;

const Shadow = styled.div`
  position: absolute;
  width: 356px;
  height: 298px;
  top: 0;
  left: 0;
  border-radius: 100%;
  box-shadow: 0px 0px 61px 20px rgba(3, 255, 210, 0.2);
`;

const Tech = () => (
  <TechSection>
    <Title>Já somos uma grande Martech* e não paramos de crescer.</Title>
    <div css="margin-left: 30px">
      <p css="width: 694px">
        A plataforma Dito foi toda desenvolvida internamente, com ~/tecnologia
        própria/~, e impacta ~/milhões de consumidores/~ por mês, de forma
        inteligente e multicanal.
      </p>
      <p>Hoje usamos tecnologias como:</p>
      <div css="position: relative; margin-left: 34px">
        <Shadow />
        <Card>
          <p>Golang</p>
          <p>Kubernetes</p>
          <p>Elasticsearch (cluster de 210 bilhoes de documentos)</p>
          <p>Kinesis</p>
          <p>AWS e GCP como cloud</p>
        </Card>
      </div>
      <p css="margin: 48px 0 36px">Além de:</p>
      <div css="position: relative; margin-left: 34px">
        <Shadow />
        <Card>
          <p>React</p>
          <p>Design System</p>
          <p>TypeScript</p>
          <p>Styled Components</p>
          <p>Redux</p>
        </Card>
      </div>
    </div>
  </TechSection>
);

export default Tech;
