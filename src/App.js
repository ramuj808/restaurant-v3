import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import ContactPage from "./pages/ContactPage.js";
import HomePage from "./pages/HomePage.js";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
