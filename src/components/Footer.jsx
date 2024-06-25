import React from "react";

const Footer = () => {
  const footerText = [
      {
          title: "youtube",
          desc: "유튜브에 오시면 더 많은 강의를 볼 수 있습니다.",
          link: "https://www.youtube.com/@Webstoryboy",
      },
      {
          title: "github",
          desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
          link: "https://github.com/uihyunKimm",
      },
      {
          title: "blog",
          desc: "블로그에 오시면 더 많은 정보를 볼 수 있습니다.",
          link: "https://uihkk.tistory.com",
      },
      {
          title: "gsap",
          desc: "GSAP에 오시면 더 많은 강의를 볼 수 있습니다.",
          link: "https://www.youtube.com/playlist?list=PL4UVBBIc6giL8-6jvrClimg0cFL-Muqiq",
      },
      {
          title: "react",
          desc: "리액트로 만든 사이트를 같이 만들어 봅니다.",
          link: "https://github.com/webstoryboy/port2023-react",
      }
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
  