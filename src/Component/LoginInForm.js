import React, { useState, useEffect } from 'react';
import EmailField from './EmailField';
import PasswordField from './PasswordField';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import './LoginForm.css';

const LoginForm = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const browserLanguage = navigator.language.split('-')[0];
    const supportedLanguages = ['en', 'hi', 'ta'];
    setLanguage(supportedLanguages.includes(browserLanguage) ? browserLanguage : 'en');
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <div className="login-form-container">
      <div className="logo">
        <img src="image23.JPG" alt="Noventiq Logo" />
      </div>
      <form>
        <EmailField value={email} onChange={setEmail} />
        <PasswordField value={password} onChange={setPassword} />
        <LanguageSelector language={language} onChange={setLanguage} />
        <div className="remember-me">
          <input type="checkbox" id="rememberMe" />
          <label >Remember me</label>
        </div>
        
      </form>
      <button type="submit" className="login-button">{t('login')}</button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <footer>
        <p>Copyright 2024 Noventiq | Powered by Noventiq</p>
      </footer>
    </div>
  );
};

export default LoginForm;
