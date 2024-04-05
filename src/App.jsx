import React from "react";
import {
  Header,
  Hero,
  Features,
  CtaSection,
  ContentSection,
  Team,
  Pricing,
  Contact,
  Social,
  Faq,
  Testimonials,
  Customer,
  Footer,
  WhatsappButton,
} from "./components/index";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <CtaSection />
      <ContentSection />
      <Team />
      <Customer />
      <Testimonials />
      <Social />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default App;
