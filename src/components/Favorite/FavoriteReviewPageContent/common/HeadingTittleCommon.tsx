import React, { FC } from "react";
import { HeadingTittleCommonInterFace } from "../../Favorite";
import { Href } from "../../../../utils/constant/index";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";

const HeadingTittleCommon: FC<HeadingTittleCommonInterFace> = ({title}) => {
  return (
    <div className="card-title">
      <h3>{title}</h3>
      <div className="settings">
        <div className="setting-btn">
          <a href={Href}>
            <DynamicFeatherIcon
              iconName="RotateCw"
              className="icon icon-dark stroke-width-3 iw-11 ih-11"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeadingTittleCommon;
