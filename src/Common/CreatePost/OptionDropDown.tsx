import { Href, Public } from "../../utils/constant";
import { FC, useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import DynamicFeatherIcon from "../DynamicFeatherIcon";
import { createPostDropDown } from "@/Data/common";

const OptionDropDown: FC = () => {
  const [postDropDown, setPostDropDown] = useState(false);

  return (
    <div className="setting-dropdown">
      <Dropdown isOpen={postDropDown} toggle={() => setPostDropDown(!postDropDown)} className="custom-dropdown arrow-none dropdown-sm btn--group">
        <DropdownToggle color="transparent">
          <h5> {Public} <DynamicFeatherIcon iconName="ChevronDown" className="iw-14" /></h5>
        </DropdownToggle>
        <DropdownMenu>
          <ul>
            {createPostDropDown.map((data, index) => (
              <li key={index}>
                <a href={Href}>
                  <DynamicFeatherIcon iconName={data.icon} className="icon-font-light iw-16 ih-16"/>
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default OptionDropDown;
