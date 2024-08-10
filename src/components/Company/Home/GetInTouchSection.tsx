import { ChatNow, Href, ImagePath } from "../../../utils/constant";
import { Col, Container, Row } from "reactstrap";
import Animation from "./Animation";

const GetInTouchSection: React.FC = () => {
  return (
    <section className="section-pb-space section-pt-space single-feature-section overflow-hidden">
      <Container>
        <Row>
          <Col xs="12">
            <div className="title-sec">
              <h4>find new friends</h4>
              <h3>get in touch with friends</h3>
            </div>
          </Col>
          <Col lg="7" className="order-lg-2">
            <div className="vector-section">
              <img src={`${ImagePath}/company-landing/feature-vector/get-in-touch.svg`} className="img-fluid blur-up wow zoomIn lazyloaded" alt=""/>
            </div>
          </Col>
          <Col lg="5" className="col-lg-5 order-lg-1">
            <div className="feature-content wow fadeInLeft" >
              <div>
                <h3 className="title">talk with your loved once</h3>
                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                <a href={Href} className="btn btn-solid btn-md">{ChatNow}</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Animation />
    </section>
  );
};

export default GetInTouchSection;
