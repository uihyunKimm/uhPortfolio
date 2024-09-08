import React, { useEffect, useRef } from "react";

import { portText } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Port = () => {
    const horizontalRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const horizontal = horizontalRef.current;
        const sections = sectionsRef.current;
    
        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
            trigger: horizontal,
            start: "top 56px",
            end: () => "+=" + horizontal.offsetWidth,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            },
        });

    return () =>{
        scrollTween.kill();
        };
    }, []);

    return (
        <section id="port" ref={horizontalRef}>
            <div className="port__inner">
                <div className="port__title">
                    publishing <em>퍼블리싱 작업물</em> <small>*이미지를 클릭하시면 사이트를 볼 수 있습니다.</small>
                </div>
                <div className="port__wrap">
                    {portText.map((port, key) => (
                        <article className={`port__item p${key + 1}`}
                            key={key}
                            ref={(el) => (sectionsRef.current[key] = el)
                        }>
                            <span className="num">{port.num}.</span>
                            <a href={port.code} target="_blank" className="img" rel="noreferrer">
                                <img src={port.img} alt={port.name} />
                            </a>
                            <h3 className="subtitle">{port.subtitle}</h3>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">{port.desc}</p>
                            <a href={port.view} target="_blank" className="site" rel="noreferrer">코드 보기</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Port;