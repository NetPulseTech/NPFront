import { FC } from "react";
import { ChatContentInterFace } from "./MessngerType";
import { TabContent, TabPane } from "reactstrap";
import CommonChatBox from "./Common/CommonChatBox";

const ChatContent: FC<ChatContentInterFace> = ({ activeTab, userList,setUserList,setActiveTab }) => {
  return (
    <div className="chat-content">
      <TabContent activeTab={activeTab}>
        <TabPane tabId={activeTab}>
            <CommonChatBox userList={userList} setUserList={setUserList} setActiveTab={setActiveTab} />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ChatContent;
