/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import './Header.css';

export default ({ black }) => {
  const userPicture = 'https://occ-0-1942-1567.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAAFFgUUkQ31RpI8qQH98cRi6W8sLIqiNg9-8AbDIC3T1I4J1ekJXDt3ypRYEBfyWjprkK3nCB2EXU-izg0Ho27hGOzKw.png?r=f08';
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="Netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src={`${userPicture}`} alt="Usuário" />
        </a>
      </div>
    </header>
  );
};
