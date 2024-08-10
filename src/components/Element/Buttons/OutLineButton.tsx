import { Button, CardBody, CardHeader, Col } from "reactstrap";

const OutLineButton = () => {
  return (
    <Col sm="12" className="section-b-space">
      <div className="element-card theme-card bg-white">
        <CardHeader>
          <h4>Button Outline</h4>
        </CardHeader>
        <CardBody>
          <div className="btn-group-showcase">
            <Button outline color="primary">Primary</Button>
            <Button outline color="secondary">Secondary</Button>
            <Button outline color="success">Success</Button>
            <Button outline color="danger">Danger</Button>
            <Button outline color="warning">Warning</Button>
            <Button outline color="info">Info</Button>
            <Button outline color="dark">Dark</Button>
          </div>
        </CardBody>
      </div>
    </Col>
  );
};

export default OutLineButton;
