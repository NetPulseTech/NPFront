import React from "react";
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaRss, FaTwitter } from "react-icons/fa";
import { CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const SocialIcons = () => {
  return (
    <div className="element-card section-pb-space section-pt-space">
      <Container>
        <Row>
          <Col md="6">
            <CardHeader>
              <h4>Naming a source</h4>
              <span> Add a <code className="highlighter-rouge"> &lt;footer class="blockquote-footer"&gt;</code> for identifying the source. Wrap the name of the source work in{" "} <code className="highlighter-rouge">&lt;cite&gt;</code>.</span>
            </CardHeader>
            <CardBody>
              <blockquote className="blockquote">
                <p className="mb-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer pb-0 mt-0">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Col>
          <Col md="6">
            <CardHeader>
              <h4>social icons</h4>
              <span> frienbook have used font awesome 5 icons here, you can also use different icons.
              </span>
            </CardHeader>
            <CardBody>
              <div className="social-section">
                <ul className="d-flex">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="https://myaccount.google.com/">
                      <FaGooglePlusG />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://dashboard.rss.com/auth/sign-in/">
                      <FaRss />
                    </a>
                  </li>
                </ul>
              </div>
            </CardBody>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SocialIcons;
