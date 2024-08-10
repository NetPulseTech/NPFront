import React from "react";
import { CardBody, CardHeader, Col, Input, Row } from "reactstrap";

const ThemeForm = () => {
  return (
    <Col md="6">
      <CardHeader>
        <h4>theme form</h4>
        <span>Here’s a quick example to theme’s form styles. </span>
      </CardHeader>
      <CardBody>
        <form className="theme-form form-sm">
          <Row className="g-3">
            <Col md="6" className="form-group ">
              <label>full name</label>
              <input type="text" className="form-control" placeholder="Email" />
            </Col>
            <Col md="6" className="form-group ">
              <label>Phone Number</label>
              <Input type="number" placeholder="Phone number" />
            </Col>
            <Col xs="12" className="form-group ">
              <label>Pick Topic</label>
              <select id="inputState" className="form-control">
                <option value=''>Privacy</option>
                <option>login</option>
                <option>account</option>
              </select>
            </Col>
            <Col md="12" className="form-group ">
              <label>Message</label>
              <textarea
                rows={3}
                className="form-control"
                placeholder="Write Your Message"
                defaultValue={""}
              />
            </Col>
          </Row>
        </form>
      </CardBody>
    </Col>
  );
};

export default ThemeForm;
