import React from "react";
import { skillText } from "../constants";


const Skill = () => {

  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__title">
          Challenge <em>나의 도전</em>
        </h2>
        <div className="skill__desc">
          <div>
              <span>1.</span>
              <h3>특징</h3>
              <p>
              · <em>사용자 중심</em>적인 사고로 개발합니다.<br/>
              · 최근엔 <em>성능 개선</em>과 <em>최적화</em>에 관심이 많습니다.<br/>
              · <em>책임감</em>이 강하고 <em>성실</em>하기 때문에 밤 새워 작업하는 것을 잘합니다.<br/>
              · 팀 프로젝트와 2년간의 서비스직 경험으로 협업에서 중요한 <em>커뮤니케이션 능력</em>을 길렀습니다.
              </p>
          </div>
          <div>
              <span>2.</span>
              <h3>소개 글</h3>
              <p>
              <br/>
              <em>“사용자와 기업은 좋은 UX에 마음을 움직인다”</em><br/>
              <br/>
              저는 개발자이면서 사용자이기도 합니다. 다양한 웹 서비스를 사용할 때 사용자의 관점에서 UI/UX를 평가하며,
              이 평가는 이후 서비스 사용을 유지할 것인가에 대한 기준이 됩니다.
              프론트엔드 개발자는 사용자에게 긍정적인 UX를 제공하기 위해 좋은 UI뿐만 아니라 에러 핸들링이나
              성능 최적화와 같은 보이지 않는 것에도 노력을 기울여야 합니다. 저는 양측면을 고민하고 결과물로 도출하는 과정이 즐겁습니다.
              사용자에게 좋은 UX를 제공하기 위한 기능과 서비스들을 제작하면서 긍정적이고 의미있는 상호작용을 만들어내고 싶습니다.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;