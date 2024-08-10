import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import NavbarSection from "./NavbarSection";
import NavBarTabContent from "./NavBarTabContent";

const SettingSection = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [showSideBar, setShowSideBar] = useState(false)

  return (
    <section className="setting-section section-pb-space section-pt-space">
      <Container>
        <Row>
          <NavbarSection activeTab={activeTab} setActiveTab={setActiveTab} showSideBar={showSideBar}  setShowSideBar={setShowSideBar} />
          <NavBarTabContent activeTab={activeTab} setActiveTab={setActiveTab} showSideBar={showSideBar}  setShowSideBar={setShowSideBar}  />
        </Row>
      </Container>
    </section>
  );
};

export default SettingSection;
