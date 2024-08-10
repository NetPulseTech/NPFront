import CreatePost from "@/Common/CreatePost";
import SufiyaElizaFirstPost from "../Style1/ContentCenter/SufiyaElizaFirstPost";
import SufiyaElizaSecondPost from "../Style1/ContentCenter/SufiyaElizaSecondPost";
import SufiyaElizaThirdPost from "../Style1/ContentCenter/SufiyaElizaThirdPost";
import SufiyaElizaTwoPhotoPost from "./SufiyaElizaTwoPhotoPost";
import { styleOneMoreComponent } from "@/Data/NewsFeed";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import ShowMorePostIcon from "@/Common/ShowMorePostIcon/ShowMorePostIcon";

const CenterContent: React.FC = () => {
  const level = useSelector((state: RootState) => state.ShowMorePostSlice.style4);
  return (
    <div className="content-center">
      <CreatePost />
      <div className="overlay-bg" />
      <div className="post-panel infinite-loader-sec section-t-space">
        <SufiyaElizaFirstPost mainImage={28} userImage={1} />
        <SufiyaElizaTwoPhotoPost />
        <SufiyaElizaSecondPost userImage={1} />
        <SufiyaElizaSecondPost userImage={1} />
        <SufiyaElizaSecondPost userImage={1} />
        <SufiyaElizaThirdPost fourthPost={2} userImage={1} />
        <SufiyaElizaSecondPost userImage={1} />
        {styleOneMoreComponent.map((data, index) => (level.includes(index) ? data : ""))}
      </div>
      <ShowMorePostIcon dataLength={styleOneMoreComponent.length} value="style4" />
    </div>
  );
};

export default CenterContent;
