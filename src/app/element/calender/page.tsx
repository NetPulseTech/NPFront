"use client";

import Calender from "@/components/Event/Calender";
import CompanyLayout from "@/layout/CompanyLayout";
import { Col, Container, Row } from "reactstrap";

const CalenderPage = () => {
  return (
    <CompanyLayout title="Calender">
      <Container className="section-pt-space section-pb-space">
        <Row>
          <Col lg="8" className="m-auto">
            <div className="calender-section custom-calender">
              <Calender />
            </div>
          </Col>
        </Row>
      </Container>
    </CompanyLayout>
  );
};

export default CalenderPage;
