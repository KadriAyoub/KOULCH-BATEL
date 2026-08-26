import "boxicons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import i18n from "../../../i18n/i18n";
import "./NavBar.css";

export default function NavBar() {
  const { t } = useTranslation();

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
      </ul>

      {/* ================= Icons ================= */}
      <div className="logo-container">

        {/* Search */}
        <box-icon
          className="icone"
          name="search"
        />

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

        {/* ================= User Icon ================= */}
        <box-icon
          className={`icone ${login ? "hide" : "active"}`}
          name="user"
        />

        {/* ================= Login ================= */}
        <div className={`login ${login ? "active" : "hide"}`}>
          <button>Sign In</button>
          <button>Log In</button>
        </div>

      </div>
    </nav>
  );
}