import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                
A cybersecurity student with hands-on experience in penetration testing,
network security fundamentals, and system hardening.

                <br />
               
Focused on learning how to identify vulnerabilities and protect systems
against real-world cyber threats.

              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Networking Fundamentals" />
                  <h5>Networking Fundamentals</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Penetration Testing Basics" />
                  <h5>Penetration Testing Basics</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="Linux & System Administration" />
                  <h5>Linux & System Administration</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};