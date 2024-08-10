import CustomImage from "@/Common/CustomImage";
import React, { FC } from "react";
import { UserChatInterFace } from "../MessngerType";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Media } from "reactstrap";
import { ImagePath } from "../../../utils/constant";
import { Href } from '../../../utils/constant/index';
import ChatHistory from "./ChatHistory";

const UserChat: FC<UserChatInterFace> = ({ user, setUserList, setActiveTab }) => {
  return (
    <div className="user-chat">
      <div className="user-title">
        <div className="back-btn d-block d-sm-none " onClick={() => setActiveTab && setActiveTab(0)}>
          <DynamicFeatherIcon iconName="ArrowLeft" />
        </div>
        <Media className="list-media">
          <div className="story-img">
            <div className="user-img bg-size blur-up lazyloaded" >
              <CustomImage src={user ? `${ImagePath}/user/${user.id}.jpg` : ''} className="img-fluid blur-up lazyload bg-img" alt="user" />
            </div>
          </div>
          <Media body>
            <h5>{user?.userName}</h5>
            <h6>active 10m ago</h6>
          </Media>
        </Media>
        <div className="menu-option">
          <ul>
            <li>
              <a href={Href}>
                <DynamicFeatherIcon iconName="Phone" className="icon-dark" />
              </a>
            </li>
            <li>
              <a href={Href}>
                <DynamicFeatherIcon iconName="Video" className="icon-dark" />
              </a>

            </li>
            <li>
              <a href={Href}>
                <DynamicFeatherIcon iconName="Settings" className="icon-dark" />
              </a>
            </li>
            <li className="d-block d-lg-none info-user">
              <a href={Href}>
                <DynamicFeatherIcon iconName="Info" className="icon-dark" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ChatHistory user={user} setUserList={setUserList} />
    </div>
  );
};

export default UserChat;
