import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Logo } from "./Logo";
import { Teams } from "./Teams";
import { Players } from "./Players";

export const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Logo />} />
            <Route path="teams" element={<Teams />} />
            <Route path="players" element={<Players />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
