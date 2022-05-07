import "./App.css";

import { Navbar, Header, Features, Faq, Contact, Footer } from "./components";
import Aboutus from "./components/aboutus/Aboutus";
function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Features />
      <Aboutus />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
