import { FormEvent } from "react";
import { Col, Input, Label } from "reactstrap";
import { Href } from '../../../utils/constant/index';

const JobApply: React.FC = () => {
  return (
    <Col lg="3" className="order-lg-2 order-1">
      <div className="career-sidebar sticky-cls-top ">
        <div className="detail-wrapper">
          <div className="sidebar-title">
            <h5>Apply here</h5>
          </div>
          <form className="theme-form form-sm" onSubmit={(event: FormEvent<HTMLFormElement>) =>event.preventDefault()}>
            <div className="form-row">
              <Col md="12" className="form-group">
                <Label>Full name</Label>
                <Input type="text" placeholder="Full Name" />
              </Col>
              <Col md="12" className="form-group mt-3">
                <Label>Email</Label>
                <Input type="email" placeholder="Email Address" />
              </Col>
              <Col md="12" className="form-group mt-3">
                <Label>phone no:</Label>
                <Input type="number" placeholder="Phone No" />
              </Col>
              <Col xs="12" className="form-group  mt-3">
                <Label>Upload resume</Label>
                <Input type="file" className="form-control-file" />
              </Col>
            </div>
            <div className="text-right">
              <a href={Href} className="btn btn-solid">apply now</a>
            </div>
          </form>
        </div>
      </div>
    </Col>
  );
};

export default JobApply;
