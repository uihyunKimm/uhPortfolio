import port01 from "../assets/img/port01.png";
import port02 from "../assets/img/port02.png";
import port03 from "../assets/img/port03.png";
import port04 from "../assets/img/port04.png";
import site02 from "../assets/img/site02.png";
import site03 from "../assets/img/site03.png";

export const headerNav = [
    {
        title: "home",
        url: "#intro"
    },
    {
        title: "Intro",
        url: "#skill"
    },
    {
        title: "skill",
        url: "#skills"
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
      title: "특징",
      desc: " 사용자 중심적인 사고로 개발합니다. 최근엔 성능 개선과 최적화에 관심이 많습니다. 책임감이 강하고 성실하기 때문에 밤 새워 작업하는 것을 잘합니다. 팀 프로젝트와 3년 간의 웹 기획직 경험으로 개발 협업에서 중요한 커뮤니케이션 능력을 길렀습니다.",
    },
    {
      title: "소개 글",
      desc: "운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다.",
    },
    {
      title: "나에게 정직하다.",
      desc: "정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다.",
    },
  ];

export const designText = [
    {
        text: ["fasoo Fireside", "redesign"],
        title: "파수fasoo Fireside 리디자인",
        design: "https://www.figma.com/design/w6eOshH7fDsgPalFvYJReg/Untitled?node-id=0-1&t=LxlOfafXlScaxFk6-1",
        view: "",
        img: "",
        info: [
            "화면기획/ 웹디자인",
            "작업 : 3주",
            "활용 프로그램 : powerpoint, XD, HTML5/CSS3",
        ],
    },
    {
        text: ["child brain test", "program"],
        title: "아동기억능력 검사 프로그램",
        design: "https://xd.adobe.com/view/058a7220-7cf9-49b9-afd1-f5c8538d71d5-50d9/",
        view: "",
        img: site02,
        info: [
            "화면기획/ 웹디자인",
            "작업 : 3주",
            "활용 프로그램 : powerpoint, XD, HTML5/CSS3",
        ],
    },
    {
        text: ["Probability Sampling", "website"],
        title: "검사대상 표집 웹사이트",
        design: "https://xd.adobe.com/view/cda55327-7555-413c-a8bf-9d557b477a64-98f6/",
        view: "https://standpro.kr/",
        img: site03,
        info: [
            "화면기획/ 웹디자인",
            "작업 : 3달 2주",
            "활용 프로그램 : powerpoint, XD, HTML5/CSS3",
        ],
    },
    {
        text: ["make", "site compliant with", "next.js"],
        title: "넥스트를 이용한 사이트 제작",
        design: "https://github.com/webstoryboy/port2023-next",
        view: "https://port2023-next.netlify.app",
        img: "",
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
        title: "[팀] HOT BODY",
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
