import { Outlet } from "react-router";

import Footer from "../components/common/footer/Footer";
import NavBar from "../components/common/navBar/NavBar";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <NavBar />

      <Outlet />

      <Footer />
    </div>
  );
}