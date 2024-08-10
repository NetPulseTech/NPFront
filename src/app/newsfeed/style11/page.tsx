"use client";
import CreatePost from "@/Common/CreatePost";
import SufiyaElizaSecondPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaSecondPost";
import SufiyaElizaThirdPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaThirdPost";
import StorySection from "@/components/NewsFeed/Style1/StorySection";
import GemixStore from "@/components/NewsFeed/Style3/ContentCenter/GemixStore";
import SufiyaElizaMultiplePost from "@/components/NewsFeed/Style3/ContentCenter/SufiyaElizaMultiplePost";
import WithUserLayout from "@/layout/WithUserLayout";
import { FC } from "react";
import { Col, Container, Row } from "reactstrap";

const NewsFeedStyle11: FC = () => {
  return (
    <WithUserLayout mainClassName="single-post custom-padding" loaderName="style11">
      <div className="page-center">
        <StorySection storyShow={3} />
        <Container fluid className="section-t-space  px-0">
          <div className="page-content">
            <div className="content-center content-full w-100">
              <Row>
                <Col xl="12">
                  <CreatePost />
                  <div className="overlay-bg" />
                  <div className="post-panel infinite-loader-sec section-t-space">
                    <SufiyaElizaThirdPost fourthPost={30} userImage={8} />
                    <GemixStore />
                    <SufiyaElizaThirdPost fourthPost={10} userImage={8} />
                    <SufiyaElizaSecondPost userImage={13} />
                    <SufiyaElizaMultiplePost moreImage diffrentImage userImage={12} main={40} second={41} third={42}/>
                    <SufiyaElizaSecondPost userImage={1} />
                    <SufiyaElizaThirdPost userImage={1} iframeLink="https://giphy.com/embed/xl2zRzM8sVo3td58kS"/>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </WithUserLayout>
  );
};

export default NewsFeedStyle11;
