import { useState } from "react";
import { Album, Href, Post } from "../../utils/constant/index";
import CreatePostHeader from "./CreatePostHeader";
import { Button, Input } from "reactstrap";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import OptionsInputs from "./OptionsInputs";
import { createPostData } from "@/Data/common";

const CreatePost = () => {
  const colorList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [writePost, setWritePost] = useState(false);
  const [showPostButton, setShowPostButton] = useState(false);
  const [postClass, setPostClass] = useState("");
  const [optionInput, setOptionInput] = useState("");

  const handleShowPost = (value: string) => {
    setWritePost(true);
    setShowPostButton(true);
    setPostClass(value);
  };
  return (
    <div className="create-post">
      <CreatePostHeader writePost={writePost} setShowPostButton={setShowPostButton}/>
      <div className="create-bg">
        <div className={`bg-post ${postClass} ${writePost ? "d-block" : ""} `}>
          <div className="input-sec">
            <Input type="text" className="enable" placeholder="write something here.."/>
            <div className="close-icon" onClick={() => setWritePost(false)}>
              <a href={Href}>
                <DynamicFeatherIcon iconName="X" className="iw-20 ih-20" />
              </a>
            </div>
          </div>
        </div>
        <ul className="gradient-bg theme-scrollbar">
          {colorList.map((data, index) => (
            <li key={index} onClick={() => handleShowPost(`gr-${data}`)} className={`gr-${data}`}/>
          ))}
        </ul>
      </div>
      <OptionsInputs OptionsInput={optionInput} setOptionInput={setOptionInput} />
      <ul className="create-btm-option">
        <li>
          <Input className="choose-file" type="file" />
          <h5>
            <DynamicFeatherIcon iconName="Camera" className="iw-14" />{Album}
          </h5>
        </li>
        {createPostData.map((data, index) => (
          <li key={index} onClick={()=>setOptionInput(data.value)} >
            <h5>
              <DynamicFeatherIcon iconName={data.icon} className={data.tittle === "feelings & acitivity" ? "iw-14" : "iw-15"}/>
              {data.tittle}
            </h5>
          </li>
        ))}
      </ul>
      <div className={`post-btn ${showPostButton ? "d-block" : "d-none"}  `}>
        <Button>{Post}</Button>
      </div>
    </div>
  );
};

export default CreatePost;
