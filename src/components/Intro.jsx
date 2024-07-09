import React from "react";

import about from "../assets/img/about.png";
import { introText } from "../constants";

/* $(document).ready(function() {
    // 클래스가 "scroll_on"인 모든 요소를 선택합니다.
    const $counters = $(".scroll_on");
    
    // 노출 비율(%)과 애니메이션 반복 여부(true/false)를 설정합니다.
    const exposurePercentage = 100; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
    const loop = true; // 애니메이션 반복 여부를 설정합니다. (true로 설정할 경우, 요소가 화면에서 사라질 때 다시 숨겨집니다.)

    // 윈도우의 스크롤 이벤트를 모니터링합니다.
    $(window).on('scroll', function() {
        // 각 "scroll_on" 클래스를 가진 요소에 대해 반복합니다.
        $counters.each(function() {
            const $el = $(this);
    
            // 요소의 위치 정보를 가져옵니다.
            const rect = $el[0].getBoundingClientRect();
            const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
            const contentHeight = rect.bottom - rect.top; // 요소의 높이
            
            // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
            if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                $el.addClass('active');
            }
            // 요소가 화면에서 완전히 사라졌을 때 처리합니다.
            if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
                $el.removeClass('active');
            }
        });
    }).scroll();
}); */
const Intro = () => {
    
    return (
        <section id="intro">
            <div className="intro__inner">
                <div className="flowText" >
                    <div className="flowWrap">KIM UI HYUN. KIM UI HYUN. KIM UI HYUN. </div>
                    <div className="flowWrap">KIM UI HYUN. KIM UI HYUN. KIM UI HYUN. </div>
                    <div className="flowWrap">KIM UI HYUN. KIM UI HYUN. KIM UI HYUN. </div>
                    <div className="flowWrap">KIM UI HYUN. KIM UI HYUN. KIM UI HYUN. </div>
                </div>
                <div className="title_inner">
                    <strong className="title_inner_text">군더더기 없는 인터페이스를 추구하는</strong>
                    <svg className="title_inner_logo" xmlns="http://www.w3.org/2000/svg" width="1312.332" height="214.12" viewBox="0 0 1312.332 214.12">
                        <g id="그룹_10837" data-name="그룹 10837" transform="translate(-1523.055 668.41)">
                            <path id="패스_35821" data-name="패스 35821" d="M99.375,3.71c47.965,0,75.79-26.765,75.79-91.955V-196.1h-37.63V-84.8c0,41.075-14.84,54.59-38.16,54.59s-37.1-13.515-37.1-54.59V-196.1H23.055V-88.245C23.055-23.055,51.675,3.71,99.375,3.71ZM209.085-196.1V0H248.3V-196.1Z" transform="translate(1500 -458)" fill="#fff"/>
                            <path id="패스_35822" data-name="패스 35822" d="M24.115-196.1V0h39.22V-84.8h74.2V0H176.49V-196.1H137.535v77.115h-74.2V-196.1ZM244.6-71.815V0h39.22V-71.815L342.91-196.1H302.1l-19.61,47.7c-5.565,14.84-11.395,28.355-17.49,43.46h-1.06c-6.1-15.1-11.4-28.62-16.96-43.46l-19.61-47.7h-41.6ZM427.445,3.71c47.965,0,75.79-26.765,75.79-91.955V-196.1h-37.63V-84.8c0,41.075-14.84,54.59-38.16,54.59s-37.1-13.515-37.1-54.59V-196.1h-39.22V-88.245C351.125-23.055,379.745,3.71,427.445,3.71ZM537.155-196.1V0h37.1V-78.705c0-22.525-2.915-47.17-4.77-68.37h1.325l19.875,42.135L647.4,0h39.75V-196.1h-37.1v78.175c0,22.26,2.915,48.23,5.035,68.635h-1.325l-19.61-42.4L577.17-196.1Z" transform="translate(1759 -458)" fill="#fff" opacity="0.5"/>
                            <path id="패스_35823" data-name="패스 35823" d="M27.825-210.41V0h9.54V-210.41Zm46.9,35.51h9.54v-10.6H74.73ZM84-139.655h-9.54V0H84Zm46.11-70.755h-9.54V0h9.54V-38.425l32.86-38.955L211.205,0H221.54l-53-84.535,45.05-55.12H202.46L130.645-51.41h-.53ZM288.32,3.445c20.4,0,32.6-6.89,43.2-13.25l-4.24-8.215C316.675-10.335,304.75-5.3,288.85-5.3c-32.86,0-54.325-27.03-54.325-63.865h102.29c.8-3.445.53-6.625.53-9.54,0-41.605-19.61-64.4-52.735-64.4-31.005,0-60.155,28.355-60.155,73.67C224.455-23.85,253.075,3.445,288.32,3.445ZM328.07-77.91H234.525c2.915-35.245,25.44-56.445,50.085-56.445C311.11-134.355,328.07-116.335,328.07-77.91Z" transform="translate(2498 -458)" fill="#fff" opacity="0.7"/>
                        </g>
                    </svg>
                </div>
                <div className="intro__text scroll_on type_bottom">
                    <div className="img">
                        <img src={about} alt="어바웃" />
                    </div>
                    <div className="title_text_2">
                        지원직무
                        <div className="text">
                            <div className="str">웹 디자이너</div>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>

                    <div className="title_text">
                        About
                        <div className="text">
                            <div className="str">{introText.desc[0]}</div>
                            <div>{introText.desc[1]}</div>
                            <div>{introText.desc[2]}</div>
                            <div>{introText.desc[3]}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;