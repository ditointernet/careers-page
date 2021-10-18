import dynamic from "next/dynamic";

export { default as Navbar } from "./Navbar";
export const Hero = () => (
  <section id="sobre-a-dito" style={{ height: "100vh", background: "black" }}>
    <h2>Hero</h2>
  </section>
);
export const Objective = () => <h2>Objective</h2>;
// export { default as Scale } from "./Scale";
export const Tech = () => (
  <section id="nossas-tecnologias">
    <h2>Tech</h2>
  </section>
);
export const Values = dynamic(() => import("./Values"), {
  ssr: false,
});
export const Team = () => (
  <section id="nosso-time">
    <h2>Team</h2>
  </section>
);
export { default as Testimonials } from "./Testimonials";
export const Areas = () => <h2>Areas</h2>;
export const Reasons = () => <h2>Reasons</h2>;
export const Initiatives = () => <h2>Initiatives</h2>;
export { default as Benefits } from "./Benefits";
export const Screening = () => <h2>Screening</h2>;
export const Jobs = () => (
  <section id="nosso-processo-seletivo">
    <h2>Jobs</h2>
  </section>
);
export const Connect = () => <h2>Connect</h2>;
