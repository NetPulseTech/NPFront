import { ChangeEvent, FC, useState } from "react";
import { CommentSectionInterFace } from "../CommonInterFace";
import DynamicFeatherIcon from "../DynamicFeatherIcon";
import MainComment from "./MainComment";
import SubComment from "./SubComment";
import { LoadMoreReplies } from "../../utils/constant";
import { Input } from "reactstrap";
import { Href } from "../../utils/constant/index";
import Picker, {  EmojiClickData } from 'emoji-picker-react';

const CommentSection: FC<CommentSectionInterFace> = ({ showComment }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [messageInput, setMessageInput] = useState('');

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const addEmoji = (emoji:EmojiClickData) => {
    setMessageInput(messageInput+emoji.emoji)
}
  return (
    <div className="comment-section">
      <div className={`comments ${showComment ? "d-block" : ""}`}>
        <div className="main-comment">
          <MainComment message="Oooo Very Cute and Sweet Dog, happy birthday Cuty.... 🙂" id="firstComment" />
          <div className="sub-comment">
            <SubComment image={3} id="secondComment"  />
            <SubComment image={4} id="thirdComment" />
            <a href={Href} className="loader">
              <DynamicFeatherIcon iconName="RotateCw" className="iw-15 ih-15" />
              {LoadMoreReplies}
            </a>
          </div>
        </div>
        <div className="main-comment">
          <MainComment message="It’s party time, Sufiya..... and happy birthday cuty 🎉🎊" id="fourthComment" />
        </div>
      </div>
      <div className="reply">
        <div className="search-input input-style input-lg icon-right">
          <Input type="text" className="emojiPicker" placeholder="write a comment.." value={messageInput} onChange={(event: ChangeEvent<HTMLInputElement>)=>setMessageInput(event.target.value)}/>
          {showEmojiPicker ? (
            <Picker onEmojiClick={addEmoji}/>
          ) : null}
          <a href={Href}>
            <DynamicFeatherIcon iconName="Smile" className="icon icon-2 iw-14 ih-14" onClick={toggleEmojiPicker}/>
          </a>
          <a href={Href}>
            <DynamicFeatherIcon iconName="Camera" className="iw-14 ih-14 icon"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
