import { FC } from "react";
import PostDetails from "./PostDetails";
import CommonUserHeading from "@/Common/CommonUserHeading";
import { SufiyaElizaFirstPostInterFace } from "../../Style1Types";

const SufiyaElizaFirstPost: FC<SufiyaElizaFirstPostInterFace> = ({mainImage,userImage,className}) => {
  return (
    <div className={`post-wrapper col-grid-box d-block section-t-space ${className ?className:""} `}>
      <CommonUserHeading image={userImage} id="SufiyaElizaFirstPost" />
      <PostDetails mainImage={mainImage} />
    </div>
  );
};

export default SufiyaElizaFirstPost;
