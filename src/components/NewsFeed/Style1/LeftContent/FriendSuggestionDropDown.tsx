import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { showFriendMenuData } from "@/Data/NewsFeed";
import { Href } from "../../../../utils/constant";
import { FC, useState } from "react";
import {  Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { DropDownProps } from "../Style1Types";

const FriendSuggestionDropDown: FC<DropDownProps> = ({darkIcon}) => {
  const [showFriendMenu, setShowFriendMenu] = useState(false);
  const showDropDown =()=>setShowFriendMenu(!showFriendMenu)

  return (
    <div className="setting-btn setting-dropdown">
      <Dropdown isOpen={showFriendMenu} className="custom-dropdown arrow-none dropdown-sm" toggle={showDropDown} >
        <DropdownToggle color="transparent">
        <a href={Href} className={`d-flex ${showFriendMenu ? "show" : ""}`}>
          <DynamicFeatherIcon iconName="Sun" className={`icon ${darkIcon ?"icon-dark":""} icon-theme stroke-width-3 iw-11 ih-11`} onClick={() => setShowFriendMenu(!showFriendMenu)}/>
        </a>
        </DropdownToggle>
        <DropdownMenu>
        <ul>
            {showFriendMenuData.map((data, index) => (
              <li key={index}>
                <a href={Href}><DynamicFeatherIcon iconName={data.icon} className="icon-font-light iw-16 ih-16"/>{data.detail}
                </a>
              </li>
            ))}
          </ul>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default FriendSuggestionDropDown;
