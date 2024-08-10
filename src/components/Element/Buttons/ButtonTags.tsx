import { Button, CardBody, CardHeader, Col } from "reactstrap";
import { Href } from '../../../utils/constant/index';

const ButtonTags = () => {
  return (
    <Col lg="6" className="section-b-space">
      <div className="element-card theme-card bg-white">
        <CardHeader>
          <h4>Button tags</h4>
        </CardHeader>
        <CardBody>
          <div className="btn-group-showcase">
            <a className="btn btn-primary" href={Href}>Link</a>
            <Button color="primary" className="btn btn-primary">Button</Button>
            <input className="btn btn-primary" type="button" value="input"/>
            <input className="btn btn-primary" type="submit"/>
            <input className="btn btn-primary" type="reset"/>
          </div>
        </CardBody>
      </div>
    </Col>
  );
};

export default ButtonTags;
