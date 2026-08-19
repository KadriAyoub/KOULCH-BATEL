import { useState, useEffect } from "react";
import "./NavBar.css";
import "boxicons";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n/i18n";

export default function NavBar() {
  const { t } = useTranslation();

  const [login, setLogin] = useState(true);

  const [showLanguage, setShowLanguage] = useState(false);

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  // Change language
  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;

    i18n.changeLanguage(selectedLanguage);

    localStorage.setItem("language", selectedLanguage);

    setLanguage(selectedLanguage);

    // Hide select after choosing language
    setShowLanguage(false);
  };

  // RTL / LTR
  useEffect(() => {
    document.documentElement.lang = language;

    document.documentElement.dir =
      language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return (
    <nav className="navBar-container">

      {/* Logo */}
      <h3>{t("nav.logo")}</h3>

      {/* Navigation */}
      <ul>
        <li>
          <a href="#">{t("nav.home")}</a>
        </li>

        <li>
          <a href="#">{t("nav.products")}</a>
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
        <box-icon
          className="icone"
          name="search"
        ></box-icon>

        {/* Language */}
        <div className="language">

          {/* Globe */}
          <box-icon
            className="icone"
            name="globe"
            onClick={() => setShowLanguage(!showLanguage)}
          ></box-icon>

          {/* Language Select */}
          {showLanguage && (
            <select
              className="language-select"
              value={language}
              onChange={changeLanguage}
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          )}

        </div>

        {/* User */}
        <box-icon
          className={`icone ${login ? "hide" : "active"}`}
          name="user"
        ></box-icon>

        {/* Login */}
        <div className={`login ${login ? "active" : "hide"}`}>
          <button>Sign In</button>
          <button>Log In</button>
        </div>

      </div>
    </nav>
  );
}