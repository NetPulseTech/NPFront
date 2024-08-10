import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { companyCareerDetailsData } from "@/Data/company";
import { SvgPath } from "../../../utils/constant";
import Image from "next/image";
import { Col, Container, Row } from "reactstrap";

const CareerDetails: React.FC = () => {
  return (
    <section className="section-pb-space section-pt-space intro-bg  help-contact">
      <Container>
        <Row>
          <Col lg="5">
            <div className="intro-part">
              <div className="title">
                <h2>Perks & Benefits</h2>
                <p>Join our team and help build the world’s best platform</p>
              </div>
              <div className="contact-img">
                <Image height={208.14} width={343.09} src={`${SvgPath}/hire.svg`} className="img-fluid blur-up lazyloaded" alt=""/>
              </div>
            </div>
          </Col>
          <Col lg="7">
            <div className="career-perks">
              <Row>
                {companyCareerDetailsData.map((data, index) => (
                  <Col md="6" key={index}>
                    <div className="career-wrap">
                      <DynamicFeatherIcon iconName={data.icon} className="iw-30 ih-25"/>
                      <div className="content">
                        <h3>{data.heading}</h3>
                        <p>{data.details}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CareerDetails;
