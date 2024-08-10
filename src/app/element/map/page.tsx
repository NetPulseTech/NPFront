"use client"
import MapGoogle from "@/components/Element/MapGoogle";
import CompanyLayout from "@/layout/CompanyLayout";
import { CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const Icons = () => {
  return (
    <CompanyLayout title="Google Map">
      <Container className=" section-pt-space section-pb-space element-map">
        <Row>
          <Col lg="6">
            <div className="element-card theme-card bg-white">
              <CardHeader>
                <h4>google route map</h4>
              </CardHeader>
              <CardBody>
                <MapGoogle />
              </CardBody>
            </div>
          </Col>
          <Col lg="6">
            <div className="element-card theme-card bg-white">
              <CardHeader>
                <h4>google map iframe</h4>
              </CardHeader>
              <CardBody>
                <div className="map-wrapper">
                  <div className="map h-100">
                    <iframe
                      className="w-100 h-100 border-0"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.75786958309!2d2.2768486702990085!3d48.858950576707926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sin!4v1594206206970!5m2!1sen!2sin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </CardBody>
            </div>
          </Col>
        </Row>
      </Container>
    </CompanyLayout>
  );
};

export default Icons;
