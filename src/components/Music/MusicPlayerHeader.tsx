import CommonDropDown from "@/Common/CommonDropDown";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { musicPlayerData } from "@/Data/music";
import React from "react";
import { Href } from '../../utils/constant/index';

const MusicPlayerHeader = () => {
  return (
    <div className="card-title">
      <h3>now playing</h3>
      <div className="settings">
        <div className="setting-btn">
          <a href={Href}>
            <DynamicFeatherIcon iconName="RotateCw" className="icon icon-dark iw-11 ih-11 stroke-width-3"/>
          </a>
        </div>
        <div className="setting-btn setting-dropdown">
          <CommonDropDown mainClassName="icon icon-dark iw-11 ih-11 stroke-width-3" mainIcon="Sun" menuList={musicPlayerData}/>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerHeader;
