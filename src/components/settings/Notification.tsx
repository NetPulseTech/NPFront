import { Notifications } from "../../utils/constant";
import { FormEvent } from "react";
import { Col, Input, Label, Row } from "reactstrap";

const Notification: React.FC = () => {
  return (
    <div className="setting-wrapper">
      <div className="setting-title">
        <h3>{Notifications}</h3>
      </div>
      <div className="form-sec">
        <div>
          <form className="theme-form form-sm" onSubmit={(event: FormEvent<HTMLFormElement>) =>event.preventDefault()}>
            <Row>
              <Col xs="12"  className="form-group ">
                <Label>where you receive these notifications?</Label>
              </Col>
              <Col md="6" className="form-group toggle-sec">
                <div className="button toggle-btn">
                  <Input type="checkbox" className="checkbox" />
                  <div className="knobs"><span /></div>
                  <div className="layer" />
                </div>
                <Label>email <span>Lorem ipsum dolor sit amet</span></Label>
              </Col>
              <Col md="6" className="form-group toggle-sec">
                <div className="button toggle-btn">
                  <Input type="checkbox" defaultChecked className="checkbox" />
                  <div className="knobs"><span /></div>
                  <div className="layer" />
                </div>
                <Label>SMS<span>Lorem ipsum dolor sit amet</span></Label>
              </Col>
              <Col xs="12" className="form-group">
                <Label>other notification</Label>
              </Col>
              <Col md="6" className="form-group toggle-sec">
                <div className="button toggle-btn">
                  <Input type="checkbox" className="checkbox" />
                  <div className="knobs"><span /></div>
                  <div className="layer" />
                </div>
                <Label>sound<span>Lorem ipsum dolor sit amet</span></Label>
              </Col>
              <Col md="6" className="form-group toggle-sec">
                <div className="button toggle-btn">
                  <Input defaultChecked type="checkbox" className="checkbox" />
                  <div className="knobs"><span /></div>
                  <div className="layer" />
                </div>
                <Label>vibration<span>Lorem ipsum dolor sit amet</span></Label>
              </Col>
              <Col md="6" className="form-group toggle-sec">
                <div className="button toggle-btn">
                  <Input type="checkbox" className="checkbox" />
                  <div className="knobs"><span /></div>
                  <div className="layer" />
                </div>
                <Label>friend request<span>Lorem ipsum dolor sit amet</span></Label>
              </Col>
              <Col md="6" className="form-group toggle-sec">
                <div className="button toggle-btn">
                  <Input type="checkbox" className="checkbox" />
                  <div className="knobs"><span /></div>
                  <div className="layer" />
                </div>
                <Label>message<span>Lorem ipsum dolor sit amet</span></Label>
              </Col>
              <Col md="6" className="form-group toggle-sec ">
                <div className="button toggle-btn">
                  <Input type="checkbox" className="checkbox" />
                  <div className="knobs"><span /></div>
                  <div className="layer" />
                </div>
                <Label>comment<span>Lorem ipsum dolor sit amet</span></Label>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Notification;
