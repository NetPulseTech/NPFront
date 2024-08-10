import { Container } from "reactstrap";
import AboutUser from "../AboutUser";
import FriendSuggestion from "@/components/NewsFeed/Style1/LeftContent/FriendSuggestion";
import LikePage from "@/components/NewsFeed/Style1/LeftContent/LikePage";
import CreatePost from "@/Common/CreatePost";
import SufiyaElizaFirstPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaFirstPost";
import SufiyaElizaMultiplePost from "@/components/NewsFeed/Style3/ContentCenter/SufiyaElizaMultiplePost";
import SufiyaElizaSecondPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaSecondPost";
import SufiyaElizaThirdPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaThirdPost";
import CollegeMeetCard from "../CollegeMeetCard";
import Gallery from "@/components/NewsFeed/Style1/ContentRight/Gallery";
import ActivityFeeds from "../ActivityFeeds";
import EventsCard from "@/components/NewsFeed/Style1/ContentRight/EventsCard";
import WorldWideTrend from "../WorldWideTrend";

const TimeLineTabContent: React.FC = () => {
  return (
    <Container fluid>
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
              <SufiyaElizaMultiplePost moreImage diffrentImage userImage={14} main={40} second={41} third={42}/>
              <SufiyaElizaSecondPost userImage={10} />
              <SufiyaElizaThirdPost
                userImage={1}
                iframeLink="https://giphy.com/embed/xl2zRzM8sVo3td58kS"
              />
              <SufiyaElizaSecondPost userImage={15} />
              <SufiyaElizaSecondPost userImage={15} />
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
  );
};

export default TimeLineTabContent;
