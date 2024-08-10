import { FC, useEffect, useState } from "react";
import ChatUsers from "./ChatUsers";
import { messengerUserListData } from "@/Data/Messenger";
import { SingleUser } from "./MessngerType";
import ChatContent from "./ChatContent";

const MessengerSection: FC = () => {
  const [userList, setUserList] = useState<SingleUser[]>(messengerUserListData);
  const [activeTab, setActiveTab] = useState(1);
  const [selectedUser, setSelectedUser] = useState<SingleUser | null>(null);

  useEffect(() => {
    setSelectedUser(userList.find((user) => user.id === activeTab) || selectedUser);
  }, [activeTab,userList]);

  const handleChatBoxClose = () => {
    // Set activeTab to a value that corresponds to a tab you want to display as active after closing the chat box.
    // You can set it to 0 or any other appropriate value to ensure no tab is active.
    setActiveTab(0);
  };

  return (
    <section className="messenger-section">
      <ChatUsers userList={userList} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab !== 0 && (
        <ChatContent activeTab={activeTab} userList={selectedUser} setUserList={setUserList}   setActiveTab={setActiveTab} />
      )}
    </section>
  );
};

export default MessengerSection;
