import { LoadingLoaderProps } from "@/layout/LayoutTypes";
import LoaderHoc from "@/utils/LoaderHoc";
import { Container } from "reactstrap";
import CommonLayoutHeader from "../CommonLayout/CommonLayoutHeader";
import BirthdayReminder from "./common/BirthdayReminder";
import ConversationPanel from "./common/ConversationPanel";
import CreatePost from "./common/CreatePost";
import DifferentSideBar from "./common/DifferentSideBar";
import GallerySection from "./common/GallerySection";
import LikePage from "./common/LikePage";
import PostWrapper from "./common/PostWrapper";
import StorySection from "./common/StorySection";
const Style9Skelton: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <CommonLayoutHeader headerClassName="" />
      <Container fluid className={`page-body newsfeed-style5`}>
        <DifferentSideBar />
        <div className="page-center">
          <StorySection />
          <Container fluid className="section-t-space px-0">
            <div className="page-content">
              <div className="content-center">
                <CreatePost />
                <div className="overlay-bg" />
                <div className="post-panel section-t-space ">
                  <PostWrapper />
                  <PostWrapper className="section-t-space" />
                </div>
              </div>
              <div className="content-left">
                <BirthdayReminder />
                <GallerySection />
                <LikePage />
              </div>
            </div>
          </Container>
        </div>
        <ConversationPanel />
      </Container>
    </div>
  );
};

export default LoaderHoc(Style9Skelton);
