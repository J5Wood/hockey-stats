import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Logo } from "./Logo";
import { TeamsPage } from "./TeamsPage";
import { StatsPage } from "./StatsPage";
import { TeamPage } from "./TeamPage";
import { PlayerPage } from "./PlayerPage";
import { PlayersPage } from "./PlayersPage";

export const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Logo />} />
            <Route path="teams" element={<TeamsPage />} />
            <Route path="teams/:team_id" element={<TeamPage />} />
            <Route path="stats" element={<StatsPage />} />
            <Route path="players" element={<PlayersPage />} />
            <Route path="players/:player_id" element={<PlayerPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
