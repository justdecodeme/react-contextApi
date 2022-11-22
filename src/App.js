import { useState } from "react"

import './App.scss';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import AuthContext from "./contexts/auth-context"

function App() {
  const [user, setUser] = useState(null);

  const login = (userName) => {
    setUser(userName);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div className="App">
        <Header />
        {user ? <Home /> : <Login />}
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
