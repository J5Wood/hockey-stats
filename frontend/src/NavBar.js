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
        <span onClick={() => navigate("/players")} className="nav-link">
          Players
        </span>
        <span className="menu"></span>
      </div>
      <Outlet />
    </>
  );
};
