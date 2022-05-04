import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar-container box-shadow">
      <nav className="navigation aside-nav pd-x-xl">
        <ul className="list-non-bullets">
          <li className="nav-list pd-y-base">
            <Link to="/">
              {" "}
              <i className="fa fa-home" aria-hidden="true" />
              Home
            </Link>
          </li>
          <li className="nav-list pd-y-base">
            <Link to="/">
              <i className="fa fa-folder-open" aria-hidden="true" />
              Playlist
            </Link>
          </li>
          <li className="nav-list pd-y-base">
            <Link to="/">
              <i className="fa fa-thumbs-up" aria-hidden="true" />
              Liked
            </Link>
          </li>
          <li className="nav-list pd-y-base">
            <Link to="/">
              <i className="fa fa-bookmark" aria-hidden="true" />
              Watch Later
            </Link>
          </li>
          <li className="nav-list pd-y-base">
            <Link to="/">
              <i className="fa fa-history" aria-hidden="true" />
              History
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export { Sidebar };
