import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div id="navigation-bar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
