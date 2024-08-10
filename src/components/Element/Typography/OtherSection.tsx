//@ts-nocheck

import { AccordionDummyText } from "@/utils/constant";
import React, { useState } from "react";
import {
  Accordion,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Container,
  Row,
} from "reactstrap";
import PopoverCardBody from "./PopoverCardBody";
import CommonDropDown from "@/Common/CommonDropDown";
import { dropDownData } from "../../../Data/event/index";
import { musicPlayerData } from "@/Data/music";

const OtherSection = () => {
  const [isOpen, setIsOpen] = useState<string | null>("1");
  const toggle = (id: string) =>
    isOpen === id ? setIsOpen(null) : setIsOpen(id);
  return (
    <div className="element-card section-pb-space section-pt-space bg-white">
      <Container>
        <Row>
          <Col md="6">
            <div className="card-header">
              <h4>Accordion</h4>
              <span>
                Theme style bootstrap accodion, you can use bootstrap accodion
                by removing theme-accordion class
              </span>
            </div>
            <div className="card-body">
              <Accordion open={"1"} className="theme-accordion">
                <Card>
                  <CardHeader>
                    <h2 className="mb-0">
                      <Button
                        className="btn-link btn-block text-left"
                        onClick={() => toggle("1")}
                      >
                        Collapsible Group Item #1
                      </Button>
                    </h2>
                  </CardHeader>
                  <Collapse isOpen={isOpen === "1"}>
                    <CardBody>{AccordionDummyText}</CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader>
                    <h2 className="mb-0">
                      <Button
                        className="btn-link btn-block text-left"
                        onClick={() => toggle("2")}
                      >
                        Collapsible Group Item #2
                      </Button>
                    </h2>
                  </CardHeader>
                  <Collapse isOpen={isOpen === "2"}>
                    <CardBody>{AccordionDummyText}</CardBody>
                  </Collapse>
                </Card>
              </Accordion>
            </div>
          </Col>
          <Col md="3">
            <CardHeader>
              <h4>popover</h4>
              <span>custom user popover</span>
            </CardHeader>
            <PopoverCardBody />
          </Col>
          <Col md="3">
            <CardHeader>
              <h4>dropdown</h4>
              <span>theme dropdown style</span>
            </CardHeader>
            <CardBody className="d-flex">
              <div className="settings">
                <div className="setting-btn setting-dropdown ms-2">
                  <CommonDropDown mainClassName="icon-dark stroke-width-3 icon iw-14 ih-14" mainIcon="Sun" menuList={musicPlayerData}/>
                </div>
              </div>
              <div className="settings ms-4">
                <div className="setting-btn ms-2 setting-dropdown no-bg">
                  <CommonDropDown mainClassName="icon icon-font-color iw-14" mainIcon="MoreHorizontal" menuList={dropDownData}/>
                </div>
              </div>
            </CardBody>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OtherSection;
