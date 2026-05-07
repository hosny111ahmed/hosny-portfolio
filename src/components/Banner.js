import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

import headerImg from "../assets/img/header-img.svg";
import cv from "../assets/img/My_CV.pdf";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300);
  const period = 700;

  const toRotate = [
    "Cybersecurity Student",
    "Pentester",
    "Web Designer"
  ];

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>

            <h1>
              Hi! I'm Hosny{" "}
              <span className="txt-rotate">
                <span className="wrap">{text}</span>
              </span>
            </h1>

            <p>
              Cybersecurity student focused on penetration testing,
              vulnerability assessment, and ethical hacking techniques.
            </p>

            <div className="banner-buttons">
              {/* ✅ Let’s Connect */}
              <a href="#contact">
                <button>
                  Let’s Connect <ArrowRightCircle size={25} />
                </button>
              </a>

              {/* Download CV */}
              <a
                href={cv}
                download="Hosny_CV.pdf"
                className="cv-btn"
              >
                Download CV <ArrowRightCircle size={25} />
              </a>
            </div>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
