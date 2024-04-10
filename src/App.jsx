import React, { useState } from "react";
import {
  Header,
  Hero,
  Features,
  ContentSection,
  Team,
  Contact,
  Customer,
  Footer,
  WhatsappButton,
  Slider,
} from "./components/index";
import "./App.css";

const App = () => {
  const [showContact, setShowContact] = useState(false);
  return (
    <div>
      <Header />
      <Slider />
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
      <Footer />
      <WhatsappButton setShowContact={setShowContact} />
      {showContact && <Contact setShowContact={setShowContact} />}
    </div>
  );
};

export default App;
