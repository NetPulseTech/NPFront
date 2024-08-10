import CreatePost from "@/Common/CreatePost";
import SufiyaElizaThirdPost from "../../Style1/ContentCenter/SufiyaElizaThirdPost";
import SufiyaElizaFirstPost from "../../Style1/ContentCenter/SufiyaElizaFirstPost";
import SufiyaElizaSecondPost from "../../Style1/ContentCenter/SufiyaElizaSecondPost";
import GemixStore from "./GemixStore";
import SufiyaElizaMultiplePost from "./SufiyaElizaMultiplePost";
import { styleTwoMoreComponent } from "@/Data/NewsFeed";
import ShowMorePostIcon from "@/Common/ShowMorePostIcon/ShowMorePostIcon";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";

const ContentCenter = () => {
  const level = useSelector((state: RootState) => state.ShowMorePostSlice.style3);

  return (
    <div className="content-center">
      <CreatePost />
      <div className="post-panel infinite-loader-sec section-t-space">
        <SufiyaElizaThirdPost userImage={1} iframeLink="https://giphy.com/embed/dSdoQogGblKnid5Wb3"/>
        <GemixStore/>
        <SufiyaElizaThirdPost fourthPost={2} userImage={1} />
        <SufiyaElizaFirstPost mainImage={3} userImage={1} />
        <SufiyaElizaMultiplePost main={4} second={5} third={6}  />
        {styleTwoMoreComponent.map((data, index) => (level.includes(index) ? data : ""))}
      </div>
      <ShowMorePostIcon dataLength={styleTwoMoreComponent.length} value="style3" />
    </div>
  );
};

export default ContentCenter;
