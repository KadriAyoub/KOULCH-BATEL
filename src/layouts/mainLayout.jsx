import { useEffect } from "react";
import { Outlet } from "react-router";

import Footer from "../components/common/footer/Footer";
import NavBar from "../components/common/navBar/NavBar";
import { useThemeStore } from "../store/useThemeStore";

export default function MainLayout() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="main-layout">
      <NavBar />

      <Outlet />

      <Footer />
    </div>
  );
}