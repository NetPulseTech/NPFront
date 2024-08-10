import { ChangeEvent, FC, Fragment, useState } from "react";
import { UserChatInterFace } from "../MessngerType";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import HideOption from "./HideOption";
import { Href } from '../../../utils/constant/index';
import Picker, { EmojiClickData } from 'emoji-picker-react';

const ChatHistory: FC<UserChatInterFace> = ({ user, setUserList }) => {
  const [showButton, setShowButton] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  
  const addEmoji = (emoji:EmojiClickData) => {
    setNewMessage(newMessage+emoji.emoji)
}

  const handleUpdateButton = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(event.target.value);
  };

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedTime = `${hours.toString().padStart(2, '0')}.${minutes.toString().padStart(2, '0')}`;


  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    if (newMessage.length > 1) {
      const receiverDynamicMessage = `Hey This is ${user?.userName}, Sorry I busy right now, I will text you later`;
      const updatedUserList = {
        receiverMessage: receiverDynamicMessage,
        senderMessage: newMessage,
      };
      setUserList((prevUserList) =>prevUserList.map((u) =>u.id === user?.id ? { ...u, messenger: [...u.messenger,updatedUserList] } : u));
    }
    setNewMessage("");
  };

  return (
    <div className="chat-history">
      <div className="avenue-messenger">
        <div className="chat">
          <div className="messages-content theme-scrollbar">
            {user?.messenger?.map((data, index) => (
              <Fragment key={index}>
                {data.senderMessage && (
                  <div className="message message-personal new">
                    {data.senderMessage}
                    <div className="timestamp">{formattedTime}</div>
                    <div className="checkmark-sent-delivered">✓</div>
                    <div className="checkmark-read">✓</div>
                  </div>
                )}
                {data.receiverMessage && (
                  <div className="message new">
                    {data.receiverMessage}
                    <div className="timestamp">{formattedTime}</div>
                    <div className="checkmark-sent-delivered">✓</div>
                    <div className="checkmark-read">✓</div>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
          <div className="message-box">
          <a href={Href}>
            <DynamicFeatherIcon iconName="Smile" className="icon icon-2 iw-14 ih-14" onClick={()=>setShowEmojiPicker(!showEmojiPicker)}/>
          </a>
          {showEmojiPicker ? (
            <Picker onEmojiClick={addEmoji}/>
          ) : null}
            <textarea
              onChange={handleUpdateButton}
              className="message-input emojiPicker"
              placeholder="Type message..."
              value={newMessage}
            />
            <div className={`add-extent ${showButton ? "show" : ""}`}>
              <DynamicFeatherIcon className="animated-btn" iconName="Plus" onClick={() => setShowButton(!showButton)}/>
              <HideOption />
            </div> 
            <a href="#" className="message-submit" onClick={handleSendMessage}>
              <DynamicFeatherIcon iconName="Send" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHistory;
