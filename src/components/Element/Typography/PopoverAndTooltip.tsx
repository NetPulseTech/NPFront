import React from "react";
import { Container, Row } from "reactstrap";
import Popover from "./Popover";
import ThemeTooltip from "./ThemeTooltip";

const PopoverAndTooltip = () => {
  return (
    <div className="element-card section-pb-space section-pt-space">
      <Container>
        <Row>
          <Popover />
          <ThemeTooltip />
        </Row>
      </Container>
    </div>
  );
};

export default PopoverAndTooltip;
