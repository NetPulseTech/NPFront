import CommonLikePanel from "@/Common/CommonLikePanel";
import CommonPostReact from "@/Common/CommonPostReact";
import CommonUserHeading from "@/Common/CommonUserHeading";
import DetailBox from "@/Common/DetailBox";
import { CelebrationNewAlbum, CelebrationSpan, ImagePath } from "../../../../utils/constant";
import Image from "next/image";
import { FC } from "react";
import { SufiyaElizaThirdPostInterface } from "../Style1Types";


const SufiyaElizaThirdPost: FC<SufiyaElizaThirdPostInterface> = ({fourthPost,userImage,iframeLink}) => {
  return (
    <div className="post-wrapper col-grid-box section-t-space d-block">
      <CommonUserHeading image={userImage} id="SufiyaElizaThirdPost" />
      <div className="post-details">
        <div className="img-wrapper">
          {fourthPost ? (
            <Image src={`${ImagePath}/post/${fourthPost}.jpg`} className="img-fluid blur-up lazyloaded" alt="image" width={523} height={542} />
          ) : (
            <div
              style={{ width: "100%", height: 0, paddingBottom: "56%", position: "relative",}}
            >
              <iframe 
                src={iframeLink}
                style={{ position: "absolute" }} 
                className="giphy-embed w-100 h-100"
                allowFullScreen/>
            </div>
          )}
        </div>
        <DetailBox heading={CelebrationNewAlbum} span={CelebrationSpan} />
        <CommonLikePanel />
        <CommonPostReact />
      </div>
    </div>
  );
};

export default SufiyaElizaThirdPost;
