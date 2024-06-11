import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import './EmailField.css';

const EmailField = ({ value, onChange }) => {
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const domainRegex = /^[a-zA-Z0-9._%+-]+@(noventiq\.com|corporatedomain\.com)$/;
    const publicProviderRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com)$/;
    if (!domainRegex.test(email) || publicProviderRegex.test(email)) {
      setError('Invalid email address');
    } else {
      setError('');
    }
  };

  const handleChange = (e) => {
    const email = e.target.value;
    onChange(email);
    validateEmail(email);
  };

  return (
    <div className="email-field">
      <label><b>Email :</b></label>
      <div className="input-container">
        <FaEnvelope className="icon" />
        <input type="email" value={value} onChange={handleChange} placeholder="email@address.com" />
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default EmailField;
