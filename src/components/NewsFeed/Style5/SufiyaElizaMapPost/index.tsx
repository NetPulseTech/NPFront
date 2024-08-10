import CommonLikePanel from "@/Common/CommonLikePanel";
import CommonPostReact from "@/Common/CommonPostReact";
import CommonUserHeading from "@/Common/CommonUserHeading";
import DetailBox from "@/Common/DetailBox";
import { MapHeading, MapSpan } from "../../../../utils/constant";
import { FC } from "react";
import MapImage from "./MapImage";

const SufiyaElizaMapPost: FC = () => {
  return (
    <div className="post-wrapper">
      <CommonUserHeading image={1} id="SufiyaElizaMapPost" />
      <div className="post-details ratio_55">
        <MapImage />
        <DetailBox heading={MapHeading} span={MapSpan} />
        <CommonLikePanel />
        <CommonPostReact />
      </div>
    </div>
  );
};

export default SufiyaElizaMapPost;
