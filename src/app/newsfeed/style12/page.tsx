"use client";
import CreatePost from "@/Common/CreatePost";
import ShowMorePostIcon from "@/Common/ShowMorePostIcon/ShowMorePostIcon";
import { styleOneMoreComponent } from "@/Data/NewsFeed";
import SufiyaElizaSecondPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaSecondPost";
import SufiyaElizaThirdPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaThirdPost";
import ContentRight from "@/components/NewsFeed/Style1/ContentRight";
import ContentLeft from "@/components/NewsFeed/Style1/LeftContent";
import StorySection from "@/components/NewsFeed/Style1/StorySection";
import SufiyaElizaTwoPhotoPost from "@/components/NewsFeed/Style4/SufiyaElizaTwoPhotoPost";
import CommonLayout from "@/layout/CommonLayout";
import { RootState } from "@/redux-toolkit/store";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";

const NewsFeedStyle12: FC = () => {
  const level = useSelector((state: RootState) => state.ShowMorePostSlice.style7);
  return (
    <CommonLayout mainClass="custom-padding newsfeed-style" ConversationPanelClassName="panel-xs" loaderName="style12">
      <div className="page-center">
        <StorySection />
        <Container fluid className="section-t-space px-0 layout-default">
          <div className="page-content">
            <ContentLeft />
            <div className="content-center">
              <CreatePost />
              <div className="overlay-bg" />
              <div className="post-panel infinite-loader-sec section-t-space">
                <SufiyaElizaThirdPost fourthPost={41} userImage={1} />
                <SufiyaElizaTwoPhotoPost diffrentImage/>
                <SufiyaElizaSecondPost userImage={1} />
                <SufiyaElizaThirdPost fourthPost={42} userImage={1} />
                <SufiyaElizaSecondPost userImage={1} />
                {styleOneMoreComponent.map((data, index) => (level.includes(index) ? data : ""))}
              </div>
              <ShowMorePostIcon dataLength={styleOneMoreComponent.length} value="style12" />
            </div>
            <ContentRight />
          </div>
        </Container>
      </div>
    </CommonLayout>
  );
};

export default NewsFeedStyle12;
