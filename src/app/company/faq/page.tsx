"use client";
import { SvgPath } from "../../../utils/constant";
import FaqAccordion from "@/components/Company/FaqAccordion";
import CompanyLayout from "@/layout/CompanyLayout";
import Image from "next/image";
import { Col, Container, Row } from "reactstrap";

const CompanyFaq = () => {
  return (
    <CompanyLayout title="faq" activeNav="FAQ">
      <section className="section-pb-space section-pt-space faq-help-contact help-contact">
        <Container>
          <Row>
            <Col lg="6">
              <div className="intro-part">
                <div className="title">
                  <h2>Have a question? reach us</h2>
                  <p>looking for anything else? reach us by fill this form</p>
                </div>
                <div className="contact-img">
                  <Image height={345.56} width={414.59} src={`${SvgPath}/faq.svg`} className="img-fluid blur-up lazyloaded" alt=""/>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <FaqAccordion />
            </Col>
          </Row>
        </Container>
      </section>
    </CompanyLayout>
  );
};

export default CompanyFaq;
