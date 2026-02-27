import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        services: "Services",
        coverage: "Coverage",
        myorder: "My Orders",
        about: "About Us",
        dashboard: "Dashboard",
        driver: "Be a Driver",
        login: "Login",
        signup: "Sign Up",
        whychallok: "Why need Challok ?",
        ourService: "Our Services",
        hire: "Hire Me",
      },
    },
    bn: {
      translation: {
        home: "হোম",
        services: "সার্ভিস",
        coverage: "কভারেজ",
        myorder: "আমার অর্ডার",
        about: "আমাদের সম্পর্কে",
        driver: "ড্রাইভার হও",
        dashboard: "ড্যাশবোর্ড",
        login: "লগ ইন",
        signup: "সাইন আপ",
        whychallok: "কেন চালক প্রয়োজন ?",
        ourService: "আমাদের সেবাসমূহ",
        hire: "হায়ার করুন",
      },
    },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;