import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const Navbar = () => {
  const { userState, userDispatch } = useAuth();
  return (
    <header className="top-nav">
      <nav className="brand-nav navigation gap-1 box-shadow">
        <div className="flex-row wd-full">
          <Link className="logo-brand" to="/">
            PortalTube
          </Link>
          {userState.userToken ? (
            <button
              className="btn btn-primary-outline align-right mobile-element"
              onClick={() => userDispatch({ type: "LOG_OUT" })}
            >
              Logout
            </button>
          ) : (
            <Link
              className="btn btn-primary-outline align-right mobile-element"
              to="/login"
            >
              Login
            </Link>
          )}
        </div>

        <div className="flex-row wd-full search-div">
          <input
            type="search"
            className="input input-search input-primary"
            id="search"
            name="search"
          />
          <button className="btn btn-search" type="search">
            <i className="fas fa-2x fa-search" title="search" />
          </button>
        </div>

        {userState.userToken ? (
          <button
            className="btn btn-primary-outline desktop-element"
            onClick={() => userDispatch({ type: "LOG_OUT" })}
          >
            Logout
          </button>
        ) : (
          <Link className="btn btn-primary-outline desktop-element" to="/login">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export { Navbar };
