import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { FC } from "react";
import CommonDropDown from "../../../../Common/CommonDropDown";
import { headerDropDownData } from "@/Data/Weather";
interface CommonHeaderInterFace {
  tittle: string;
}
const CommonHeader: FC<CommonHeaderInterFace> = ({ tittle }) => {
  return (
    <div className="card-title">
      <h3>{tittle}</h3>
      <div className="settings">
        <div className="setting-btn">
          <a href="#" className="d-flex">
            <DynamicFeatherIcon
              iconName="RotateCw"
              className="icon icon-dark stroke-width-3 iw-11 ih-11"
            />
          </a>
        </div>
        <div className="setting-btn setting-dropdown">
          <CommonDropDown
            mainIcon="Sun"
            mainClassName="icon-dark stroke-width-3 iw-12 ih-12"
            menuList={headerDropDownData}
          />
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;
