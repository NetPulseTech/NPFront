import CommonLikePanel from "@/Common/CommonLikePanel";
import CommonUserHeading from "@/Common/CommonUserHeading";
import DetailBox from "@/Common/DetailBox";
import React, { FC } from "react";
import CommonPostReact from "../../../../Common/CommonPostReact/index";
import { BirthdayHeading, BirthdaySpan } from "../../../../utils/constant";
import PostImages from "./PostImages";
import { SufiyaElizaMultiplePostInterFace } from "../../Style1/Style1Types";

const SufiyaElizaMultiplePost: FC<SufiyaElizaMultiplePostInterFace> = ({moreImage,diffrentImage,userImage,main,second,third}) => {
  return (
    <div className="post-wrapper col-grid-box section-t-space d-block">
      <CommonUserHeading image={userImage?userImage:1} id="SufiyaElizaMultiplePost" />
      <div className="post-details">
        <PostImages moreImage={moreImage} diffrentImage={diffrentImage} main={main }second={second}  third={third} />
        <DetailBox heading={BirthdayHeading} span={BirthdaySpan} />
        <CommonLikePanel />
        <CommonPostReact />
      </div>
    </div>
  );
};

export default SufiyaElizaMultiplePost;
