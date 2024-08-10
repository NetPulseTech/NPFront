import { SvgPath } from "../../utils/constant";
import Image from "next/image";
import React from "react";

const ButtonPopover = () => {
  return (
    <div className="button-popover">
      <a className="btn btn-solid">
        <Image height={16} width={16} src={`${SvgPath}/message-square.svg`} className="img-fluid" alt="message-square"/>
        message
      </a>
      <a className="btn btn-solid">
        <Image height={16} width={16} src={`${SvgPath}/user-check.svg`} className="img-fluid mr-0" alt="message-square"/>
      </a>
    </div>
  );
};

export default ButtonPopover;
