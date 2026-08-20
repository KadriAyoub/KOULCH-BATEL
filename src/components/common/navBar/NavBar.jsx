import { useState } from "react";
import "./NavBar.css";
import "boxicons";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n/i18n";
import { Link } from "react-router"
export default function NavBar() {
  const { t } = useTranslation();

  const [login, setLogin] = useState(true);
  const [showLanguage, setShowLanguage] = useState(false);

  const [language, setLanguage] = useState(i18n.language || "en");

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;

    i18n.changeLanguage(selectedLanguage);

    localStorage.setItem("language", selectedLanguage);

    setLanguage(selectedLanguage);

    setShowLanguage(false);
  };

  return (
    <nav className="navBar-container">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        {t("nav.logo")}
      </Link>

      {/* Navigation */}
      <ul>
        <li>
          <a href="#">{t("nav.home")}</a>
        </li>

        <li>
          <a href="#search-bar">{t("nav.products")}</a>
        </li>

        <li>
          <a href="#">{t("nav.about")}</a>
        </li>

        <li>
          <a href="#">{t("nav.contact")}</a>
        </li>
      </ul>

      {/* Icons */}
      <div className="logo-container">
        {/* Search */}
        <box-icon className="icone" name="search" />

        {/* Language */}
        <div className="language">
          <box-icon
            className="icone"
            name="globe"
            onClick={() => setShowLanguage(!showLanguage)}
          />

          {showLanguage && (
            <select
              className="language-select"
              value={language}
              onChange={changeLanguage}
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="ar">العربية</option>
            </select>
          )}
        </div>

        {/* User */}
        <box-icon
          className={`icone ${login ? "hide" : "active"}`}
          name="user"
        />

        {/* Login */}
        <div className={`login ${login ? "active" : "hide"}`}>
          <button>Sign In</button>
          <button>Log In</button>
        </div>
      </div>
    </nav>
  );
}
