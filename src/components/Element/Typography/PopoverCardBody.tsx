import CustomImage from "@/Common/CustomImage";
import HoverMessage from "@/Common/HoverMessage";
import { ImagePath } from "@/utils/constant";
import React from "react";
import { CardBody, Media } from "reactstrap";

const PopoverCardBody = () => {
  return (
    <CardBody>
      <div className="user-media">
        <Media>
          <a
            id="PaigeTurner"
            className="user-img popover-cls bg-size blur-up lazyloaded"
          >
            <CustomImage
              src={`${ImagePath}/user-sm/1.jpg`}
              className="img-fluid blur-up lazyload bg-img"
              alt="user"
            />
            <span className="available-stats" />
          </a>
          <div className="media-body">
            <h5 className="user-name">Paige Turner</h5>
            <h6>alabma, USA</h6>
          </div>
          <HoverMessage 
            placement={"right"}
            target={"PaigeTurner"}
            name={"Paige Turner"}
            imagePath={`user-sm/1.jpg`}
          />
        </Media>
      </div>
    </CardBody>
  );
};

export default PopoverCardBody;
