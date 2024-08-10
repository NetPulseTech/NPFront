import { ImagePath, RegisterNow } from "../../../utils/constant";
import { Col, Container, Row } from "reactstrap";
import { Href } from '../../../utils/constant/index';
import Animation from "./Animation";
import FeatureLisiting from "../Common/FeatureLisiting";

const ActiveUsers: React.FC = () => {
  return (
    <section className="section-pb-space section-pt-space single-feature-section landing-bg overflow-hidden">
      <Container>
        <Row>
          <Col xs="12" >
            <div className="title-sec">
              <h4>active users</h4>
              <h3>more then 100k active users</h3>
            </div>
          </Col>
          <Col lg="7">
            <div className="vector-section">
              <img src={`${ImagePath}/company-landing/feature-vector/active-user.svg`} className="img-fluid blur-up active-img wow zoomIn lazyloaded" alt=""/>
            </div>
          </Col>
          <Col lg="5">
            <div className="feature-content wow fadeInRight">
              <div>
                <h3 className="title">Register To Enjoy This Application</h3>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum blanditiis atque cum iure nihil, ipsa commodi veniam, nemo ipsam sed aliquam aliquid modi totam. Quia architecto nesciunt facere consectetur laudantium.</p>
                <FeatureLisiting />
                <a href={Href} className="btn btn-solid btn-md">{RegisterNow}</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Animation />
    </section>
  );
};

export default ActiveUsers;
