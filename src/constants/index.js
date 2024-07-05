import port01 from "../assets/img/port01.png";
import port02 from "../assets/img/port02.png";
import port03 from "../assets/img/port03.png";
import port04 from "../assets/img/port04.png";
import port05 from "../assets/img/port05.png";
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

export const designText = [
    {
        text: ["fasoo Fireside", "redesign"],
        title: "파수fasoo Fireside 리디자인",
        design: "https://www.figma.com/design/w6eOshH7fDsgPalFvYJReg/Untitled?node-id=0-1&t=LxlOfafXlScaxFk6-1",
        view: "",
        img: "",
        info: [
            "화면기획/ 웹디자인",
            "작업 : 1주",
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
            "작업 : 3달",
            "활용 프로그램 : powerpoint, XD, HTML5/CSS3",
        ],
    },
    {
        text: ["make", "site compliant with", "next.js"],
        title: "모바일 검사환경 구현",
        design: "https://github.com/webstoryboy/port2023-next",
        view: "",
        img: "",
        info: [
            "화면기획/ 웹디자인",
            "작업 : 4달",
            "활용 프로그램 : powerpoint, XD, HTML5/CSS3",
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
        desc: "서울 공공시의 오픈 API 중 자전거 사용 통계에 대한 데이터를 rechart.js 라이브러리를 사용해서 도식화 한 프로젝트. 기존 따릉이 웹 사이트의 일부 페이지를 리뉴얼 하고 API 응답으로 받은 데이터 월/일별 통계를 차트화 했다.",
        img: port02,
        code: "https://github.com/seolhee313/PORTFOLIO-REACT",
        view: "https://dashboard-v2-coral.vercel.app/",
        name: "DDaLeungE Dashboard",
    },
    {
        num: "03",
        subtitle: "Fullpage 활용",
        title: "서울지역문화행사 알리미",
        desc: "first-repo와 다름없는 웹페이지. 카카오지도 API, 서울 공공시 오픈 API 중 지역문화행사 리스트를 조회할 수 있도록 제작. 또한 fullpage.js 라이브러리를 활용하여 페이지별로 다른 기능과 차별된 화면을 구성했다.",
        img: port03,
        code: "https://github.com/uihyunKimm/SeoulLocalCulture",
        view: "https://kuh-seoullocal.netlify.app/",
        name: "Fullpage_LocalCulture",
    },
    {
        num: "04",
        subtitle: "todoapp",
        title: "Hi! TodoApp",
        desc: "개인으로 진행했던 앱 디자인파일을 코딩으로 직접작성한 첫 번째 프로젝트. 모바일의 특성을 살려 화면 하단에 네비게이션 바를 추가해 바로 기능을 이용할 수 있도록 구조했다. ejs파일 형식을 이용하여 작성했기 때문에 code로만 확인이 가능하다.",
        img: port04,
        code: "https://github.com/uihyunKimm/todoapp",
        name: "Hi 앱",
    },
    {
        num: "05",
        subtitle: "아동검사",
        title: "Kid_Test_Demo",
        desc: "간단한 검사에서 답/오답을 기록하고 결과를 조회할 수 있는 테스트. 응답 데이터를 활용하는 법을 공부하기 위해 제작했다. ",
        img: port05,
        code: "https://github.com/uihyunKimm/kidtest",
        view: "https://kuh-kidtest.netlify.app/",
        name: "아동검사",
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
        desc: "깃헙에서 더 많은 소스를 볼 수 있습니다.",
        link: "https://github.com/uihyunKimm",
    },
    {
        title: "notion",
        desc: "노션에서 더 많은 소개글을 볼 수 있습니다.",
        link: "https://www.notion.so/79716d060c534ed6abf53370aa95e5d7",
    },
    {
        title: "blog",
        desc: "블로그에서 공부한 내용을 볼 수 있습니다.",
        link: "https://uihkk.tistory.com",
    },
];
