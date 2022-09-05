import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Logo } from "./Logo";
import { Teams } from "./Teams";
import { StatsPage } from "./StatsPage";
import { Team } from "./Team";

export const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Logo />} />
            <Route path="teams" element={<Teams />} />
            <Route path="teams/:team_id" element={<Team />} />
            <Route path="stats" element={<StatsPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
