import dynamic from 'next/dynamic';

export { default as About } from './About';
export { default as Hero } from './Hero';
export { default as Navbar } from './Navbar';
export { default as Scale } from './Scale';
export { default as Team } from './Team';
export { default as Testimonials } from './Testimonials';
export { default as Tech } from './Tech';
export { default as TechOld } from './TechOld';
export const Values = dynamic(() => import('./Values'), {
  ssr: false,
});
export { default as Areas } from './Areas';
export { default as Initiatives } from './Initiatives';
export { default as Reasons } from './Reasons';
export { default as Benefits } from './Benefits';
export { default as Socials } from './Socials';
export { default as Jobs } from './Jobs';
export { default as Screening } from './Screening';
export const Connect = () => <h2>Connect</h2>;
