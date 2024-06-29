import React, { useState, useRef } from "react";
import { headerNav } from "../constants";

  const Header = () => {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };
    return (
      <header id="header" role="banner">
        <div className="header__inner">
          <div className="header__logo">
            <a href="/">2024 portfolio<em>화면기획/ 웹디자인 경력 개발자</em></a>
          </div>
          <div className="header__email">
            <a href="mailto:dmlxld@gmail.com" target="_blank">dmlxld@gmail.com</a>
          </div>
          <nav className={`header__nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
            <ul>
              {headerNav.map((nav, key) => (
                <li key={key}>
                  <a href={nav.url}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div 
            className="header__nav__mobile" 
            id="headerToggle" 
            aria-controls="primary-menu" 
            aria-expanded={show ? "true" : "false"}
            role="button" 
            tabIndex="0"
            onClick={toggleMenu}
          >
            <span></span>
          </div>
        </div>
      </header>
    );
};

export default Header;

/* const Header = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };
    return (
      <header id={styles.header} role="banner">
        <div className={styles.container}>
          <div className={styles.contents}>
            <a href="/">로고</a>
            <a href="mailto:dmlxld@gmail.com" target="_blank">dmlxld@gmail.com</a>
            <p><span className={styles.navigation}>2024 <strong>Portfolio</strong></span></p>
          </div>
          <div className={styles.contents_low}>
            <span className={styles.contents_low_low}>화면기획/ 웹디자인 출신 개발자</span>
            <nav className={`${styles.header__nav} ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
              <ul>
                {headerNav.map((nav, key) => (
                  <li key={key}>
                      <a href={nav.url}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div 
              className={styles.header__nav__mobile}
              id="headerToggle" 
              aria-controls="primary-menu" 
              aria-expanded={show ? "true" : "false"}
              role="button" 
              tabindex="0"
              onClick={toggleMenu}
              >
              <span></span>
            </div>
          </div>
        </div>
      </header>
    );
};

export default Header;
 */
