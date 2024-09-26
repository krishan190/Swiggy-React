import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "krishan",
    email: "support@kkDev.com",
  });
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
