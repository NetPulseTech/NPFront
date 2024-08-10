import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Href } from "../../utils/constant";
import { LoadingLoaderProps } from "@/layout/LayoutTypes";
import LoaderHoc from "@/utils/LoaderHoc";
import { Col, Container, Row } from "reactstrap";
import BrandLogo from "../CommonLayout/CommonLayoutHeader/BrandLogo";
import SearchBox from "../CommonLayout/CommonLayoutHeader/SearchBox";
import RightSection from "../HorizontalSidebar/RightSection";
import CreatePost from "./common/CreatePost";
import LikePage from "./common/LikePage";
import PostWrapper from "./common/PostWrapper";
import ProfileBox from "./common/ProfileBox";
import StorySection from "./common/StorySection";
import SuggestionBox from "./common/SuggestionBox";
const Style8Skelton: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <header>
        <div className="mobile-fix-menu" />
        <Container fluid className="custom-padding">
          <div className="header-section">
            <div className="header-left">
              <a href={Href} className="nav-sidebar me-3 d-flex">
                <DynamicFeatherIcon
                  iconName="Menu"
                  className="icon-light stroke-width-3 iw-16 ih-16"
                />
              </a>
              <BrandLogo />
              <SearchBox />
            </div>
            <RightSection />
          </div>
        </Container>
      </header>
      <Container
        fluid
        className={`page-body custom-padding newsfeed-style3 width-style`}
      >
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
        <div className="page-content content-sidebar m-0">
          <div className="content-left p-0">
            <ProfileBox />
            <SuggestionBox />
            <div className="sticky-top">
              <LikePage />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoaderHoc(Style8Skelton);
