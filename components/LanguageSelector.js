"use client";
import { useEffect } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "bn", label: "বাংলা" },
  { code: "fr", label: "Français" },
];

export default function LanguageSelector() {
  useEffect(() => {
    if (!(window).google?.translate) {
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "ar,bn,fr,en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  const handleChange = (e) => {
    const lang = e.target.value;
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="flex justify-end p-4 bg-white">
      <select
        onChange={handleChange}
        className="rounded border border-gray-300 px-2 py-1 shadow-sm bg-gray-50"
        defaultValue="en"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
      <div id="google_translate_element" style={{ display: "none" }} />
    </div>
  );
} 