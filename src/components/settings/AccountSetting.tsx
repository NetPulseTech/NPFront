import { AccountSettings, SaveChanges } from "../../utils/constant";
import { FormEvent } from "react";
import { Col, Input, Label, Row } from "reactstrap";
import { Href } from '../../utils/constant/index';

const AccountSetting: React.FC = () => {
  return (
    <div className="setting-wrapper">
      <div className="setting-title">
        <h3>{AccountSettings}</h3>
      </div>
      <div className="form-sec">
        <div>
          <form className="theme-form form-sm" onSubmit={(event: FormEvent<HTMLFormElement>) =>event.preventDefault()}>
            <Row>
              <Col xs="12"  className="form-group">
                <Label>current password</Label>
                <Input type="password" autoComplete="" placeholder="current password"/>
              </Col>
              <Col sm="6" className="form-group">
                <Label>new password</Label>
                <Input type="password" autoComplete="" placeholder="new password"/>
              </Col>
              <Col sm="6"  className="form-group">
                <Label>repeat password</Label>
                <Input type="password" autoComplete="" placeholder="repeat password"/>
              </Col>
              <Col xs="12" className="form-group">
                <label>use two factor authentication</label>
              </Col>
              <Col xs="12" className="form-group toggle-sec">
                <div className="button toggle-btn">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <div className="knobs">
                    <span />
                  </div>
                  <div className="layer" />
                </div>
                <label>
                  enable
                  <span>
                    we'll ask for a code if we notice an unrecognized device
                  </span>
                </label>
              </Col>
            </Row>
            <div className="text-right">
              <a href={Href} className="btn btn-solid">{SaveChanges}</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
