import { Col, Container, Row } from "reactstrap";
import { ApplyNow, Details, Href } from "../../../utils/constant/index";
import Link from "next/link";

const AllJobs: React.FC = () => {
  const allJobsData = ["Marketing Analyst","social media analytics","Content Writer","Public Relations Managers","social media marketing","Content Writer","Public Relations Managers","Market Research Analyst"];
  return (
    <section className="section-pb-space career-section">
      <Container>
        <Row>
          <Col xs="12">
            <div className="title">
              <h3>All Jobs</h3>
            </div>
          </Col>
          {allJobsData.map((data, index) => (
            <Col xl="3" md="6" key={index}>
              <div className="career-box">
                <a href={Href}>
                  <h4>{data}</h4>
                </a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepetotam ab eveniet! Laborum quasi?</p>
                <div className="requirement-sec">
                  <h6>3-4 Ex.</h6>
                  <h6>4 opening</h6>
                </div>
                <Row className="button-sec">
                  <Col xs="6">
                    <Link href="/company/careers-details" className="btn btn-solid d-block">{ApplyNow}</Link>
                  </Col>
                  <Col xs="6">
                    <Link href="/company/careers-details" className="btn btn-light d-block">{Details}</Link>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AllJobs;
