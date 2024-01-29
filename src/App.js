import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import HomePage from "./pages/HomePage.js";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
