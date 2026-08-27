import "boxicons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import i18n from "../../../i18n/i18n";
import { useThemeStore } from "../../../store/useThemeStore";
import { useAuthStore } from "../../../store/useAuthStore";
import "./NavBar.css";

export default function NavBar() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useThemeStore();
  const { user, isAuthenticated, logout } = useAuthStore();

  const [login, setLogin] = useState(true);
  const [showLanguage, setShowLanguage] = useState(false);

  const [language, setLanguage] = useState(i18n.language || "en");

  const changeLanguage = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);

    localStorage.setItem("language", selectedLanguage);

    setLanguage(selectedLanguage);
    setShowLanguage(false);
  };

  return (
    <nav className="navBar-container">

      {/* ================= Logo ================= */}
      <Link to="/" className="navbar-logo">
        {t("nav.logo")}
      </Link>

      {/* ================= Navigation ================= */}
      <ul>
        <li>
          <Link to="/">
            {t("nav.home")}
          </Link>
        </li>

        <li>
          <a href="#search-bar">
            {t("nav.products")}
          </a>
        </li>

        <li>
          <a href="#about">
            {t("nav.about")}
          </a>
        </li>

        <li>
          <Link to="/contact">
            {t("nav.contact")}
          </Link>
        </li>

        {user?.role === "admin" && (
          <li>
            <Link to="/admin" style={{ fontWeight: "700", color: "var(--primary-color)" }}>
              Admin
            </Link>
          </li>
        )}
      </ul>

      {/* ================= Icons ================= */}
      <div className="logo-container">

        {/* Search */}
        <box-icon
          className="icone"
          name="search"
        />

        {/* ================= Theme Toggle ================= */}
        <div className="theme-toggle" onClick={toggleTheme} title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}>
          <box-icon
            className="icone"
            name={theme === "light" ? "moon" : "sun"}
          />
        </div>

        {/* ================= Language ================= */}
        <div className="language">

          <box-icon
            className="icone"
            name="globe"
            onClick={() => setShowLanguage(!showLanguage)}
          />

          {showLanguage && (
            <div className="language-buttons">

              <button
                className={language === "en" ? "active-language" : ""}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>

              <button
                className={language === "fr" ? "active-language" : ""}
                onClick={() => changeLanguage("fr")}
              >
                FR
              </button>

              <button
                className={language === "ar" ? "active-language" : ""}
                onClick={() => changeLanguage("ar")}
              >
                AR
              </button>

            </div>
          )}

        </div>

        {/* ================= User Account Section ================= */}
        {isAuthenticated ? (
          <div className="login active" style={{ gap: "8px" }}>
            <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-primary)" }}>
              {user.name}
            </span>
            <button onClick={logout} style={{ backgroundColor: "#ef4444", color: "white" }}>
              Log Out
            </button>
          </div>
        ) : (
          <div className="login active" style={{ display: "flex", gap: "8px" }}>
            <Link to="/login">
              <button>Log In</button>
            </Link>
          </div>
        )}

      </div>
    </nav>
  );
}