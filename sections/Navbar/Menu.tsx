import { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS_NEXT, GRID } from "@ditointernet/uai-foundation";

type Props = {
  open: boolean;
};

const Menu = ({ open }: Props) => {
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    if (window.location.hash) {
      setHash(window.location.hash);
    }
    window.addEventListener("hashchange", () => setHash(location.hash));
  }, []);

  const isActive = (value: string) => value == hash && "active";

  const clickNavigation = (section: string) => {
    localStorage.setItem("navigation", "enabled")
    setTimeout(() => window.location.href = `${window.location.origin}${section}`, 100)
  }

  return (
    <MenuWrapper className={`${open && "open"}`}>
      <List>
        <Item
          tabIndex={1}
          title="Dito - Sobre a Dito"
          onClick={() => clickNavigation("#sobre-a-dito")}
          className={`${isActive("#sobre-a-dito")}`}
        >Sobre a Dito</Item>

        <Item
          tabIndex={2}
          title="Dito - Nossas tecnologias"
          onClick={() => clickNavigation("#nossas-tecnologias")}
          className={`${isActive("#nossas-tecnologias")}`}
        >Nossas tecnologias</Item>

        <Item
          tabIndex={3}
          title="Dito - Nosso time"
          onClick={() => clickNavigation("#nosso-time")}
          className={`${isActive("#nosso-time")}`}
        >Nosso time</Item>

        <Item
          tabIndex={4}
          title="Dito - Benefícios"
          onClick={() => clickNavigation("#beneficios")}
          className={`${isActive("#beneficios")}`}
        >Benefícios</Item>

        <Item
          tabIndex={5}
          title="Dito - Nosso processo seletivo"
          onClick={() => clickNavigation("#nosso-processo-seletivo")}
          className={`${isActive("#nosso-processo-seletivo")}`}
        >Nosso processo seletivo</Item>

        <a href="#back">
          <Item>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7102 6.29165C12.804 6.38454 12.8784 6.49504 12.9291 6.6168C12.9799 6.73856 13.006 6.86916 13.006 7.00106C13.006 7.13297 12.9799 7.26357 12.9291 7.38532C12.8784 7.50708 12.804 7.61759 12.7102 7.71048L9.41024 10.9978L17.0002 10.9978C17.2655 10.9978 17.5198 11.103 17.7074 11.2904C17.8949 11.4778 18.0002 11.7319 18.0002 11.9969C18.0002 12.2619 17.8949 12.5161 17.7074 12.7035C17.5198 12.8909 17.2655 12.9961 17.0002 12.9961L9.41024 12.9961L12.7102 16.2834C12.8985 16.4716 13.0043 16.7267 13.0043 16.9928C13.0043 17.2589 12.8985 17.5141 12.7102 17.7022C12.5219 17.8904 12.2665 17.9961 12.0002 17.9961C11.7339 17.9961 11.4785 17.8904 11.2902 17.7022L6.29025 12.7064C6.1992 12.6113 6.12784 12.4993 6.08024 12.3766C6.02734 12.257 6.00001 12.1277 6.00001 11.9969C6.00001 11.8662 6.02734 11.7369 6.08024 11.6173C6.12784 11.4946 6.1992 11.3826 6.29025 11.2875L11.2902 6.29165C11.3832 6.198 11.4938 6.12366 11.6157 6.07294C11.7375 6.02221 11.8682 5.99609 12.0002 5.99609C12.1323 5.99609 12.263 6.02221 12.3848 6.07294C12.5067 6.12366 12.6173 6.198 12.7102 6.29165Z"
                fill="#223154"
              />
            </svg>
            Voltar para o site
          </Item>
        </a>
      </List>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  box-shadow: 0 ${GRID(0.25)} ${GRID(1)} 0 rgb(0 0 0 / 15%);
  position: absolute;
  top: ${GRID(10.625)};
  background-color: ${COLORS_NEXT.WHITE};
  width: calc(100% - ${GRID(4)});
  border-radius: ${GRID(2)};
  max-height: 0;
  overflow: hidden;

  transition: max-height 0.2s linear;

  &.open {
    max-height: ${GRID(39)};
  }

  @media only screen and (min-width: 1366px) {
    box-shadow: none;
    position: relative;
    background-color: transparent;
    border-radius: 0;
    top: 0;
    max-height: ${GRID(39)};
    width: 100%;
  }
`;

const List = styled.ul`
  width: 100%;
  list-style: none;
  padding: ${GRID(1.5)} 0;
  margin: 0;

  a:last-child {
    li {
      display: flex;
    }
  }

  @media only screen and (min-width: 1366px) {
    display: flex;
    justify-content: end;
    padding: 0;

    a:last-child {
      display: none;
    }
  }
`;

const Item = styled.li`
  color: ${COLORS_NEXT.BRAND.NAVY_900};
  cursor: pointer;
  padding: ${GRID(1.5)} ${GRID(3)};
  font-size: ${GRID(2)};
  font-weight: 500;
  line-height: ${GRID(3)};

  &.active {
    color: ${COLORS_NEXT.BRAND.GREEN_600};

    &::after {
      width: 80%;
    }
  }

  &:active {
    background: ${COLORS_NEXT.BRAND.GREEN_600};
    color: ${COLORS_NEXT.WHITE};

    &.active {
      color: ${COLORS_NEXT.WHITE};
      background-color: ${COLORS_NEXT.BRAND.GREEN_600};
    }
  }

  @media only screen and (min-width: 1366px) {
    padding: 0;
    margin: 0 ${GRID(2.5)};
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      top: ${GRID(2.75)};
      height: ${GRID(0.25)};
      width: 0%;
      right: 0;
      background-color: ${COLORS_NEXT.BRAND.GREEN_600};
      transition: 0.5s ease all 0.1s;
    }

    &:hover {
      background: transparent;
      color: ${COLORS_NEXT.BRAND.NAVY_900};

      &.active {
        color: ${COLORS_NEXT.BRAND.GREEN_600};
        background: transparent;

        &::after {
          background-color: ${COLORS_NEXT.BRAND.GREEN_600};
        }
      }

      &::after {
        width: 80%;
        transition: 0.3s ease all;
        background-color: ${COLORS_NEXT.BRAND.NAVY_900};
      }
    }
  }
`;

export default Menu;
