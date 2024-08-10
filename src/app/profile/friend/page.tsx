"use client";
import CreatePost from "@/Common/CreatePost";
import SufiyaElizaFirstPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaFirstPost";
import SufiyaElizaSecondPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaSecondPost";
import SufiyaElizaThirdPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaThirdPost";
import EventsCard from "@/components/NewsFeed/Style1/ContentRight/EventsCard";
import Gallery from "@/components/NewsFeed/Style1/ContentRight/Gallery";
import FriendSuggestion from "@/components/NewsFeed/Style1/LeftContent/FriendSuggestion";
import LikePage from "@/components/NewsFeed/Style1/LeftContent/LikePage";
import SufiyaElizaMultiplePost from "@/components/NewsFeed/Style3/ContentCenter/SufiyaElizaMultiplePost";
import AboutUser from "@/components/profile/AboutUser";
import ActivityFeeds from "@/components/profile/ActivityFeeds";
import CollegeMeetCard from "@/components/profile/CollegeMeetCard";
import FriendSectionPageCover from "@/components/profile/FriendSectionPageCover";
import WorldWideTrend from "@/components/profile/WorldWideTrend";
import CommonLayout from "@/layout/CommonLayout";
import ProfileMenu from "@/layout/ProfileLayout/ProfileMenu";
import { Container } from "reactstrap";

const FriendSection: React.FC = () => {
  return (
    <CommonLayout mainClass="custom-padding profile-page" loaderName="profileTimeLine">
      <div className="page-center">
        <FriendSectionPageCover />
        <ProfileMenu title="timeline" />
        <Container fluid className="section-t-space px-0 layout-default">
          <div className="page-content">
            <div className="content-left">
              <AboutUser />
              <FriendSuggestion mainClassName="d-xl-block d-none" />
              <div className="sticky-top d-xl-block d-none">
                <LikePage />
              </div>
            </div>
            <div className="content-center">
              <CreatePost />
              <div className="overlay-bg" />
              <div className="post-panel infinite-loader-sec section-t-space">
                <SufiyaElizaFirstPost mainImage={11} userImage={15} />
                <SufiyaElizaMultiplePost
                  moreImage
                  main={40}
                  second={41}
                  third={42}
                />
                <SufiyaElizaSecondPost userImage={10} />
                <SufiyaElizaThirdPost
                  userImage={1}
                  iframeLink="https://giphy.com/embed/xl2zRzM8sVo3td58kS"
                />
                <SufiyaElizaSecondPost userImage={1} />
                <SufiyaElizaSecondPost userImage={1} />
                <SufiyaElizaSecondPost userImage={10} />
              </div>
            </div>
            <div className="content-right d-xl-block d-none">
              <CollegeMeetCard />
              <Gallery />
              <ActivityFeeds />
              <div className="sticky-top">
                <EventsCard eventImage={12} diffrentPath="post" />
                <WorldWideTrend />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </CommonLayout>
  );
};

export default FriendSection;
