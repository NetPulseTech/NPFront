import { FC } from "react";
import PostImage from "./PostImage";
import DetailBox from "@/Common/DetailBox";
import { BirthdayHeading, BirthdaySpan } from "../../../../../../utils/constant";
import CommonLikePanel from "@/Common/CommonLikePanel";
import CommonPostReact from "@/Common/CommonPostReact";
import { PostDetailInterFace } from "../../../Style1Types";

const PostDetails: FC<PostDetailInterFace> = ({mainImage}) => {
  return (
    <div className="post-details">
      <PostImage mainImage={mainImage}  />
      <DetailBox heading={BirthdayHeading} span={BirthdaySpan} />
      <CommonLikePanel />
      <CommonPostReact />
    </div>
  );
};

export default PostDetails;
