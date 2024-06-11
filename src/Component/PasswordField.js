import React, { useState } from 'react';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import './PasswordField.css';

const PasswordField = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-field">
      <label><b>Password :</b></label>
      <div className="input-container">
        <FaLock className="icon" />
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Password"
        />
        <button type="button" className="toggle-button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <a href="#" className="forgot-password">Forgot password?</a>
    </div>
  );
};

export default PasswordField;
