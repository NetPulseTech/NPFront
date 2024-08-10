import React from "react";
import { PopoverBody, PopoverHeader, UncontrolledPopover } from "reactstrap";

const Popover = () => {
  return (
    <UncontrolledPopover
      placement="bottom"
      target="Uncontrolled"
      trigger="hover"
    >
      <PopoverHeader>Popover Title</PopoverHeader>
      <PopoverBody>
        Sed posuere consectetur est at lobortis. Aenean eu leo quam.
        Pellentesque ornare sem lacinia quam venenatis vestibulum.
      </PopoverBody>
    </UncontrolledPopover>
  );
};

export default Popover;
