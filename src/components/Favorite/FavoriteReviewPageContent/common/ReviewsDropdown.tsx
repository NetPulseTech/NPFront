import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Href } from "../../../../utils/constant";
import React, { FC, useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";

const ReviewsDropdown: FC = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  return (
    <div className="setting-btn ms-auto setting-dropdown no-bg">
      <Dropdown className="btn-group custom-dropdown arrow-none dropdown-sm" isOpen={dropDownOpen} toggle={() => setDropDownOpen(!dropDownOpen)}>
        <DropdownToggle color="transparent">
          <div>
            <DynamicFeatherIcon iconName="MoreHorizontal" className="icon icon-font-color iw-14"/>
          </div>
        </DropdownToggle>
        <DropdownMenu>
          <ul>
            <li>
              <a href={Href}>
                <DynamicFeatherIcon iconName="Bookmark" className="icon-font-light iw-16 ih-16"/>
                save post
              </a>
            </li>
            <li>
              <a href={Href}>
                <DynamicFeatherIcon iconName="Edit" className="icon-font-light iw-16 ih-16"/>
                edit post
              </a>
            </li>
            <li>
              <a href={Href}>
                <DynamicFeatherIcon iconName="XSquare" className="icon-font-light iw-16 ih-16"/>
                hide post
              </a>
            </li>
          </ul>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ReviewsDropdown;
