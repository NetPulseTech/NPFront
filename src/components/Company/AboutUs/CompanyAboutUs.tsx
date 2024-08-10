import { Col, Container, Row } from "reactstrap";
import Animation from "../Home/Animation";
import CompanyTitle from "../Common/CompanyTitle";
import Image from "next/image";
import { ImagePath } from "../../../utils/constant";
import FeatureLisiting from "../Common/FeatureLisiting";

const CompanyAboutUs: React.FC = () => {
  return (
    <section className="section-pt-space section-pb-space single-feature-section overflow-hidden">
      <Container>
        <Row>
          <CompanyTitle mainTitle="netpulse" parentTitle="about us" />
          <Col lg="6">
            <div className="vector-section about-image">
              <Image height={339.44} width={508.8} src={`${ImagePath}/about.jpg`} className="img-fluid blur-up wow zoomIn lazyloaded" alt=""/>
            </div>
          </Col>
          <Col lg="6">
            <div className="feature-content wow fadeInRight about-content">
              <div>
                <h3 className="title">Register To Enjoy This Application</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dolorum blanditiis atque cum iure nihil, ipsa commodi veniam,nemo ipsam sed aliquam aliquid modi totam. Quia architectonesciunt facere consectetur laudantium.</p>
                <FeatureLisiting />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Animation />
    </section>
  );
};

export default CompanyAboutUs;
