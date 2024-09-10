import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import { footerText } from "../constants";

const Footer = () => {
  
    return (
        <footer id="footer" >
          <div className="container">
            <div className="footer__inner">
              <div className="footer__text">
                <span></span>
                <span>© uihyumkimm</span>
              </div>
              <div className="footer__info">
                <div className="left">
                  <div className="title">
                      <span>sign up</span>
                  </div>
                  <p className="desc">회원가입 기능은 막아두었습니다.</p>
                </div>
                <div className="right">
                  <h3>social</h3>
                  <ul className="footer_right">
                    {footerText.map((footer, key) => (
                      <li key={key}>
                          <a href={footer.link}>{footer.title}</a>
                          <div className="em">{footer.desc}</div>
                          <a href={footer.link}><IoIosArrowForward /></a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="footer__right">
                © 2024 kimuihyun<br />
              </div>
            </div>
          </div>
        </footer>
    );
};

  export default Footer;
  