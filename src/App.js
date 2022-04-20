import "./App.css";
import { Navbar, Header, Features, Faq, Contact, Footer } from "./components";
function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Features />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
