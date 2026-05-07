import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";

export const Projects = () => {
  const projects = [
    { title: "Project 1", description: "Cybersecurity & Penetration Testing", imgUrl: projImg1 },
    { title: "Project 2", description: "Cybersecurity & Penetration Testing", imgUrl: projImg2 },
    { title: "Project 3", description: "Cybersecurity & Penetration Testing", imgUrl: projImg3 },
    { title: "Project 4", description: "Cybersecurity & Penetration Testing", imgUrl: projImg4 },
    { title: "Project 5", description: "Cybersecurity & Penetration Testing", imgUrl: projImg5 },
    { title: "Project 6", description: "Cybersecurity & Penetration Testing", imgUrl: projImg6 },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are some of my recent projects</p>

                  <Tab.Container defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="justify-content-center mb-5"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">All</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <Col key={index} sm={6} md={4}>
                              <ProjectCard {...project} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
