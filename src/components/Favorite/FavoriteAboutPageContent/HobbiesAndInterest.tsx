import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { HobbiesInterest } from "../../../utils/constant";
import React, { FC } from "react";
import { Href } from "../../../utils/constant/index";
import { hobbiesAndInterestData } from "@/Data/Favorite";

const HobbiesAndInterest: FC = () => {
  return (
    <div className="about-profile section-b-space">
      <div className="card-title">
        <h3>{HobbiesInterest}</h3>
        <div className="settings">
          <div className="setting-btn">
            <a href={Href}>
              <DynamicFeatherIcon
                iconName="Edit2"
                className="icon icon-dark stroke-width-3 iw-11 ih-11"
              />
            </a>
          </div>
        </div>
      </div>
      <ul className="about-list">
        {hobbiesAndInterestData.map((data, index) => (
          <li key={index}>
            <h5 className="title">{data.heading}</h5>
            <h6 className="content">{data.detail}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HobbiesAndInterest;
