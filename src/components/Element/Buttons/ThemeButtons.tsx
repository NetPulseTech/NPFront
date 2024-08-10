import { Href } from "../../../utils/constant/index";
import { CardBody, CardHeader, Col } from "reactstrap";

const ThemeButtons = () => {
  return (
    <Col lg="6" className="section-b-space">
      <div className="element-card theme-card bg-white">
        <CardHeader>
          <h4>Theme buttons</h4>
        </CardHeader>
        <CardBody>
          <div className="btn-group-showcase">
            <a href={Href} className="btn btn-solid ">read more</a>
            <a href={Href} className="btn btn-outline">read more</a>
            <a href={Href} className="btn btn-theme-light">read more</a>
          </div>
        </CardBody>
      </div>
    </Col>
  );
};

export default ThemeButtons;
