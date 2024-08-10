import { FC } from "react";
import { Row } from "reactstrap";
import DragCalendar from "./DragCalendar";

const Calender: FC = () => {
  return (
    <Row>
      <DragCalendar />
    </Row>
  );
};

export default Calender;
