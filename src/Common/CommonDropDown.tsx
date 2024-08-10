import { FC, useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import DynamicFeatherIcon from "./DynamicFeatherIcon";
import { Href } from "../utils/constant";
import { CommonDropDownInterFace } from "./CommonInterFace";

const CommonDropDown: FC<CommonDropDownInterFace> = ({mainClassName,mainIcon,menuList}) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <Dropdown
      isOpen={dropDownOpen}
      toggle={() => setDropDownOpen(!dropDownOpen)}
      className="btn-group custom-dropdown arrow-none dropdown-sm"
    >
      <DropdownToggle color="transparent">
        <a className="d-flex" href={Href}>
          <DynamicFeatherIcon iconName={mainIcon} className={mainClassName} />
        </a>
      </DropdownToggle>
      <DropdownMenu>
        <ul>
          {menuList.map((data, index) => (
            <li key={index}>
              <a href={Href}>
                <DynamicFeatherIcon
                  iconName={data.icon}
                  className="icon-font-light iw-16 ih-16"
                />
                {data.title}
              </a>
            </li>
          ))}
        </ul>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CommonDropDown;
