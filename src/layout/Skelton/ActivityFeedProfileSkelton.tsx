import CommonLayoutHeader from "@/layout/CommonLayout/CommonLayoutHeader";
import { LoadingLoaderProps } from "@/layout/LayoutTypes";
import LoaderHoc from "@/utils/LoaderHoc";
import { Col, Container, Row } from "reactstrap";
import LayoutSideBar from "../CommonLayout/LayoutSideBar";
import ConversationPanel from "./common/ConversationPanel";
import ProfileTopCommon from "./common/ProfileTopCommon";
import AboutProfile from "./components/AboutProfile";
import ProfileCenterContent from "./components/ProfileCenterContent";
import ActivityFeed from "./components/ActivityFeed";
import PostWrapper from "./common/PostWrapper";

const ActivityFeedProfileSkelton: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <CommonLayoutHeader headerClassName="" />
      <Container
        fluid
        className="custom-padding profile-page profile-page-friend page-body"
      >
        <LayoutSideBar sideBarClassName="" />
        <div className="page-center">
          <ProfileTopCommon />
          <Container fluid className="section-t-space px-0">
            <div className="page-content">
              <Col xs="5" className="content-left">
                <ActivityFeed />
              </Col>
              <Col xs="7" className="content-center  d-none d-xl-block">
                <div className="post-panel">
                  <PostWrapper />
                </div>
              </Col>
            </div>
            {/* <Row>
              <Col className="content-left res-full-width order-1" xs="4">
                <AboutProfile />
              </Col>
              <Col className="content-center" xl="8">
                <ProfileCenterContent />
              </Col>
            </Row> */}
          </Container>
        </div>
        <ConversationPanel />
      </Container>
    </div>
  );
};

export default LoaderHoc(ActivityFeedProfileSkelton);
