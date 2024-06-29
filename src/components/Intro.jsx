import React from "react";

import about from "../assets/img/about.png";
import { introText } from "../constants";


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
                <div className="intro__text">
                    <div className="text">
                        <div>{introText.desc[0]}</div>
                        <div>{introText.desc[1]}</div>
                        <div>{introText.desc[2]}</div>
                    </div>
                    <div className="img">
                        <img src={about} alt="어바웃" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;