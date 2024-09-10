import React from "react";
import { designText } from "../constants";


const Site = () => {
    
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title">UX/UI Design <em>기획/ 디자인 작업물</em></h2>
                <div className="site__wrap">
                    {designText.map((design, key) => (
                        <article className={`site__item s${key+1}`} key={key}>
                            <span className="num">{key+1}.</span>
                            <img src={design.img}></img>
                            <div className="right">
                                <div className="text">
                                    <div>{design.text[0]}</div>
                                    <div>{design.text[1]}</div>
                                    <div>{design.text[2]}</div>
                                </div>
                                <h3 className="title">
                                    {design.title}
                                </h3>
                                <h4 className="desc">
                                    {design.desc}
                                </h4>
                                <br/>
                                <div className="btn">
                                    <a href={design.design}>design</a>&nbsp;
                                    {design.view === "" ? "":<a href={design.view}>view</a>}
                                    {design.pdf === "" ? "":<a href={design.pdf}>pdf</a>}
                                    {design.prop === "" ? "":<a href={design.prop}>prop</a>}
                                </div>
                            </div>
                            <div className="info">
                                <span>{design.info[0]}</span>
                                <span>{design.info[1]}</span>
                                <span>{design.info[2]}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Site;