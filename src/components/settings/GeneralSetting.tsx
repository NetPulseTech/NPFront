import { Address, BackupEmail, City, Country, DateOfBirth, Email, FirstName, Gender, GeneralSettings, LastName, SaveChanges, State } from "../../utils/constant";
import { FormEvent } from "react";
import { Button, Col, Input, Label, Row } from "reactstrap";
import { Href } from '../../utils/constant/index';

const GeneralSetting: React.FC = () => {
  return (
    <div className="setting-wrapper">
      <div className="setting-title">
        <h3>{GeneralSettings}</h3>
      </div>
      <div className="form-sec">
        <div>
          <form className="theme-form form-sm" onSubmit={(event: FormEvent<HTMLFormElement>) =>event.preventDefault()}>
            <Row>
              <Col md="6" className="form-group">
                <Label>{FirstName}</Label>
                <Input type="text" defaultValue="Josephin" placeholder="Email"/>
              </Col>
              <Col md="6" className="form-group">
                <Label>{LastName}</Label>
                <Input type="password" autoComplete="" className="form-control" placeholder="Password"/>
              </Col>
              <Col md="6" className="form-group">
                <Label>{Email}</Label>
                <Input type="email" defaultValue="Josephin.water@gmail.com" />
              </Col>
              <Col md="6" className="form-group">
                <Label>{BackupEmail}</Label>
                <Input type="email" defaultValue="Josephinwater52@gmail.com"/>
              </Col>
              <Col xs="12" className="form-group">
                <Label>{Address}</Label>
                <Input type="text" placeholder="1234 Main St"/>
              </Col>
              <Col md="4" className="form-group">
                <Label>{City}</Label>
                <Input defaultValue="london" type="text"/>
              </Col>
              <Col md="4" className="form-group">
                <Label >{State}</Label>
                <Input type="select" >
                  <option value="">Choose...</option>
                  <option>...</option>
                </Input>
              </Col>
              <Col md="4" className="form-group">
                <Label >{Country}</Label>
                <Input type="select" >
                  <option value="">Choose...</option>
                  <option>...</option>
                </Input>
              </Col>
              <Col md="4" className="form-group">
                <Label>{DateOfBirth}</Label>
                <div className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group">
                  <Input placeholder="Depart Date"/>
                  <span className="input-group-append">
                    <Button className="btn-outline-secondary border-left-0">
                      <i className="gj-icon">event</i>
                    </Button>
                  </span>
                </div>
              </Col>
              <Col md="4" className="form-group">
                <Label >phone no:</Label>
                <input type="number" className="form-control" id="inputCity" />
              </Col>
              <Col md="4" className="form-group col-md-4">
                <Label >{Gender}</Label>
                <Input type="select" >
                  <option value="">Choose...</option>
                  <option>...</option>
                </Input>
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

export default GeneralSetting;
