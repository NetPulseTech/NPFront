import CustomImage from "@/Common/CustomImage";
import HoverMessage from "@/Common/HoverMessage";
import { ImagePath } from "../../../utils/constant";
import { SingleData, commonInterFace } from "@/layout/LayoutTypes";
import { FC, useEffect, useState } from "react";
import { Collapse, Media } from "reactstrap";
import ChatBoxCommon from "./common/ChatBoxCommon";
import CommonHeader from "./common/CommonHeader";
import useMobileSize from "@/utils/useMobileSize";


const CloseFriends: FC<commonInterFace> = ({ closeFriendsData,recentChats }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedUser, setSelectedUser] = useState<SingleData | null>(null);
  const [chatBox, setChatBox] = useState(false);
  const [userName, setUserName] = useState(closeFriendsData);
  const mobileSize = useMobileSize();

  useEffect(() => {
    if (userName !== null && selectedUser) {
      setSelectedUser(userName.find((x) => x.id === selectedUser.id) || selectedUser
      );
    }
  }, [userName, setUserName]);
  const handleOpenChatBox = (user: SingleData) => {setSelectedUser(user);setChatBox(true);};
  return (
    <div className="friend-section">
      <CommonHeader isOpen={isOpen} setIsOpen={setIsOpen} heading="close friend"/>
      <Collapse isOpen={isOpen} className="friend-list">
        <ul>
          {userName.map((data, index) => (
              <li key={index} className={`friend-box user${index + 1}`}>
                <Media onClick={() => handleOpenChatBox(data)}>
                  <a className={`popover-cls user-img bg-size blur-up lazyloaded `} id={`${recentChats?`recentChatsPopOver-${index+1}`:`PopOver-${index+1}`}`}>
                    <CustomImage src={`${ImagePath}/user-sm/${data.image}.jpg`} className="img-fluid blur-up lazyload bg-img" alt="user"/>
                    <span className={`available-stats`} />
                  </a>
                  <Media body>
                    <h5 className="user-name">{data.name}</h5>
                    <h6>alabma, USA</h6>
                  </Media>
                </Media>
                <HoverMessage placement={mobileSize ?"right":"top"} target={`${recentChats?`recentChatsPopOver-${index+1}`:`PopOver-${index+1}`}`} name={data.name} imagePath={`user-sm/${data.image}.jpg`} />
              </li>
          ))}
        </ul>
        {chatBox && selectedUser && (
          <ChatBoxCommon setChatBox={setChatBox} data={selectedUser} setUserName={setUserName} userName={userName} />
        )}
      </Collapse>
    </div>
  );
};

export default CloseFriends;
