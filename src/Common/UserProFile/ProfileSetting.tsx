import { EditProfile, Href, ViewProfile } from "../../utils/constant";
import { FC, useState } from "react";
import DynamicFeatherIcon from "../DynamicFeatherIcon";

const ProfileSetting: FC = () => {
  const [showSetting, setShowSetting] = useState(false);

  return (
    <div className="profile-setting">
      <div className="setting-btn refresh">
        <a href={Href} className="d-flex">
          <DynamicFeatherIcon iconName="RotateCw" className="icon icon-theme stroke-width-3 iw-11 ih-11"/>
        </a>
      </div>
      <div className="setting-btn setting setting-dropdown">
        <div className="btn-group custom-dropdown arrow-none dropdown-sm">
          <a href={Href} className={`d-flex ${showSetting ? "show" : ""}`}>
            <DynamicFeatherIcon iconName="Sun" className="icon icon-theme stroke-width-3 iw-11 ih-11" onClick={() => setShowSetting(!showSetting)}/>
          </a>
          <div
            className={`dropdown-menu dropdown-menu-right custom-dropdown ${showSetting ? "show" : ""}`}
            style={{ position: "absolute", inset: "0px auto auto 0px", margin: 0, transform: "translate(0px, 13px)"}}
          >
            <ul>
              <li>
                <a href={Href}><DynamicFeatherIcon iconName="Edit" className="icon-font-light iw-16 ih-16"/>{EditProfile}</a>
              </li>
              <li>
                <a href={Href}><DynamicFeatherIcon iconName="User" className="icon-font-light iw-16 ih-16"/>{ViewProfile}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
