import { Media, Nav, NavItem, NavLink } from "reactstrap";
import UserHeader from "./UserHeader";
import CustomImage from "@/Common/CustomImage";
import { ImagePath } from "../../utils/constant";
import { FC } from "react";
import { ChatUsersInterFace } from "./MessngerType";

const ChatUsers: FC<ChatUsersInterFace> = ({ userList,activeTab,setActiveTab }) => {
  return (
    <div className="chat-users">
      <UserHeader />
      <Nav tabs>
        {userList.map((data, index) => (
          <NavItem key={index}>
            <NavLink className={activeTab === index + 1 ? "active" : ""}
              onClick={() => setActiveTab(index + 1)}>
              <Media className="list-media">
                <div className="story-img">
                  <div className="user-img bg-size blur-up lazyloaded">
                    <CustomImage src={`${ImagePath}/user/${index + 1}.jpg`} className="img-fluid blur-up bg-img lazyloaded" alt="user"/>
                  </div>
                </div>
                <Media body>
                  <h5>
                    {data.userName} <span>2.40 PM</span>
                  </h5>
                  <h6>online</h6>
                </Media>
              </Media>
              {data.count ? (
                <div className="chat">
                  <h6>{data.lastMessage}</h6>
                  <span className="count">{data.count}</span>
                </div>
              ) : (
                <h6>{data.lastMessage}</h6>
              )}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
};

export default ChatUsers;
