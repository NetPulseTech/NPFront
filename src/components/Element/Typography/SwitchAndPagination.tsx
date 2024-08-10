import React from "react";
import { CardBody, CardHeader, Col, Container, FormGroup, Input, Row } from "reactstrap";
import Pagination from "./Pagination";
import { ThemeSwitch } from "../../../utils/constant";

const SwitchAndPagination = () => {
  return (
    <div className="element-card section-pb-space section-pt-space bg-white">
      <Container>
        <Row>
          <Col md="6">
            <CardHeader>
              <h4>{ThemeSwitch}</h4>
              <span>On off toggling switch to enable and disable notifications</span>
            </CardHeader>
            <CardBody>
              <form className="theme-form form-sm">
                <Row>
                  <FormGroup className="col-12">
                    <label>where you receive these notifications?</label>
                  </FormGroup>
                  <FormGroup className="toggle-sec col-12">
                    <div className="button toggle-btn">
                      <Input type="checkbox" className="checkbox" />
                      <div className="knobs"><span /></div>
                      <div className="layer" />
                    </div>
                    <label>email <span>Lorem ipsum dolor sit amet</span></label>
                  </FormGroup>
                  <FormGroup className="toggle-sec col-12">
                    <div className="button toggle-btn">
                      <Input type="checkbox" defaultChecked className="checkbox"/>
                      <div className="knobs"><span /></div>
                      <div className="layer" />
                    </div>
                    <label>SMS <span>Lorem ipsum dolor sit amet</span></label>
                  </FormGroup>
                </Row>
              </form>
            </CardBody>
          </Col>
          <Pagination />
        </Row>
      </Container>
    </div>
  );
};

export default SwitchAndPagination;
