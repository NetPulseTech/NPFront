import { Col, Container, Row } from "reactstrap";
import Animation from "../Home/Animation";
import CompanyTitle from "../Common/CompanyTitle";
import { companyFeaturesList } from "@/Data/company";
import Image from "next/image";
import { SvgPath } from "../../../utils/constant";

const CompanyFeatures: React.FC = () => {
  return (
    <section className="feature-section section-pb-space overflow-hidden about-feature">
      <Container>
        <Row>
          <CompanyTitle
            mainTitle="our stats"
            parentTitle="No Stories, Facts Only"
          />
        </Row>
        <div className="row margin-deafult">
          {companyFeaturesList.map((data, index) => (
            <Col lg="4" key={index}>
              <div className="feature-box">
                <div className="icon-box">
                  <Image
                    width={50}
                    height={50}
                    src={`${SvgPath}/about/${data.imageName}.svg`}
                    className="img-fluid blur-up lazyloaded"
                    alt=""
                  />
                </div>
                <div className="feature-content">
                  <h3>{data.detail}</h3>
                  <p>{data.paragraph}</p>
                </div>
              </div>
            </Col>
          ))}
        </div>
      </Container>
      <Animation />
    </section>
  );
};

export default CompanyFeatures;
