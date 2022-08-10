import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Logo } from "./Logo";
import { Teams } from "./Teams";
import { Players } from "./Players";

export const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Logo />} />
          <Route exact path="teams" element={<Teams />} />
          <Route exact path="players" element={<Players />} />
        </Routes>
      </Router>
    </div>
  );
};
