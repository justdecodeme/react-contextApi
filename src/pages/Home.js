import { useContext } from "react";

import AuthContext from "../contexts/auth-context";

function Home() {
  const { user } = useContext(AuthContext);

  return <div className="Home">
    <h2>Home Page</h2>

    <br />

    <p>Logged In User Name:  {user}</p>
  </div>;
}

export default Home;