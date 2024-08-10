import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Close, FriendRequest, Href } from "../../utils/constant";
import React, { FC, useState } from "react";
import DropdownContent from "../CommonLayout/CommonLayoutHeader/DropdownContent";
import HeaderMessage from "../CommonLayout/CommonLayoutHeader/HeaderMessage";
import DarkLight from "../CommonLayout/CommonLayoutHeader/DarkLight";
import Notification from "../CommonLayout/CommonLayoutHeader/Notification";
import UserProfile from "../CommonLayout/CommonLayoutHeader/UserProfile";

const RightSection: FC = () => {
  const [showFriendList, setShowFriendList] = useState(false);
  return (
    <div className="header-right">
      <ul className="option-list">
        <li className="header-btn home-btn d-sm-none d-block">
          <a className="main-link" href="index.html">
            <DynamicFeatherIcon iconName="Home" className="icon-light stroke-width-3 iw-16 ih-16"/>
          </a>
        </li>
        <li className="header-btn custom-dropdown dropdown-lg add-friend">
          <a className={`main-link ${showFriendList ? "show" : ""}`} href={Href}>
            <DynamicFeatherIcon iconName="UserPlus" className="icon-light stroke-width-3 iw-16 ih-16" onClick={() => setShowFriendList(!showFriendList)}/>
          </a>
          <div className={`dropdown-menu ${showFriendList ? "show" : ""}`}>
            <div className="dropdown-header">
              <span>{FriendRequest}</span>
              <div className="mobile-close" onClick={() => setShowFriendList(false)}>
                <h5>{Close}</h5>
              </div>
            </div>
            <DropdownContent />
          </div>
        </li>
        <HeaderMessage />
        <DarkLight />
        <Notification />
        <UserProfile />
      </ul>
    </div>
  );
};

export default RightSection;
