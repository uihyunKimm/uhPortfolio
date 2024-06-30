import port01 from "../assets/img/port01.png";
import port02 from "../assets/img/port02.png";
import port03 from "../assets/img/port03.png";
import port04 from "../assets/img/port04.png";

export const headerNav = [
    {
        title: "intro",
        url: "#intro"
    },
    {
        title: "skill",
        url: "#skill"
    },
    {
        title: "site",
        url: "#site"
    },
    {
        title: "portfolio",
        url: "#port"
    },
    {
        title: "contact",
        url: "#contact"
    }
];

export const introText = {
    title: "frontend developer",
    desc: ["탄탄한 코드 위에 감각적인 인터페이스를 그리는 김의현입니다.", "직관적인 UI와 기억에 남는 UX를 개발하려고 노력합니다.", "도메인 지식을 바탕으로 개발의 범위를 늘려나가고 있습니다."]
}

export const skillText = [
    {
        title: "꿈을 설계하고 디자인하다.",
        desc: "나는 공간을 만드는 것을 좋아한다. 어려을 때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다. 단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 나만의 공간을 마음것 만들 수 있다는 건 코딩에 엄청난 매력인거 같다. 그 한구석에 나만의 꿈을 설계하고, 개발을 하며 앞으로도 살고 싶다."
    },
    {
        title: "열심히 할수록 기회는 따른다.",
        desc: "운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다."
    },
    {
        title: "나에게 정직하다.",
        desc: "정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다."
    }
]

export const siteText = [
    {
        text: ["make", "site compliant with", "webstandard"],
        title: "비트를 이용한 사이트 제작",
        code: "https://github.com/webstoryboy/port2023-vite",
        view: "https://port2023-vite.netlify.app",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, CSS Variable, Vite",
        ],
    },
    {
        text: ["make", "site compliant with", "react.js"],
        title: "리액트를 이용한 사이트 제작",
        code: "https://github.com/webstoryboy/port2023-react",
        view: "https://port2023-react.netlify.app",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, CSS Variable, react",
        ],
    },
    {
        text: ["make", "site compliant with", "vue.js"],
        title: "뷰를 이용한 사이트 제작",
        code: "https://github.com/webstoryboy/port2023-vue",
        view: "https://port2023-vue.netlify.app",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, Scss Variable, vue",
        ],
    },
    {
        text: ["make", "site compliant with", "next.js"],
        title: "넥스트를 이용한 사이트 제작",
        code: "https://github.com/webstoryboy/port2023-next",
        view: "https://port2023-next.netlify.app",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, Scss Variable, next.js",
        ],
    },
];

export const portText = [
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
        num: "02",
        subtitle: "데이터 시각화",
        title: "따릉이 Dashboard",
        desc: "서울 공공시의 오픈 API 중 자전거 사용 통계에 대한 데이터를 rechart.js 라이브러리를 사용해서 도식화 한 프로젝트. 기존 따릉이 웹 사이트의 일부 페이지를 리뉴얼 하고 API 응답으로 받은 데이터 월/일별 통계를 차트화 했다. ",
        img: port02,
        code: "https://github.com/seolhee313/PORTFOLIO-REACT",
        view: "https://dashboard-v2-coral.vercel.app/",
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

export const contactText = [
    {
        link: "https://open.kakao.com/o/gM7YLzwf",
        title: "KAKAO :dmlxld",
    },
    {
        link: "mailto:dmlxld@gmail.com",
        title: "mail : dmlxld@gmail.com",
    },
];

export const footerText = [
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
