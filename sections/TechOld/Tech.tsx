import { COLORS, GRID, RADII, TYPOGRAPHY } from '@ditointernet/uai-foundation';
import styled from 'styled-components';
import { ArrowRight, ChevronRight } from '@ditointernet/uai-icons';

const Tech = () => {
  const bulletPoints: Record<'backEnd' | 'frontEnd', string[]> = {
    backEnd: [
      'Golang',
      'Kubernetes',
      'Elasticsearch (cluster de 210 bilhões de documentos)',
      'Kinesis',
      'AWS e GCP como cloud',
    ],
    frontEnd: [
      'React',
      'Design System próprio open-source (DitoUAI)',
      'TypeScript',
      'Styled Components',
      'Redux',
    ],
  };

  return (
    <TechSection>
      <Title>Já somos uma grande Martech* e não paramos de crescer.</Title>
      <div css="margin-left: 30px">
        <p
          css={`
            width: 694px;
            margin: ${GRID(9.5)} 0 ${GRID(6)};
          `}
        >
          A plataforma Dito foi toda desenvolvida internamente, com{' '}
          <strong>~/tecnologia própria/~</strong>, e impacta{' '}
          <strong>~/milhões de consumidores/~</strong> por mês, de forma
          inteligente e multicanal.
        </p>
        <p
          css={`
            margin: ${GRID(6)} 0 ${GRID(4.5)};
          `}
        >
          Hoje usamos tecnologias como:
        </p>
        <div css="display: flex; flex-flow: row">
          <div className="column">
            <TechCard bulletPoints={bulletPoints.backEnd} />
            <p
              css={`
                margin: ${GRID(6)} 0 ${GRID(4.5)};
              `}
            >
              Além de:
            </p>
            <TechCard bulletPoints={bulletPoints.frontEnd} />
          </div>
          <div className="column" css="max-width: 750px; margin-left: 108px">
            <p>Alguns dos nossos números:</p>
            <h4
              css={`
                font-weight: 500;
                margin-top: ${GRID(2.5)};
              `}
            >
              São <strong>676 rotinas periódicas</strong> e mais de{' '}
              <strong>180 microsserviços</strong>, totalizando{' '}
              <strong>284 instâncias</strong>, rodando em{' '}
              <strong>58 máquinas</strong>.
            </h4>
            <p
              css={`
                max-width: 622px;
                margin-top: ${GRID(5)};
              `}
            >
              Ah, e se você ainda não domina a linguagem{' '}
              <strong>Go (Golang)</strong>, mas tem muita vontade, não se
              preocupe porque a gente tem todo o prazer em ensinar. A maior
              parte do nosso time aprendeu aqui mesmo.
              <br />
              <br />
              Por aqui, a gente valoriza tanto o aprendizado que ele faz parte
              da nossa rotina. Além do nosso <strong>code review</strong>, em
              que todo o time aproveita para tirar dúvidas, temos o{' '}
              <strong>hackathon</strong>, um momento de troca livre de
              experiências e conhecimentos para propormos soluções para melhorar
              processos, códigos etc.
            </p>
            <button
              css={`
                border: none;
                height: ${GRID(5)};
                padding: 0 ${GRID(2.5)};
                border-radius: ${RADII.DEFAULT};
                background-color: #1ce0bd;
                margin-top: ${GRID(4.5)};
                cursor: pointer;
                color: #121a2d;
                font-size: ${TYPOGRAPHY.FONT_SIZE.SMALL};
                font-weight: ${TYPOGRAPHY.WEIGHTS.SEMI_BOLD};
                box-shadow: 0px 0px 34px -3px rgba(0, 255, 240, 0.6);
              `}
            >
              Ver vagas de tecnologias
            </button>
          </div>
        </div>
      </div>
    </TechSection>
  );
};

const TechCard = ({ bulletPoints }: { bulletPoints: string[] }) => (
  <div css="position: relative; margin-left: 34px">
    <Shadow />
    <Card>
      <ArrowRight size={GRID(1.5)} fill="#BC3EE9" />
      {bulletPoints.map((bullet, index) => (
        <p key={index}>{bullet}</p>
      ))}
      <ChevronRight size={GRID(1.5)} fill={COLORS.GRAY_5} />
    </Card>
  </div>
);

const TechSection = styled.section`
  margin-top: 200px;
  background-color: #121a2d;
  color: white;
  padding: 70px 72px;

  p:first-of-type strong {
    font-weight: 600;
    color: ${COLORS.GREEN_MAIN};
  }

  .column {
    h4 strong,
    p strong {
      color: #00fff0;
    }
  }
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
    content: '';
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

    &:not(:first-of-type):not(:last-of-type):before {
      content: '';
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

  > svg {
    position: absolute;
    left: 23px;

    &:first-of-type {
      top: 29px;
    }

    &:last-of-type {
      bottom: 29px;
    }
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


export default Tech;
