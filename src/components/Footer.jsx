import React from "react";

import { footerText } from "../constants";

const Footer = () => {
  
    return (
        <footer id="footer" >
          <div className="container">
            <div className="footer__inner">
              <div className="footer__text">
                <span>uihyumkimm</span>
                <span>© webs</span>
              </div>
              <div className="footer__info">
                <div className="left">
                  <div className="title">
                      <span>sign up</span>
                  </div>
                  <p className="desc">회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
                </div>
                <div className="right">
                  <h3>social</h3>
                  <ul className="footer_right">
                    {footerText.map((footer, key) => (
                      <li key={key}>
                          <a href={footer.link}>{footer.title}</a>
                          <em>{footer.desc}</em>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="footer__right">
                © 2024 kimuihyun<br />
                이 사이트는 리액트를 이용하여 제작하였습니다.
              </div>
            </div>
          </div>
        </footer>
    );
};

  export default Footer;
  