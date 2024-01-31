import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import ContactPage from "./pages/ContactPage.js";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import MenuPage from "./pages/MenuPage.js";
import TakeOutPage from "./pages/TakeOutPage.js";
import Footer from "./components/Footer.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-social";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/takeout" element={<TakeOutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
