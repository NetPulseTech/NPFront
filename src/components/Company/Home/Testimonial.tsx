import { ImagePath } from "../../../utils/constant";
import { Col, Container, Row } from "reactstrap";
import FeatureContent from "./FeatureContent";
import Animation from "./Animation";

const Testimonial: React.FC = () => {
  return (
    <section className="testimonial-section section-pb-space section-pt-space single-feature-section overflow-hidden">
      <Container>
        <Row>
          <Col xs="12">
            <div className="title-sec">
              <h4>testimonial</h4>
              <h3>see what our client says</h3>
            </div>
          </Col>
        </Row>
        <Row className="testimonial-space">
          <Col lg="6" className="order-lg-2">
            <div className="testimonial-vector">
              <div className="round">
                <span />
                <img src={`${ImagePath}/company-landing/logo.png`} className="img-fluid blur-up lazyloaded" alt=""/>
              </div>
              <div className="users-sec">
                <div className="user-box wow zoomIn">
                  <div className="content">
                    <h6>best UI Design</h6>
                  </div>
                  <div className="img">
                    <img src={`${ImagePath}/user-sm/1.jpg`} className="img-fluid blur-up lazyloaded" alt=""/>
                  </div>
                </div>
                <div className="user-box user2 wow zoomIn">
                  <div className="img">
                    <img src={`${ImagePath}/user-sm/2.jpg`} className="img-fluid blur-up lazyloaded" alt=""/>
                  </div>
                  <div className="content bottom">
                    <h6>cool app</h6>
                  </div>
                </div>
                <div className="user-box user3 wow zoomIn">
                  <div className="img">
                    <img src={`${ImagePath}/user-sm/3.jpg`} className="img-fluid blur-up lazyloaded" alt=""/>
                  </div>
                  <div className="content bottom">
                    <h6>love to use</h6>
                  </div>
                </div>
                <div className="user-box user4 wow zoomIn">
                  <div className="content">
                    <h6>best app</h6>
                  </div>
                  <div className="img">
                    <img src={`${ImagePath}/user-sm/4.jpg`} className="img-fluid blur-up lazyloaded" alt=""/>
                  </div>
                </div>
                <div className="user-box user5 wow zoomIn">
                  <div className="content">
                    <h6>best app</h6>
                  </div>
                  <div className="img">
                    <img src={`${ImagePath}/user-sm/5.jpg`} className="img-flui" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <FeatureContent />
        </Row>
      </Container>
      <Animation />
    </section>
  );
};

export default Testimonial;
