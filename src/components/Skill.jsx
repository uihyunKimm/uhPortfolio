import React from "react";
import { skillText } from "../constants";


const Skill = () => {

  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__title">
          intro <em>소개</em>
        </h2>
        <div className="skill__desc">
          <div>
              <h3>특징</h3>
              <p>
              <strong>"다양한 경험을 통해 사고하는 디자인을 합니다."</strong><br/>
              <br/>
              창업지원 프로그램 우승 제조업기업 창업(제품디자인)<br/>
              도시락 쇼핑몰 "macoo" 기획 제작<br/>
              화면기획 및 웹 디자이너로 직무를 전환하여 다양한 프로젝트의 PM으로 3년간 근무<br/>
              <em>책임감</em>이 강해 <em>일정관리</em>를 확실히 하며 <em>목표달성</em>을 위해 일할 줄 압니다.<br/>
              <em>팀장 경험</em>과 <em>PM</em>으로서 타 팀과의 다년간의 프로젝트 진행으로 협업에서 중요한 <em>커뮤니케이션 능력</em>을 길렀습니다.
              </p>
          </div>
          <div>
              <h3>소개</h3>
              <p>
              <br/>
              <strong>“소통으로 예술가가 아닌 수용되는 디자이너 ”</strong><br/>
              <br/>
              제게 <em>부족한 부분을 확실히 인지하고 주저없이 배울 수 있는 것</em>이 저의 강점이라고 생각합니다.
              또한 지원 직무에서 감각만큼이나 <em>중요한 점이 소통이라고 생각</em>해,
              이를 위해 다양한 툴을 공부하고 노력해 비교적 많은 툴을 다룰 수 있게 된 것 같습니다.<br/>
              <em>웹 디자이너로 채용해 주신다면 여러 도메인 지식을 활용하여 효율적인 디자이너가 될 수 있도록 노력하겠습니다.</em><br/>
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;