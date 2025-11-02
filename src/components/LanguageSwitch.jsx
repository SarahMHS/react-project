import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import style from "../assets/styles/translation.module.scss"

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button className={`${style.button} btn`} onClick={toggleLanguage} title={`${language === "fr" ? "Traduire en anglais" : "Translate into French"}`}>
      {language === "fr" ? "FR" : "EN"}
    </button>
  );
};

export default LanguageSwitch;
