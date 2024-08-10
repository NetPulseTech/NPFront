"use client";
import AllSvgEmoji from "@/components/Element/IconsEmoji/AllSvgEmoji";
import FeatherIcons from "@/components/Element/IconsEmoji/FeatherIcons";
import ThemeIcon from "@/components/Element/IconsEmoji/ThemeIcon";
import WeatherIcon from "@/components/Element/IconsEmoji/WeatherIcon";
import WeatherIcons from "@/components/Element/IconsEmoji/WeatherIcons";
import CompanyLayout from "@/layout/CompanyLayout";
import { Col, Container, Row } from "reactstrap";

const IconsEmoji = () => {
  return (
    <CompanyLayout title="Icons & Emoji">
      <section className="section-pb-space section-pt-space">
        <Container>
          <Row className="sm-pb-space">
            <Col lg="9" xs="12" className="m-auto">
              <FeatherIcons />
            </Col>
          </Row>
          <ThemeIcon />
          <WeatherIcons />
          <AllSvgEmoji />
          <WeatherIcon />
        </Container>
      </section>
    </CompanyLayout>
  );
};

export default IconsEmoji;
