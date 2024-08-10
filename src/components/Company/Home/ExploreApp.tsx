import { Col, Container, Row } from "reactstrap";
import Animation from "./Animation";
import { ImagePath, SvgPath } from "../../../utils/constant";
import Image from "next/image";
import { Href } from '../../../utils/constant/index';

const ExploreApp: React.FC = () => {
  const names =["Easy to Register with your Device.","Register in a minute by your Email ID"]
  const images =["google-play","app-store"]

  return (
    <section className="section-pb-space section-pt-space single-feature-section overflow-hidden">
      <Container>
        <Row>
          <Col xs="12">
            <div className="title-sec">
              <h4>download app now</h4>
              <h3>explore our app</h3>
            </div>
          </Col>
          <Col lg="6">
            <div className="vector-section mb--5">
              <img src={`${ImagePath}/company-landing/app/mockup.png`} className="img-fluid blur-up app-main wow zoomIn lazyloaded" alt="" />
              <img src={`${ImagePath}/company-landing/app/1.png`} className="img-fluid blur-up app-1 wow zoomIn lazyloaded" alt="" />
              <img src={`${ImagePath}/company-landing/app/2.png`} className="img-fluid blur-up app-2 wow zoomIn lazyloaded" alt="" />
            </div>
          </Col>
          <Col lg="6">
            <div className="feature-content wow fadeInRight">
              <div>
                <h3 className="title">new features for you</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dolorum blanditiis atque cum iure nihil, ipsa commodi veniam,nemo ipsam sed aliquam aliquid modi totam. Quia architectonesciunt facere consectetur laudantium.</p>
                <ul className="feature-lisiting">
                    {names.map((data,index)=> <li key={index}>
                    <Image height={18} width={18} src={`${SvgPath}/checkmark.svg`} className="img-fluid blur-up lazyloaded" alt=""/>
                    {data}
                  </li>)}
                </ul>
                <div className="app-buttons">
                  {images.map((data,index)=> <a href={Href} key={index}>
                    <Image height={57.72} width={178.08} src={`${ImagePath}/icon/${data}.png`} className="img-fluid blur-up lazyloaded" alt="" key={index}/>
                  </a>)}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Animation />
    </section>
  );
};

export default ExploreApp;
