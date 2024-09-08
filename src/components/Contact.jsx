import React from "react";

import { contactText } from "../constants";


const Contact = () => {

    return (
        <section id="contact">
            <div className="contact__inner">
                <h2 className="contact__title">Contact</h2>
                <div className="contact__lines_top" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="contact__text">
                    <div className="inner_text">
                        {contactText.map((contact, key) => (
                            <div key={key}>
                                <a
                                    href={contact.link}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {contact.title}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="contact__lines_bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
            <div className="download">
                설계자료
                <a href="https://drive.google.com/drive/folders/1cLVMKi7KyscPFzDNkqSZIrMXRXfRaflb?usp=drive_link">화면기획안/ 기타 작업물 조회</a>
                <a href="https://drive.google.com/file/d/1eB8LGwF5UBtIS7IZi-sEiCuqxUkVHOSq/view?usp=sharing">~2020 제품디자이너 작업물</a>
            </div>
        </section>
        
    )
};

export default Contact;