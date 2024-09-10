import port01 from "../assets/img/port01.png";
import port02 from "../assets/img/port02.png";
import port03 from "../assets/img/port03.png";
import port04 from "../assets/img/port04.png";
import port05 from "../assets/img/port05.png";
import port06 from "../assets/img/port06.png";
import site001 from "../assets/img/site001.png";
import site00 from "../assets/img/site00.png";
import site01 from "../assets/img/site01.png";
import site02 from "../assets/img/site02.png";
import site03 from "../assets/img/site03.png";
import site04 from "../assets/img/site04.png";
import site05 from "../assets/img/site05.png";
import site06 from "../assets/img/site06.png";

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
    desc: ["UX/UI 디자이너 경력 3년","근거 있는 UX/UI를 설계하는 김의현입니다.", "큰 거 있는 UI와 임팩트 있는 UX를 위해 끝없이 노력하겠습니다.", "UX디자인의 방법론에 대해 계속 배우고 적용해보며 범위를 넓혀나가고 있습니다."]
}

export const designText = [
    {
        text: ["Research", "Wiki"],
        title: "논문인용 및 검사문항 자체 개발 목적 웹사이트",
        desc: "일반적인 논문 검색과 스크랩 기능을 포함해 웹 사이트에서 직접 검사 문항 구성하고 출시심사를 제안 할 수 있도록해 개발루트 확장예상",
        design: "https://xd.adobe.com/view/c7a185e6-bef5-4e46-ad8f-4a42063132a1-92f2/",
        prop: "",
        pdf: "https://drive.google.com/file/d/1mj1HpLlqelacnVswbC-t4NKF8ZOBtjrh/view?usp=sharing",
        view: "",
        img: site001,
        info: [
            "화면 기획/ 웹디자인",
            "작업 : 4주",
            "활용 프로그램 : powerpoint, XD, HTML5/CSS3",
        ],
    },
    {
        text: ["child brain test", "program"],
        title: "아동기억능력 검사 프로그램",
        desc: "앱 환경으로 기획 및 디자인이 되었고, 실시부터 설정 페이지까지 터치환경에 대해 고민하며 디자인을 진행할 수 있었다.",
        design: "https://xd.adobe.com/view/058a7220-7cf9-49b9-afd1-f5c8538d71d5-50d9/",
        prop: "",
        pdf: "https://drive.google.com/file/d/1V5dJJ0NDfW1vD-ZGppNKmg6y7LIJ9Ire/view?usp=sharing",
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
        desc: "희망자들의 신청을 수락해 예약을 확정하고 대상 외 자격자들의 신청 순위를 낮추는 등 관리자 페이지에서의 기능을 많이 고민하며 기획 및 디자인했다.",
        design: "https://xd.adobe.com/view/cda55327-7555-413c-a8bf-9d557b477a64-98f6/",
        prop: "",
        pdf: "https://drive.google.com/file/d/1C35Jb-mbNt923I4ERh-UdyI149AXhTj6/view?usp=sharing",
        view: "https://standpro.kr/",
        img: site03,
        info: [
            "화면기획/ 웹디자인",
            "작업 : 3달",
            "활용 프로그램 : powerpoint, XD, HTML5/CSS3",
        ],
    },
    /* {
        text: ["chatbot Solution Development", "admin/user"],
        title: "챗봇 관리자/사용자 환경 제작",
        desc: "관리자 환경과 사용자 환경을 모두 고려해 제작했다. 타사와의 협업을 통해 소통하는 과정에서 부분적인 화면구성을 전달할 기회가 많았는데, 화면기획서 외에 관리자와 챗봇 파트만 디자인했다.",
        design: "https://xd.adobe.com/view/2d7bc443-e1f3-4ec3-a048-5d4e037a89c3-7828/grid",
        view: "",
        img: site05,
        info: [
            "화면기획/ 웹디자인",
            "작업 : 1달",
            "활용 프로그램 : powerpoint, XD, HTML5/CSS3",
        ],
    }, */
    {
        text: ["mobile", "system development"],
        title: "모바일 검사환경 개선",
        desc: "웹 표준화 버전으로 모바일 검사를 가로형태로 화면을 돌려 진행하던 이전에서 모바일, 터치 형태의 화면을 전체 구성해 템플릿 확립함.",
        design: "https://xd.adobe.com/view/ebaabb2d-2e23-4a82-a8e4-34bfd92f03c3-bef9/",
        prop: "",
        pdf: "https://drive.google.com/file/d/1003vzhTRDz2oBjNLzfpuqG7YrygHu0TS/view?usp=sharing",
        view: "",
        img: site04,
        info: [
            "화면기획/ 웹디자인",
            "작업 : 4달",
            "활용 프로그램 : powerpoint, XD, HTML5/CSS3",
        ],
    },
    /* {
        text: ["tablet", "system development"],
        title: "태블릿 검사환경 구현",
        desc: "웹/터치 환경 혼용 가능성이 있는 환경에 대한 템플릿 구축. 태블릿 환경에서 손가락에 가리지 않을 수 있도록 직접 테스트하며 환경을 개선해나감.",
        design: "https://xd.adobe.com/view/4e532847-2f31-49ec-9dbe-9e7d6ec9a03d-1b00/",
        view: "",
        img: site01,
        info: [
            "화면기획/ 웹디자인",
            "작업 : 4달",
            "활용 프로그램 : powerpoint, XD, HTML5/CSS3",
        ],
    },
    {
        text: ["B2C", "website"],
        title: "소비자 친화적 웹사이트",
        desc: "반응형 화면을 고려한 디자인으로 메인과 판매 페이지 두 가지 주요 사항을 중점으로 디자인 했다.",
        design: "https://www.figma.com/design/6KvL80wqXs522G9eoL74GU/B2C_web?node-id=0-1&t=3RJ0eFLLm7I4aDYh-1",
        view: "",
        img: site00,
        info: [
            "화면기획/ 웹디자인",
            "작업 : 1주",
            "활용 프로그램 : powerpoint, XD, HTML5/CSS3",
        ],
    }, */
    {
        text: ["macoo", "B2B2C E-commerce"],
        title: "macoo point랜덤지급 도시락 쇼핑몰",
        desc: "오픈마켓(O2O) + 소셜커머스 + B2C 장점을 합친 B2B2C E-commerce 컨셉. 창업 초기에 작업해, 초기 실력을 확인할 수 있으며 포인트 차등 환급 시스템을 구현",
        design: "https://xd.adobe.com/view/1c8d2237-cf32-44b1-b78e-97d71b13616a-49de/",
        prop: "https://drive.google.com/file/d/1HRaLM-zjezHIZ5yuUFZMG6PCWWdZqQgi/view?usp=drive_link",
        view:"",
        pdf: "https://drive.google.com/file/d/1tnam5_sG7whtt-URhqNsPMDb-LIqVT9H/view?usp=sharing",
        img: site06,
        info: [
            "화면기획/ 웹디자인",
            "작업 : 3달",
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
        code: "https://hpe2.github.io/HOT_BODY/",
        view: "https://github.com/hpe2/HOT_BODY",
        name: "모임 및 매칭 중심 운동 커뮤니티 | HOT BODY",
    },
    {
        num: "02",
        subtitle: "데이터 시각화",
        title: "따릉이 Dashboard",
        desc: "서울 공공시의 오픈 API 중 자전거 사용 통계에 대한 데이터를 rechart.js 라이브러리를 사용해서 도식화 한 프로젝트. 기존 따릉이 웹 사이트의 일부 페이지를 리뉴얼 하고 API 응답으로 받은 데이터 월/일별 통계를 차트화 했다.",
        img: port02,
        code: "https://dashboard-v2-coral.vercel.app/",
        view: "https://dashboard-v2-coral.vercel.app/",
        name: "DDaLeungE Dashboard",
    },
    {
        num: "03",
        subtitle: "Fullpage 활용",
        title: "서울지역문화행사 알리미",
        desc: "first-repo와 다름없는 웹페이지. 카카오지도 API, 서울 공공시 오픈 API 중 지역문화행사 리스트를 조회할 수 있도록 제작. 또한 fullpage.js 라이브러리를 활용하여 페이지별로 다른 기능과 차별된 화면을 구성했다.",
        img: port03,
        code: "https://kuh-seoullocal.netlify.app/",
        view: "https://github.com/uihyunKimm/SeoulLocalCulture",
        name: "Fullpage_LocalCulture",
    },
    {
        num: "04",
        subtitle: "todoapp",
        title: "Hi! TodoApp",
        desc: "개인으로 진행했던 앱 디자인파일을 코딩으로 직접작성한 첫 번째 프로젝트. 모바일의 특성을 살려 화면 하단에 네비게이션 바를 추가해 바로 기능을 이용할 수 있도록 구조했다. ejs파일 형식을 이용하여 작성했기 때문에 code로만 확인이 가능하다.",
        img: port04,
        code: "",
        view: "https://github.com/uihyunKimm/todoapp",
        name: "Hi 앱",
    },
    {
        num: "06",
        subtitle: "푸르다플라워",
        title: "화환 발주관리 시스템",
        desc: "디자인 외주를 받은 발주관리 시스템을 보고 단순화하여 클론 코딩을 진행했다. bootstrap 외 다양한 라이브러리를 경험해보고 공부하는데 도움이 됨",
        img: port06,
        code: "https://furdaflower.netlify.app/intra.html/",
        view: "https://furdaflower.netlify.app/intra.html/",
        name: "아동검사",
    },
    /* {
        num: "05",
        subtitle: "아동검사",
        title: "Kid_Test_Demo",
        desc: "간단한 검사에서 답/오답을 기록하고 결과를 조회할 수 있는 테스트. 응답 데이터를 활용하는 법을 공부하기 위해 제작했다. ",
        img: port05,
        code: "https://kuh-kidtest.netlify.app/",
        view: "https://github.com/uihyunKimm/kidtest",
        name: "아동검사",
    }, */
    
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
        desc: "깃헙에서 퍼블리싱에 대해 공부한 내용을 업로드하고 있습니다.",
        link: "https://github.com/uihyunKimm",
    },
    {
        title: "notion",
        desc: "노션에서 기획에 대한 내용을 정리 중입니다.",
        link: "https://www.notion.so/79716d060c534ed6abf53370aa95e5d7",
    },
    {
        title: "blog",
        desc: "블로그에서 UX 방법론을 공부하고 정리한 내용을 볼 수 있습니다.",
        link: "https://uihkk.tistory.com",
    },
];
