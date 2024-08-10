import { PrivacySettings, SaveChanges } from "../../utils/constant";
import { FormEvent } from "react";
import { Col, Input, Row } from "reactstrap";
import { Href } from '../../utils/constant/index';

const PrivacySetting: React.FC = () => {
  return (
    <div className="setting-wrapper">
      <div className="setting-title">
        <h3>{PrivacySettings}</h3>
      </div>
      <div className="form-sec">
        <div>
          <form className="theme-form form-sm" onSubmit={(event: FormEvent<HTMLFormElement>) =>event.preventDefault()}>
            <Row>
              <Col xs="12" className="form-group">
                <label>who can see your future post?</label>
                <Input type="select">
                  <option value="">everyone</option>
                  <option>friends</option>
                  <option>only me</option>
                </Input>
              </Col>
              <div className="form-group col-12">
                <label>who can send you friend request?</label>
                <Input type="select">
                  <option value="">everyone</option>
                  <option>friends</option>
                  <option>only me</option>
                </Input>
              </div>
              <div className="form-group col-12">
                <label>who can see your email address provided?</label>
                <Input type="select">
                  <option>everyone</option>
                  <option>friends</option>
                  <option value="">only me</option>
                </Input>
              </div>
              <div className="form-group col-12">
                <label>who can see your phone number provided?</label>
                <Input type="select">
                  <option>everyone</option>
                  <option value="">friends</option>
                  <option>only me</option>
                </Input>
              </div>
            </Row>
            <div className="text-right">
              <a href={Href} className="btn btn-solid">
                {SaveChanges}
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PrivacySetting;
