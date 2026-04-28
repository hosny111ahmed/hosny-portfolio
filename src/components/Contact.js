import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/img/contact.png";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState(null);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .send(
        "service_6nloemc",
        "template_xwlz1jb",
        {
          name: `${formDetails.firstName} ${formDetails.lastName}`,
          email: formDetails.email,
          phone: formDetails.phone,
          message: formDetails.message,
        },
        "4qJgTxWqEioBPy4mb"
      )
      .then(
        () => {
          setStatus({ success: true, message: "Message sent successfully ✅" });
          setButtonText("Send");
          setFormDetails(formInitialDetails);
        },
        () => {
          setStatus({ success: false, message: "Failed to send message ❌" });
          setButtonText("Send");
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">

          {/* IMAGE */}
          <Col md={6} className="text-center">
            <TrackVisibility partialVisibility>
              {({ isVisible }) =>
                isVisible && (
                  <img
                    src={contactImg}
                    alt="Contact"
                    style={{
                      width: "100%",
                      pointerEvents: "none"
                    }}
                  />
                )
              }
            </TrackVisibility>
          </Col>

          {/* FORM */}
          <Col md={6}>
            <h2>Get In Touch</h2>

            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6}>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formDetails.firstName}
                    onChange={(e) =>
                      onFormUpdate("firstName", e.target.value)
                    }
                    required
                  />
                </Col>

                <Col sm={6}>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formDetails.lastName}
                    onChange={(e) =>
                      onFormUpdate("lastName", e.target.value)
                    }
                    required
                  />
                </Col>

                <Col sm={6}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formDetails.email}
                    onChange={(e) =>
                      onFormUpdate("email", e.target.value)
                    }
                    required
                  />
                </Col>

                <Col sm={6}>
                  <input
                    type="tel"
                    placeholder="Phone No."
                    value={formDetails.phone}
                    onChange={(e) =>
                      onFormUpdate("phone", e.target.value)
                    }
                  />
                </Col>

                <Col>
                  <textarea
                    rows="6"
                    placeholder="Message"
                    value={formDetails.message}
                    onChange={(e) =>
                      onFormUpdate("message", e.target.value)
                    }
                    required
                  />
                  <button type="submit">{buttonText}</button>
                </Col>

                {status && (
                  <Col>
                    <p>{status.message}</p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>

        </Row>
      </Container>
    </section>
  );
};