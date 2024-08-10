import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { FC } from "react";
import { Href } from "../../../utils/constant/index";
import CommonDropDown from "@/Common/CommonDropDown";
import { gameDropDownData } from "@/Data/Games";

const TopGamesCardTitle: FC = () => {
  return (
    <div className="card-title">
      <h3>Top 5 games</h3>
      <div className="settings">
        <div className="setting-btn">
          <a href={Href} className="d-flex">
            <DynamicFeatherIcon iconName="RotateCw" className="icon icon-theme stroke-width-3 iw-11 ih-11"/>
          </a>
        </div>
        <div className="setting-btn setting-dropdown">
          <CommonDropDown mainClassName="icon-dark stroke-width-3 iw-12 ih-12" mainIcon="Sun" menuList={gameDropDownData}/>
        </div>
      </div>
    </div>
  );
};

export default TopGamesCardTitle;
