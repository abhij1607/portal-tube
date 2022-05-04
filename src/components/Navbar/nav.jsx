import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="top-nav">
      <nav className="brand-nav navigation gap-1 box-shadow">
        <div className="flex-row wd-full">
          <Link className="logo-brand" to="/">
            PortalTube
          </Link>
          <Link
            className="btn btn-primary-outline align-right mobile-element"
            to="#"
          >
            Login
          </Link>
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

        <Link className="btn btn-primary-outline desktop-element" to="#">
          Login
        </Link>
      </nav>
    </header>
  );
};

export { Nav };
