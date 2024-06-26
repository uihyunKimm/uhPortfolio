import React from "react";

const Footer = () => {
  const footerText = [
    {
        title: "github",
        desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
        link: "https://github.com/uihyunKimm",
    },
      {
          title: "notion",
          desc: "노션에 오시면 더 많은 소개글을 볼 수 있습니다.",
          link: "https://www.notion.so/79716d060c534ed6abf53370aa95e5d7",
      },
      {
          title: "blog",
          desc: "블로그에 오시면 더 많은 정보를 볼 수 있습니다.",
          link: "https://uihkk.tistory.com",
      },

  ];
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
  