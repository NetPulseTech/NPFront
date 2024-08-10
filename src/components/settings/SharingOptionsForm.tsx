import { SaveChanges, Href } from "../../utils/constant";
import { FormEvent } from "react";
import { Col, Input, Label, Row } from "reactstrap";
const SharingOptionsForm: React.FC = () => {
  return (
    <form className="theme-form form-sm" onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}>
      <Row>
        <div className="form-group col-sm-6">
          <Label className="title-lable">allow others to share your stories to their own story</Label>
          <Row>
            <Col xs="12" className="form-check">
              <Label className="form-check-label font-weight-normal" htmlFor="exampleRadios1">
                <Input className="form-check-input radio_animated" type="radio" id="exampleRadios1" defaultChecked name="exampleRadios"/>allow
              </Label>
            </Col>
            <Col xs="12" className="form-check">
              <Label className="form-check-label font-weight-normal" htmlFor="exampleRadios2">
                <Input  className="form-check-input radio_animated"  type="radio"  id="exampleRadios2" name="exampleRadios"/>don't allow
              </Label>
            </Col>
          </Row>
        </div>
        <Col sm="6" className="form-group">
          <Label className="title-lable">Allow message replies</Label>
          <Row>
            <Col xs="12" className="form-check">
              <Label className="form-check-label font-weight-normal" htmlFor="exampleRadios3">
                <Input className="form-check-input radio_animated" name="radio_animated" type="radio" id="exampleRadios3" defaultChecked/>your followers
              </Label>
            </Col>
            <Col xs="12" className="form-check">
              <Label className="form-check-label font-weight-normal" htmlFor="exampleRadios4">
                <Input className="form-check-input radio_animated" type="radio" name="radio_animated" id="exampleRadios4"/>followers you follow back
              </Label>
            </Col>
            <Col xs="12" className="form-check">
              <Label className="form-check-label font-weight-normal" htmlFor="exampleRadios6">
                <Input className="form-check-input radio_animated" type="radio" name="radio_animated" id="exampleRadios6"/>off
              </Label>
            </Col>
          </Row>
        </Col>
        <Col xs="12" className="form-group">
          <Label className="title-lable">saving</Label>
          <Row>
            <Col md="6" className="form-group toggle-sec">
              <div className="button toggle-btn"><Input type="checkbox" className="checkbox" /><div className="knobs"><span /></div><div className="layer" /></div>
              <Label>save to gallery<span>Lorem ipsum dolor sit amet</span></Label>
            </Col>
            <Col md="6" className="form-group toggle-sec">
              <div className="button toggle-btn"> <Input type="checkbox" defaultChecked className="checkbox" /> <div className="knobs"><span /></div> <div className="layer" /></div>
              <Label>save to archive<span>Lorem ipsum dolor sit amet</span></Label>
            </Col>
          </Row>
        </Col>
        <Col xs="12" className="form-group">
          <Label className="title-lable">sharing</Label>
          <Row>
            <Col md="6" className="form-group toggle-sec">
              <div className="button toggle-btn"><Input type="checkbox" defaultChecked className="checkbox" /><div className="knobs"><span /></div><div className="layer" /></div>
              <Label>allow resharing to stories</Label>
            </Col>
            <Col md="6" className="form-group toggle-sec col-md-6">
              <div className="button toggle-btn"><Input type="checkbox" className="checkbox" /><div className="knobs"><span /></div><div className="layer" /></div>
              <Label>allow sharing</Label>
            </Col>
            <Col md="6" className="form-group toggle-sec ">
              <div className="button toggle-btn"><Input type="checkbox" className="checkbox" />{" "}<div className="knobs"><span /></div>{" "}<div className="layer" /></div>
              <Label>share to other social app</Label>
            </Col>
          </Row>
        </Col>
        <Col sm="6" className="form-group">
          <Label className="title-lable">story setting</Label>
          <Row>
            <Col xs="12" className="form-check">
              <Label className="form-check-label font-weight-normal" htmlFor="radio1">
                <Input className="form-check-input radio_animated" type="radio" id="radio1" defaultChecked/>only specific friend
              </Label>
            </Col>
            <Col xs="12" className="form-check ">
              <Label className="form-check-label font-weight-normal" htmlFor="radio2">
                <Input className="form-check-input radio_animated" type="radio" id="radio2"/>all friends
              </Label>
            </Col>
            <div className="form-check col-12">
              <Label className="form-check-label font-weight-normal" htmlFor="radio3">
                <Input className="form-check-input radio_animated" type="radio" id="radio3"/>hide from
              </Label>
            </div>
          </Row>
        </Col>
      </Row>
      <div className="text-right"><a href={Href} className="btn btn-solid">{SaveChanges}</a></div>
    </form>
  );
};
export default SharingOptionsForm;
