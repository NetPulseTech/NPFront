import { CardHeader, Col } from "reactstrap";
import PopoverCardBody from "./PopoverCardBody";

const Popover = () => {
  return (
    <Col md="6">
      <CardHeader>
        <h4>popover</h4>
        <span>custom user popover</span>
      </CardHeader>
      <PopoverCardBody />
    </Col>
  );
};

export default Popover;
