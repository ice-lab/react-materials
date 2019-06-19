import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/" className="logo-text">
        LOGO
      </Link>
    </div>
  );
}
