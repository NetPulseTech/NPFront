"use client";
import ButtonBlock from "@/components/Element/Buttons/ButtonBlock";
import ButtonGroup from "@/components/Element/Buttons/ButtonGroup";
import ButtonSizes from "@/components/Element/Buttons/ButtonSizes";
import ButtonTags from "@/components/Element/Buttons/ButtonTags";
import OutLineButton from "@/components/Element/Buttons/OutLineButton";
import ReactStrapButton from "@/components/Element/Buttons/ReactStrapButton";
import ThemeButtons from "@/components/Element/Buttons/ThemeButtons";
import CompanyLayout from "@/layout/CompanyLayout";
import {  Container, Row } from "reactstrap";

const Buttons = () => {
  return (
    <CompanyLayout title="Buttons">
      <Container className="section-pt-space section-pb-space element-btn">
        <Row>
          <ThemeButtons/>
          <ButtonTags/>
          <ButtonSizes/>
          <ReactStrapButton/>
          <OutLineButton/>
          <ButtonBlock/>
          <ButtonGroup/>
        </Row>
      </Container>
    </CompanyLayout>
  );
};

export default Buttons;
