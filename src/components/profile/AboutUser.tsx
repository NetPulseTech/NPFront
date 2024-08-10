import { About, IntroMySelf } from "../../utils/constant";
import EditCoverModal from "@/layout/ProfileLayout/EditCoverModal";
import React, { FC, useState } from "react";
import { Href } from "../../utils/constant/index";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { aboutUser, socialMediaDetail } from "@/Data/profile";
import SvgIconCommon from "@/Common/SvgIconCommon";

const AboutUser: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="profile-about">
      <div className="card-title">
        <h3>{About}</h3>
        <h5>{IntroMySelf}</h5>
        <div className="settings">
          <div className="setting-btn">
            <a href={Href} onClick={toggle}>
              <DynamicFeatherIcon iconName="Edit2" className="icon icon-dark stroke-width-3 iw-11 ih-11"/>
            </a>
          </div>
        </div>
      </div>
      <div className="about-content">
        <ul>
          {aboutUser.map((data, index) => (
            <li key={index}>
              <div className="icon">
                {data.icon ? (<DynamicFeatherIcon iconName={data.icon} className="iw-18 ih-18"/>) : (
                  <SvgIconCommon iconName={data.iconName ? data.iconName : ""}/>
                )}
              </div>
              <div className="details">
                <h5>{data.description}</h5>
                <h6>{data.time}</h6>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="about-footer">
        <ul>
          {socialMediaDetail.map((data, index) => (
            <li className={data.className} key={index}>
              <a href={Href}> <SvgIconCommon iconName={data.icon} /></a>
            </li>
          ))}
        </ul>
      </div>
      <EditCoverModal isOpen={isOpen} toggle={toggle} />
    </div>
  );
};

export default AboutUser;
