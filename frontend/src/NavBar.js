import { useNavigate, Outlet } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-bar">
        <span onClick={() => navigate("/")} className="mini-logo">
          HS
        </span>
        <span onClick={() => navigate("/teams")} className="nav-link">
          Teams
        </span>
        <span onClick={() => navigate("/stats")} className="nav-link">
          Stats
        </span>
        <span className="menu"></span>
      </div>
      <Outlet />
    </>
  );
};
