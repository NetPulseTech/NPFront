import CommonLikePanel from "@/Common/CommonLikePanel";
import CommonPostReact from "@/Common/CommonPostReact";
import CommonUserHeading from "@/Common/CommonUserHeading";
import DetailBox from "@/Common/DetailBox";
import { CelebrationNewAlbum, CelebrationSpan } from "../../../../utils/constant";
import { FC } from "react";
import { SufiyaElizaSecondPostInterFace } from "../Style1Types";

const SufiyaElizaSecondPost: FC<SufiyaElizaSecondPostInterFace> = ({userImage}) => {
  return (
    <div className="post-wrapper col-grid-box section-t-space d-block">
      <CommonUserHeading image={userImage} id="SufiyaElizaSecondPost" />
      <div className="post-details">
        <DetailBox heading={CelebrationNewAlbum} span={CelebrationSpan} />
        <CommonLikePanel />
        <CommonPostReact />
      </div>
    </div>
  );
};

export default SufiyaElizaSecondPost;
