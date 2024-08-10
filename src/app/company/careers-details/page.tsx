"use client";
import CareerDetail from "@/components/Company/Career/CareerDetail";
import JobApply from "@/components/Company/Career/JobApply";
import CompanyLayout from "@/layout/CompanyLayout";
import { Container, Row } from "reactstrap";

const CareersDetails = () => {
  return (
    <CompanyLayout title="Job details" activeNav="home">
      <section className="section-pt-space section-pb-space">
        <Container>
          <Row>
            <CareerDetail />
            <JobApply />
          </Row>
        </Container>
      </section>
    </CompanyLayout>
  );
};

export default CareersDetails;
