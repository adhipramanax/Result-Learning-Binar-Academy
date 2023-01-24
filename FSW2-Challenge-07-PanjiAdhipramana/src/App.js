import "./App.css";
import "./assets/css/style.css";
import "./assets/css/cars.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./page/Home";
import RentalCar from "./page/RentalCar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      {/* Header */}
      <Navbar />

      {/* Content */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cars" element={<RentalCar />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
