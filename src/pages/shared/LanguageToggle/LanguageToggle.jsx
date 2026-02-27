import { useTranslation } from "react-i18next";
import { useState } from "react";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("en");

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "bn" : "en";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-500 cursor-pointer"
    >
      {lang === "en" ? "🇧🇩 বাংলা" : "🇬🇧 English"}
    </button>
  );
};

export default LanguageToggle;