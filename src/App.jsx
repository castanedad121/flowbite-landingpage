import { useEffect, useState } from "react";
import {
  Header,
  Features,
  ContentSection,
  Team,
  Contact,
  Customer,
  Footer,
  WhatsappButton,
  Products,
  Hero,
} from "./components/index";
import useIntersection from "./hooks/useIntersection";
import "./App.css";

const App = () => {
  const [showContact, setShowContact] = useState(false);
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("darkMode"))
      ? JSON.parse(localStorage.getItem("darkMode"))
      : "light"
  );
  const handleDarkMode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("darkMode", JSON.stringify(newTheme));
  };

  const [home, isHome] = useIntersection({
    threshold: 0.5,
  });
  const [features, isFeatures] = useIntersection({
    threshold: 0.5,
  });
  const [products, isProducts] = useIntersection({
    threshold: 0.5,
  });
  const [company, isCompany] = useIntersection({
    threshold: 0.5,
  });
  const [team, isTeam] = useIntersection({
    threshold: 0.5,
  });

  const [customer, isCustomer] = useIntersection({
    threshold: 0.5,
  });

  useEffect(() => {
    if (theme === "light" || !theme) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);
  return (
    <div className="bg-white dark:bg-gray-900">
      <Header
        theme={theme}
        handleDarkMode={handleDarkMode}
        isHome={isHome}
        isFeatures={isFeatures}
        isProducts={isProducts}
        isCompany={isCompany}
        isTeam={isTeam}
        isCustomer={isCustomer}
        showContact={showContact}
      />
      <div
        className={
          showContact
            ? "bg-white dark:bg-gray-900"
            : "pt-16 bg-white dark:bg-gray-900"
        }
        id="home"
        ref={home}
      >
        <Hero />
      </div>
      <section id="features" ref={features}>
        <Features />
      </section>
      <section id="products" ref={products}>
        <Products />
      </section>
      <section id="company" ref={company}>
        <ContentSection />
      </section>
      <section id="team" ref={team}>
        <Team />
      </section>
      <section id="customer" ref={customer}>
        <Customer theme={theme} />
      </section>
      <Footer theme={theme} />
      <WhatsappButton setShowContact={setShowContact} />
      {showContact && <Contact setShowContact={setShowContact} />}
    </div>
  );
};

export default App;
