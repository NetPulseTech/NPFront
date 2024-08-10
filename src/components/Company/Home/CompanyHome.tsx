import CustomImage from "@/Common/CustomImage";
import { GetStarted, ImagePath } from "../../../utils/constant";
import Image from "next/image";
import { Col, Container, Row } from "reactstrap";
import { Href } from '../../../utils/constant/index';
import Animation from "./Animation";

const CompanyHomeSection: React.FC = () => {
  const numbers = [1, 2, 3];
  return (
    <section className="home-section overflow-hidden bg-size blur-up lazyloaded">
      <CustomImage
        src={`${ImagePath}/company-landing/home-bg.jpg`}
        className="img-fluid blur-up lazyload bg-img"
        alt="image"
      />
      <div className="home-content">
        <Container>
          <Row>
            <Col lg="7" className="order-lg-2">
              <div className="content-screen">
                <div className="main-screen">
                  <Image src={`${ImagePath}/company-landing/home-laptop.png`} priority height={320} width={487} alt="image" className="img-fluid blur-up wow zoomIn lazyloaded" style={{visibility: "visible",animationDelay: "0.2s",animationName: "zoomIn",}}/>
                </div>
                <div className="home-effect">
                  {numbers.map((data, index) => (
                    <img key={index} src={`${ImagePath}/company-landing/home-effect/${data}.png`} alt="images" className="img-fluid blur-up user-round wow zoomIn lazyloaded" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "zoomIn",}}/>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg="5"  className="order-lg-1">
              <div className="content">
                <div>
                  <h1>easy to talk with <span>friends</span></h1>
                  <p> Friendbook is an online platform that allows users to create a public profile and interact with friends, family, colleagues, customers, or clients.</p>
                  <a href={Href} className="btn btn-solid btn-lg">{GetStarted}</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Animation/>
    </section>
  );
};

export default CompanyHomeSection;
