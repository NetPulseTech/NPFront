import { Col, Container, Row } from "reactstrap";
import CompanyTitle from "../Common/CompanyTitle";
import Animation from "../Home/Animation";
import CustomImage from "@/Common/CustomImage";
import { ImagePath } from "../../../utils/constant";
import TeamSocial from "./TeamSocial";
import { friendBookTeam } from "@/Data/SliderOptions";
import Slider from "react-slick";

const NetPulseTeam: React.FC = () => {
  const numbers = [1, 2, 3, 4];
  return (
    <section className="default-space-lg landing-bg section-pt-space section-pb-space">
      <Container>
        <Row>
          <CompanyTitle mainTitle="NetPulse" parentTitle="Our Team" />
          <Col xs="12">
            <Slider {...friendBookTeam} className="slide-4 no-arrow mw-100" >
              {numbers.map((data, index) => (
                <div  key={index}>
                  <div className="team-section">
                    <div className="team-image bg-size blur-up lazyloaded">
                      <CustomImage src={`${ImagePath}/team/${data}.jpg`} className="img-fluid blur-up lazyload bg-img" alt=""/>
                    </div>
                    <div className="team-content">
                      <h3>Lucas Smith</h3>
                      <h6>marketing</h6>
                      <TeamSocial/>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
      <Animation />
    </section>
  );
};

export default NetPulseTeam;
