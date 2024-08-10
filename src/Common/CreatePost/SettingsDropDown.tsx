import { FC, useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import DynamicFeatherIcon from "../DynamicFeatherIcon";
import { EditProfile, Href, ViewProfile } from "../../utils/constant";

const SettingsDropDown: FC = () => {
  const [postSetting, setPostSetting] = useState(false);
  return (
    <div className="settings">
      <div className="setting-btn  setting-dropdown no-bg">
        <Dropdown isOpen={postSetting} toggle={() => setPostSetting(!postSetting)} className="custom-dropdown arrow-none dropdown-sm btn-group">
          <DropdownToggle color="transparent">
            <div>
              <DynamicFeatherIcon iconName="MoreHorizontal" className="icon icon-font-color iw-14"/>
            </div>
          </DropdownToggle>
          <DropdownMenu>
            <ul>
              <li>
                <a href={Href}><DynamicFeatherIcon iconName="Edit" className="icon-font-light iw-16 ih-16"/>{EditProfile}</a>
              </li>
              <li>
                <a href={Href}><DynamicFeatherIcon iconName="User" className="icon-font-light iw-16 ih-16"/>{ViewProfile}</a>
              </li>
            </ul>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default SettingsDropDown;
