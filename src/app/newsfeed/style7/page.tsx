"use client";
import CreatePost from "@/Common/CreatePost";
import ShowMorePostIcon from "@/Common/ShowMorePostIcon/ShowMorePostIcon";
import { styleOneMoreComponent } from "@/Data/NewsFeed";
import SufiyaElizaFirstPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaFirstPost";
import SufiyaElizaSecondPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaSecondPost";
import SufiyaElizaThirdPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaThirdPost";
import BirthdayReminder from "@/components/NewsFeed/Style1/ContentRight/BirthdayReminder";
import EventsCard from "@/components/NewsFeed/Style1/ContentRight/EventsCard";
import Gallery from "@/components/NewsFeed/Style1/ContentRight/Gallery";
import YourGames from "@/components/NewsFeed/Style1/ContentRight/YourGames";
import StorySection from "@/components/NewsFeed/Style1/StorySection";
import SufiyaElizaMultiplePost from "@/components/NewsFeed/Style3/ContentCenter/SufiyaElizaMultiplePost";
import LeftContent from "@/components/NewsFeed/Style6/LeftContent";
import HorizontalSidebar from "@/layout/HorizontalSidebar";
import { RootState } from "@/redux-toolkit/store";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";

const NewsFeedStyle7: FC = () => {
  useEffect(() => {
    document.body.classList.add("bg-smile");

    return () => {
      document.body.classList.remove("bg-smile");
    };
  }, []);
  const level = useSelector((state: RootState) => state.ShowMorePostSlice.style7);

  return (
      <HorizontalSidebar loaderName="style7">
        <Container fluid className="page-body  custom-padding newsfeed-style4">
          <div className="page-center">
            <StorySection />
            <Container fluid className="section-t-space px-0 layout-default">
              <div className="page-content">
                  <LeftContent padding />
                <div className="content-center">
                  <CreatePost />
                  <div className="overlay-bg" />
                  <div className="post-panel infinite-loader-sec section-t-space">
                    <SufiyaElizaFirstPost mainImage={34} userImage={1} />
                    <SufiyaElizaMultiplePost moreImage diffrentImage main={32} second={33} third={31} />
                    <SufiyaElizaSecondPost userImage={1} />
                    <SufiyaElizaFirstPost mainImage={30} userImage={1} />
                    <SufiyaElizaSecondPost userImage={1} />
                    {styleOneMoreComponent.map((data, index) => (level.includes(index) ? data : ""))}
                  </div>
                    <ShowMorePostIcon dataLength={styleOneMoreComponent.length} value="style7" />
                </div>
                <div className="content-right">
                  <BirthdayReminder />
                  <Gallery />
                  <div className="sticky-top">
                    <EventsCard eventImage={1} />
                    <YourGames />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </Container>
      </HorizontalSidebar>
  );
};

export default NewsFeedStyle7;
