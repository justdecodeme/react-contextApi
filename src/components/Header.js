import { useContext } from "react";

import AuthContext from "../contexts/auth-context";

function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="Header">
      <nav>
        <h4>React - Context API</h4>
        <ul>
          {
            user &&
            <>
              <li><a href="#">Hi, {user}</a></li>
              <li><a href="#" onClick={logout}>Logout</a></li>
            </>
          }
        </ul>
      </nav>
    </header>
  );
}

export default Header;
