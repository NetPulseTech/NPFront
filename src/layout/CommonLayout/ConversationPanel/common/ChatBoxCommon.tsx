import { useState, Dispatch, SetStateAction, useEffect } from 'react';
import { Href, ImagePath } from "../../../../utils/constant/index";
import { FC } from "react";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Input } from "reactstrap";
import { SingleData } from "@/layout/LayoutTypes";
interface ChatBoxCommonInterFace {
  setChatBox: (value: boolean) => void;
  data: SingleData;
  setUserName:Dispatch<SetStateAction<SingleData[]>>
  userName:SingleData[]
}
const ChatBoxCommon: FC<ChatBoxCommonInterFace> = ({ setChatBox, data,setUserName }) => {

  const [showOption, setShowOption] = useState(false);
  const [smallChat, setSmallChat] = useState(false);
  const [newMessage, setNewMessage] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (newMessage.trim() !== '') {
        setNewMessage('');
        setUserName((prevCloseFriends) =>
        prevCloseFriends.map((friend) =>
          friend.id === data.id ? { ...friend, message: [...friend.message, newMessage] }: friend
        )
      );
      }
    }
  };
  useEffect(() => {
    
  }, [handleKeyPress,setUserName])
  
  return (
    <div className="chat-box " style={{ right: 370 }}>
      <a href={Href} className="chat-header">
        <div className="name">
          <div
            className="user-img"
            style={{backgroundImage: `url(${ImagePath}/user-sm/${data.image}.jpg)`,}}
          >
            <span className={`available-stats ${data.message.length > 1? "online":"" }`} />
          </div>
          <span>{data.name}</span>
        </div>
        <div className="menu-option">
          <ul>
            <li onClick={() => setSmallChat(!smallChat)}>
              <img src="../assets/svg/video.svg" />
            </li>
            <li onClick={() => setSmallChat(!smallChat)}>
              <img src="../assets/svg/phone.svg" />
            </li>
            <li onClick={() => setSmallChat(!smallChat)}>
              <img src="../assets/svg/settings.svg" />
            </li>
            <li className="close-chat" onClick={() => setChatBox(false)}>
              <img src="../assets/svg/x.svg" />
            </li>
          </ul>
        </div>
      </a>
      <div className={`chat-wrap ${smallChat ? "d-none" : ""}`}>
        <div className="chat-body">
          {data.message.map((data, index) => (
            <div key={index} className="msg-right">
              <span>{data}</span>
            </div>
          ))}
          <div className="msg_push" />
        </div>
        <div className="chat-footer">
          
          <Input
        type="text"
        value={newMessage}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="type your message here.."
        className="chat-input form-control emojiPicker"
      />
          <div className={`add-extent  ${showOption ? "show" : ""}`}>
            <DynamicFeatherIcon iconName="PlusCircle" className="animated-btn " onClick={() => setShowOption(!showOption)}/>
            <div className="options">
              <ul>
                <li>
                  <img src="../assets/svg/image.svg" />
                </li>
                <li>
                  <img src="../assets/svg/paperclip.svg" />
                </li>
                <li>
                  <img src="../assets/svg/camera.svg" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxCommon;
