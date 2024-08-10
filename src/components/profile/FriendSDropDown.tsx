import {AllFriends,CloseFriends,Filter,Href,OfficeFriends} from "../../utils/constant";
import React, { FC, useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";

const FriendSDropDown: FC = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const toggleDropDown = () => setDropDownOpen(!dropDownOpen);

  return (
    <div className="mx-2 setting-dropdown">
      <Dropdown isOpen={dropDownOpen} toggle={toggleDropDown} className="btn-group custom-dropdown arrow-none dropdown-sm">
        <DropdownToggle color="transparent">
          <a href={Href}>{Filter}</a>
        </DropdownToggle>
        <DropdownMenu>
          <ul>
            <li className="active"><a href={Href}>{AllFriends}</a></li>
            <li><a href={Href}> {CloseFriends}</a></li>
            <li><a href={Href}>{OfficeFriends}</a></li>
          </ul>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default FriendSDropDown;
