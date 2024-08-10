import { LoadingLoaderProps } from "@/layout/LayoutTypes";
import LoaderHoc from "@/utils/LoaderHoc";
import { Col, Container, Row } from "reactstrap";
import BrandLogo from "../CommonLayout/CommonLayoutHeader/BrandLogo";
import SearchBox from "../CommonLayout/CommonLayoutHeader/SearchBox";
import HeaderCenter from "../HorizontalSidebar/HeaderCenter";
import RightSection from "../HorizontalSidebar/RightSection";
import ConversationPanel from "./common/ConversationPanel";
import LikePage from "./common/LikePage";
import PostWrapper from "./common/PostWrapper";
import ProfileBox from "./common/ProfileBox";
import StorySection from "./common/StorySection";
import SuggestionBox from "./common/SuggestionBox";
import CreatePost from "./common/CreatePost";
const Style6Skelton: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <header className="header-menu">
        <div className="mobile-fix-menu" />
        <Container fluid className="custom-padding">
          <div className="header-section">
            <div className="header-left">
              <BrandLogo />
              <SearchBox />
            </div>
            <HeaderCenter />
            <RightSection />
          </div>
        </Container>
      </header>
      <Container fluid className={`page-body  custom-padding newsfeed-style3`}>
        <div className="page-content content-sidebar m-0">
          <div className="content-left p-0">
            <ProfileBox />
            <SuggestionBox />
            <LikePage />
          </div>
        </div>
        <div className="page-center">
          <StorySection />
          <Container fluid className="section-t-space px-0">
            <div className="page-content">
              <div className="content-center content-full">
                <Row>
                  <Col xl="6">
                    <CreatePost />
                    <div className="overlay-bg" />
                    <div className="post-panel section-t-space">
                      <PostWrapper />
                      <PostWrapper className="section-t-space" />
                    </div>
                  </Col>
                  <Col xl="6">
                    <div className="post-panel">
                      <PostWrapper />
                      <PostWrapper className="section-t-space" />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </div>
        <ConversationPanel />
      </Container>
    </div>
  );
};

export default LoaderHoc(Style6Skelton);
