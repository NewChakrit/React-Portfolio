import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.facebook.com/new.chakrit/"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-facebook"></i>
      </a>

      <a
        href="https://www.instagram.com/new.chakrit/"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/chakrit-tnasinpaibool-858711242/"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>

      <a
        href="https://github.com/NewChakrit"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
