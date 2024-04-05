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
      <section id="company">
        <ContentSection />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="customer">
        <Customer />
      </section>
      <Testimonials />
      <CtaSection />
      <Social />
      <Pricing />
      <section id="contact">
        <Contact />
      </section>
      <Faq />
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default App;
