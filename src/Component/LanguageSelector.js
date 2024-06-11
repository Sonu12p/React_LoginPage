import React from 'react';
import './LanguageSelector.css';

const LanguageSelector = ({ language, onChange }) => {
  const languages = {
    en: 'English',
    hi: 'Hindi',
    ta: 'Tamil'  // example of another Indian language
  };

  const handleLanguageChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="language-selector">
      <label><b>Language :</b></label>
      <select value={language} onChange={handleLanguageChange}>
        {Object.keys(languages).map((lang) => (
          <option key={lang} value={lang}>{languages[lang]}</option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
