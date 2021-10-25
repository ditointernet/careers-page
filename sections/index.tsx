import dynamic from "next/dynamic";

export { default as About } from "./About";
export { default as Hero } from "./Hero";
export { default as Navbar } from "./Navbar";
export { default as Scale } from "./Scale";
export { default as Team } from "./Team";
export { default as Testimonials } from "./Testimonials";

export const Tech = () => (
  <section id="nossas-tecnologias">
    <h2>Tech</h2>
  </section>
);
export const Values = dynamic(() => import("./Values"), {
  ssr: false,
});
export const Areas = () => <h2>Areas</h2>;
export const Reasons = () => <h2>Reasons</h2>;
export const Initiatives = () => <h2>Initiatives</h2>;
export { default as Benefits } from "./Benefits";
export const Screening = () => <h2>Screening</h2>;
export { default as Socials } from "./Socials";
export { default as Jobs } from "./Jobs";
export const Connect = () => <h2>Connect</h2>;
