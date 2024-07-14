import port01 from "../assets/img/port01.png";
import port02 from "../assets/img/port02.png";
import port03 from "../assets/img/port03.png";
import port04 from "../assets/img/port04.png";
import port05 from "../assets/img/port05.png";
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
    desc: ["화면기획자 경력 3년","탄탄한 기획 위에 감각적인 인터페이스를 그리는 김의현입니다.", "직관적인 UI와 기억에 남는 UX를 기획하고, 개발하려고 노력합니다.", "도메인 지식을 바탕으로 개발의 범위를 늘려나가고 있습니다."]
}

export const designText = [
    {
        text: ["B2C", "website"],
        title: "소비자 친화적 웹사이트",
        desc: "여러 사용환경을 고려한 그리드 화면 구성 자격자들의 신청 순위를 낮추는 등 관리자 페이지에서의 기능을 많이 고민하며 기획 및 디자인했다.",
        design: "https://www.figma.com/design/6KvL80wqXs522G9eoL74GU/B2C_web?node-id=0-1&t=3RJ0eFLLm7I4aDYh-1",
        view: "",
        img: site00,
        info: [
            "화면기획/ 웹디자인",
            "작업 : 1주",
            "활용 프로그램 : powerpoint, XD, HTML5/CSS3",
        ],
    },
    {
        text: ["child brain test", "program"],
        title: "아동기억능력 검사 프로그램",
        desc: "앱 환경으로 기획 및 디자인이 되었고, 실시부터 설정 페이지까지 터치환경에 대해 고민하며 디자인을 진행할 수 있었다.",
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
        desc: "희망자들의 신청을 수락해 예약을 확정하고 대상 외 자격자들의 신청 순위를 낮추는 등 관리자 페이지에서의 기능을 많이 고민하며 기획 및 디자인했다.",
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
    },
    {
        text: ["mobile", "system development"],
        title: "모바일 검사환경 구현",
        desc: "웹 표준화 버전으로 모바일 검사를 가로형태로 화면을 돌려 진행하던 이전에서 모바일, 터치 형태의 화면을 전체 구성해 템플릿 확립함.",
        design: "https://xd.adobe.com/view/ebaabb2d-2e23-4a82-a8e4-34bfd92f03c3-bef9/",
        view: "",
        img: site04,
        info: [
            "화면기획/ 웹디자인",
            "작업 : 4달",
            "활용 프로그램 : powerpoint, XD, HTML5/CSS3",
        ],
    },
    {
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
        text: ["macoo", "B2B2C", "E-commerce"],
        title: "macoo point랜덤지급 도시락 쇼핑몰",
        desc: "오픈마켓(O2O) + 소셜커머스 + B2C 장점을 합친 B2B2C E-commerce 컨셉. 학생 착업 초기에 작업해, 작업 초기의 실력을 확인할 수 있으며 포인트 차등 환급 시스템을 구현하느라 개발에 난항을 겪어 개발 기간이 늘어남",
        design: "https://xd.adobe.com/view/1c8d2237-cf32-44b1-b78e-97d71b13616a-49de/",
        view: "https://drive.google.com/file/d/1HRaLM-zjezHIZ5yuUFZMG6PCWWdZqQgi/view?usp=drive_link",
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
        code: "https://hot-body.vercel.app",
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
        num: "05",
        subtitle: "아동검사",
        title: "Kid_Test_Demo",
        desc: "간단한 검사에서 답/오답을 기록하고 결과를 조회할 수 있는 테스트. 응답 데이터를 활용하는 법을 공부하기 위해 제작했다. ",
        img: port05,
        code: "https://kuh-kidtest.netlify.app/",
        view: "https://github.com/uihyunKimm/kidtest",
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
