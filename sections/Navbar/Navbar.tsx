import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { COLORS, GRID } from "@ditointernet/uai-foundation";

import Menu from "./Menu";
import BurgerIcon from "./BurgerIcon";
import ButtonPrimary from "@/components/ButtonPrimary";

const Navbar = () => {
  const [isOpenMenu, toggleMenu] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(window.pageYOffset);

  useEffect(() => {
    let lastScroll = 0;

    if (window.location.hash != "") {
      localStorage.setItem("navigation", "enabled")
    }

    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      const scrollUp = "scroll-up";
      const scrollDown = "scroll-down";
      const currentScroll = window.pageYOffset;
      const scrollPosition = currentScroll - window.innerHeight;

      setCurrentPosition(currentScroll)

      if (localStorage.getItem("navigation") === "enabled") {
        if ((window.location.hash === "#sobre-a-dito") && (scrollPosition > 0 && scrollPosition <= 744)) { localStorage.setItem("navigation", "disabled") }
        else if ((window.location.hash === "#nossas-tecnologias") && (scrollPosition > 1700 && scrollPosition <= 2800)) { localStorage.setItem("navigation", "disabled") }
        else if ((window.location.hash === "#nosso-time") && (scrollPosition > 2841 && scrollPosition <= 3800)) { localStorage.setItem("navigation", "disabled") }
        else if ((window.location.hash === "#beneficios") && (scrollPosition > 10675 && scrollPosition <= 12200)) { localStorage.setItem("navigation", "disabled") }
        else if ((window.location.hash === "#nosso-processo-seletivo") && (scrollPosition > 12201)) { localStorage.setItem("navigation", "disabled") }
      } else if (localStorage.getItem("navigation") === "disabled") {
        if ((window.location.hash != "#sobre-a-dito") && (scrollPosition > 0 && scrollPosition <= 744)) { window.location.href = `${window.location.origin}#sobre-a-dito` }
        else if ((window.location.hash != "#nossas-tecnologias") && (scrollPosition > 1700 && scrollPosition <= 2800)) { window.location.href = `${window.location.origin}#nossas-tecnologias` }
        else if ((window.location.hash != "#nosso-time") && (scrollPosition > 2841 && scrollPosition <= 3800)) { window.location.href = `${window.location.origin}#nosso-time` }
        else if ((window.location.hash != "#beneficios") && (scrollPosition > 10675 && scrollPosition <= 12200)) { window.location.href = `${window.location.origin}#beneficios` }
        else if ((window.location.hash != "#nosso-processo-seletivo") && (scrollPosition > 12201)) { window.location.href = `${window.location.origin}#nosso-processo-seletivo` }
      }

      if (currentScroll < window.innerHeight) {
        navbar?.classList.remove(scrollUp);
        return;
      }

      if (
        currentScroll > lastScroll &&
        !navbar?.classList.contains(scrollDown)
      ) {
        navbar?.classList.remove(scrollUp);
        navbar?.classList.add(scrollDown);
      } else if (
        currentScroll < lastScroll &&
        navbar?.classList.contains(scrollDown)
      ) {
        navbar?.classList.remove(scrollDown);
        navbar?.classList.add(scrollUp);
      }

      lastScroll = currentScroll;
      toggleMenu(false);
    });
  });

  return (
    <Header id="navbar" className={currentPosition < 10 ? "top-position" : ""}>
      <ButtonBackPage href="https://www.dito.com.br/">
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
      </ButtonBackPage>
      <BurgerIcon onClick={() => toggleMenu(!isOpenMenu)} active={isOpenMenu} />
      <Menu open={isOpenMenu} />
      <ButtonPrimary style={{ marginLeft: "20px" }} href="#nossas-vagas">
        Ver nossas vagas
      </ButtonPrimary>
    </Header>
  );
};

const Header = styled.header`
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.08);
  background-color: ${COLORS.WHITE};
  height: ${GRID(8)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${GRID(2)};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  transition: transform 0.2s;

  &:not(.top-position) {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
    transition: box-shadow .3s ease-in-out;
  }

  &.scroll-up {
    transform: none;
  }

  &.scroll-down {
    transform: translate3d(0, -100%, 0);
  }

  @media only screen and (min-width: 1366px) {
    padding: 0 ${GRID(2.5)};
  }
`;

const ButtonBackPage = styled.a`
  display: none;
  color: ${COLORS.NAVY_DARK};
  min-width: ${GRID(21.75)};
  margin: 0;
  font-weight: 600;
  font-size: ${GRID(2)};

  @media only screen and (min-width: 1366px) {
    display: flex;
    justify-content: space-between;
  }
`;

export default Navbar;
