"use client";
import { FC, useEffect } from "react";
import HorizontalSidebar from "@/layout/HorizontalSidebar";
import SidebarPanel from "@/components/NewsFeed/Style8/SidebarPanel";
import { Col, Container, Row } from "reactstrap";
import StorySection from "@/components/NewsFeed/Style1/StorySection";
import CreatePost from "@/Common/CreatePost";
import GemixStore from "@/components/NewsFeed/Style3/ContentCenter/GemixStore";
import SufiyaElizaThirdPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaThirdPost";
import SufiyaElizaMultiplePost from "@/components/NewsFeed/Style3/ContentCenter/SufiyaElizaMultiplePost";
import SufiyaElizaMapPost from "@/components/NewsFeed/Style5/SufiyaElizaMapPost";
import SufiyaElizaFirstPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaFirstPost";
import SufiyaElizaSecondPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaSecondPost";
import UserProFile from "@/Common/UserProFile";
import FriendSuggestion from "@/components/NewsFeed/Style1/LeftContent/FriendSuggestion";
import LikePage from "@/components/NewsFeed/Style1/LeftContent/LikePage";
import WeatherSection from "@/components/NewsFeed/Style1/LeftContent/WeatherSection";
import useOutsideDropdown from "@/utils/useOutsideDropdown";


const NewsFeedStyle8: FC = () => {
  useEffect(() => {
    document.body.classList.add("bg-smile");
    return () => {
      document.body.classList.remove("bg-smile");
    };
  }, []);
  const { isComponentVisible, ref, setIsComponentVisible } =useOutsideDropdown(false);
  const toggleSideBar = () => setIsComponentVisible(!isComponentVisible);
  return (
    <HorizontalSidebar
      toggleMenu
      toggleSideBar={toggleSideBar}
      loaderName="style8"
    >
      <Container
        fluid
        className="page-body  custom-padding newsfeed-style3 width-style"
      >
        <div className="page-center">
          <StorySection storyShow={6} />
          <Container fluid className="section-t-space px-0">
            <div className="page-content">
              <div className="content-center content-full">
                <Row>
                  <Col xl="6">
                    <CreatePost />
                    <div className="overlay-bg" />
                    <div className="post-panel section-t-space">
                      <SufiyaElizaMultiplePost moreImage diffrentImage main={35} second={36} third={37}/>
                      <GemixStore />
                      <SufiyaElizaThirdPost fourthPost={2} userImage={1} />
                    </div>
                  </Col>
                  <Col xl="6">
                    <div className="post-panel">
                      <SufiyaElizaMapPost />
                      <SufiyaElizaFirstPost mainImage={38} userImage={1} />
                      <SufiyaElizaThirdPost userImage={1} iframeLink="https://giphy.com/embed/LMQb9Rpm7mZOVsOI5R"/>
                      <SufiyaElizaSecondPost userImage={1} />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </div>
        <div className="page-content content-sidebar m-0">
          <div className="content-left p-0">
            <UserProFile />
            <FriendSuggestion />
            <div className="sticky-top">
              <LikePage />
              <WeatherSection />
            </div>
          </div>
        </div>
      </Container>
      <div ref={ref} className={`sidebar-panel panel-lg fixed-sidebar theme-scrollbar ${ isComponentVisible ? "show" : "" }`}>
        <SidebarPanel />
      </div>
    </HorizontalSidebar>
  );
};

export default NewsFeedStyle8;
