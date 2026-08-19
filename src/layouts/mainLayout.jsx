import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer/Footer";
import NavBar from "../components/common/navBar/NavBar";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
