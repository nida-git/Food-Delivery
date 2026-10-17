import { Outlet } from "react-router";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import UserContext from "./utils/UserContext";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "abc",
    email: "example@gmail.com",
  });

  return (
    <div>
      <UserContext.Provider value={user}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

export default App;
