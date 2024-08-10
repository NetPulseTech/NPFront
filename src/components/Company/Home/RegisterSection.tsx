import { ImagePath, RegisterNow, SvgPath } from "../../../utils/constant";
import Image from "next/image";
import { Col, Container, Row } from "reactstrap";
import { Href } from '../../../utils/constant/index';
import Animation from "./Animation";
import FeatureLisiting from "../Common/FeatureLisiting";

const RegisterSection: React.FC = () => {
  return (
    <section className="section-pb-space section-pt-space single-feature-section landing-bg overflow-hidden">
      <Container>
        <Row>
          <Col xs="12">
            <div className="title-sec">
              <h4>register in a minute</h4>
              <h3>register to join netpulse</h3>
            </div>
          </Col>
          <Col lg="6">
            <div className="vector-section mb--65">
              <img src={`${ImagePath}/company-landing/feature-vector/register/phone.svg`} className="img-fluid blur-up main-img wow zoomIn lazyloaded" alt="" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "zoomIn",}}/>
              <img src={`${ImagePath}/company-landing/feature-vector/register/lock.svg`} className="img-fluid blur-up lock-img wow zoomIn lazyloaded"  alt="" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "zoomIn",}}/>
              <img src={`${ImagePath}/company-landing/feature-vector/register/thumbs-up.svg`} className="img-fluid blur-up thumb-img wow zoomIn lazyloaded" alt="" style={{ visibility: "visible", animationDelay: "0.4s", animationName: "zoomIn",}}/>
            </div>
          </Col>
          <Col lg="6">
            <div className="feature-content wow fadeInRight">
              <div>
                <h3 className="title">Register To Enjoy This Application</h3>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum blanditiis atque cum iure nihil, ipsa commodi veniam, nemo ipsam sed aliquam aliquid modi totam. Quia architecto nesciunt facere consectetur laudantium.</p>
                <FeatureLisiting/>
                <a href={Href} className="btn btn-solid btn-md">{RegisterNow}</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Animation/>
    </section>
  );
};

export default RegisterSection;
