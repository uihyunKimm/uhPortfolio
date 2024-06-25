import React from "react";
import port01 from "../assets/img/port01.png";
import port02 from "../assets/img/port02.png";
import port03 from "../assets/img/port03.png";
import port04 from "../assets/img/port04.png";

const Port = () => {
    const portText = [
        {
            num: "01",
            subtitle: "모임 및 매칭 중심 운동 커뮤니티",
            title: "HOT BODY",
            desc: "운동이라는 구체적인 분야에 대한 커뮤니티가 활성화 되어있지 않다. HOT BODY 운동 커뮤니티를 통해, 커뮤니티 이외에 PT 트레이너와 모임 주선을 통해 함께하는 운동의 사회적 가치를 널리 알리겠다는 취지로 개발한 웹 사이트이다.",
            img: port01,
            code: "https://github.com/kimsangjunv1/-React-Portfolio",
            view: "https://hot-body.vercel.app",
            name: "모임 및 매칭 중심 운동 커뮤니티 | HOT BODY",
        },
        {
            num: "01",
            subtitle: "어워드에도 올라간 포트폴리오",
            title: "HOT BODY",
            desc: "라마 디자인을 통해 자신의 스킬을 가장 멋지게 표현한 포트폴리오입니다. 가로 모드와 세로 모드는 매우 인상적이며 특히 리액트와 비트를 이용하여 제작한 것은 더욱 놀랍습니다. 이 사이트는 awwwards.com에도 인정받아 올라간 포트폴리오입니다. 확실히 그의 뛰어난 디자인 스킬과 기술력이 빛을 발휘한 결과물인 것 같습니다.",
            img: port01,
            code: "https://github.com/kimsangjunv1/-React-Portfolio",
            view: "https://portfoliosj-react.netlify.app",
            name: "김상* 포트폴리오",
        },
        {
            num: "02",
            subtitle: "빛나는 밤에 포트폴리오",
            title: "HOT BODY",
            desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
            img: port02,
            code: "https://github.com/seolhee313/PORTFOLIO-REACT",
            view: "https://portfolio-313.web.app/",
            name: "천설* 포트폴리오",
        },
        {
            num: "03",
            subtitle: "열정이 넘치는 포트폴리오",
            title: "HOT BODY",
            desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
            img: port03,
            code: "https://github.com/seolhee313/PORTFOLIO-REACT",
            view: "https://portfolio-313.web.app/",
            name: "천설* 포트폴리오",
        },
        {
            num: "04",
            subtitle: "모던한 포트폴리오",
            title: "HOT BODY",
            desc: "블랙 컨셉과 애니메이션이 돋보이는 포트폴리오 사이트입니다. GSAP를 통한 애니메이션과 NEXT.js를 통해 제작된 포트폴리오입니다. pin 애니메이션을 통한 포폴 작업물의 표현 능력이 돋보이는 사이트입니다.",
            img: port04,
            code: "https://github.com/dlgnsrb227/portfolio-next",
            view: "https://hoongportfolio-next.netlify.app/",
            name: "이훈* 포트폴리오",
        },
        
    ];
    return (
        <section id="port">
            <div className="port__inner">
                <div className="port__title">
                    portfolio <em>포폴 작업물</em>
                </div>
                <div className="port__wrap">
                    {portText.map((port, key) => (
                        <article className={`port__item p${key + 1}`} key={key}>
                            <span className="num">{port.num}.</span>
                            <a href={port.code} target="_blank" className="img" rel="noreferrer">
                                <img src={port.img} alt={port.name} />
                            </a>
                            <h3 className="subtitle">{port.subtitle}</h3>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">{port.desc}</p>
                            <a href={port.view} target="_blank" className="site" rel="noreferrer">사이트 보기</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Port;