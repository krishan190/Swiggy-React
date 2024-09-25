import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      {/* outlet (all children will go into the outlet it refers the children component*/}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
