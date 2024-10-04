import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";


function App() {
  const [user, setUser] = useState({
    name: "kktech",
    email: "supportkk@gmail.com",
  });
  return (
   <Provider store={store}>
     <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
   </Provider>
  );
}

export default App;
