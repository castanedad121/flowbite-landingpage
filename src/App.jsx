import React, { useEffect, useState } from "react";
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
  Products,
} from "./components/index";
import "./App.css";

const App = () => {
  const [showContact, setShowContact] = useState(false);
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("darkMode"))
      ? JSON.parse(localStorage.getItem("darkMode"))
      : "light"
  );
  console.log(theme);
  const handleDarkMode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("darkMode", JSON.stringify(newTheme));
  };

  useEffect(() => {
    if (theme === "light" || !theme) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);
  return (
    <div>
      <Header theme={theme} handleDarkMode={handleDarkMode} />
      <div className="pt-10" id="home">
        <Slider />
      </div>
      <section id="features">
        <Features />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="company">
        <ContentSection />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="customer">
        <Customer theme={theme} />
      </section>
      <Footer theme={theme} />
      <WhatsappButton setShowContact={setShowContact} />
      {showContact && <Contact setShowContact={setShowContact} />}
    </div>
  );
};

export default App;
