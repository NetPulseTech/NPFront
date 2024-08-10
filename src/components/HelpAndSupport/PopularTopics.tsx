import { helpAndSupportData } from "@/Data/HelpAndSupport";
import { PopularTopic, SvgPath } from "../../utils/constant";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";
import { Href } from '../../utils/constant/index';

const PopularTopics: React.FC = () => {
  return (
    <section className="section-pt-space section-pb-space popular-topics">
      <Container>
        <Row>
          <Col xs="12">
            <div className="title">
              <h3>{PopularTopic}</h3>
            </div>
          </Col>
          {helpAndSupportData.map((data, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="topic-box">
                <Link href="/helparticle" className="icon">
                  <img src={`${SvgPath}/help-topics/${data.imageName}.svg`} className="img-fluid blur-up lazyloaded" alt=""/>
                </Link>
                <div className="topic-content">
                  <a href={Href}>
                    <h4>{data.title}</h4>
                  </a>
                  <p>
                    learn how to change or edit profile setting and managed post
                    in your timeline
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularTopics;
