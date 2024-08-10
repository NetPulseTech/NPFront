import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { themeTooltipData } from "@/Data/GenralData";
import { Href } from "@/utils/constant";
import Link from "next/link";
import React from "react";
import { CardBody, CardHeader, Col } from "reactstrap";

const ThemeTooltip = () => {
  return (
    <Col md="6">
      <CardHeader>
        <h4>theme tooltip</h4>
        <span>Friendbook use Tippy tooltip.here is th example.you can change direction in tippy-setting.js</span>
      </CardHeader>
      <CardBody>
        <ul className="d-flex tooltip-sec">
          {themeTooltipData.map((data, index) => (
            <li key={index} className={index !== 0 ? "ms-3" : ""}>
              <Link href={data.link ? data.link : Href}>
                <DynamicFeatherIcon
                  iconName={data.icon}
                  className={data.iconClass ? data.iconClass : ""}
                />

                <div className="tooltip-cls">
                  <span>{data.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </CardBody>
    </Col>
  );
};

export default ThemeTooltip;
