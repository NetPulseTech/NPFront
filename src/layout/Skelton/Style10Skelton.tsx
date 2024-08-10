import { LoadingLoaderProps } from "@/layout/LayoutTypes";
import LoaderHoc from "@/utils/LoaderHoc";
import { Col, Container, Row } from "reactstrap";
import CommonLayoutHeader from "../CommonLayout/CommonLayoutHeader";
import SideBar from "../WithUserLayout/SideBar";
import ConversationPanel from "./common/ConversationPanel";
import CreatePost from "./common/CreatePost";
import LikePage from "./common/LikePage";
import PostWrapper from "./common/PostWrapper";

const Style10Skelton: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <CommonLayoutHeader headerClassName="" />
      <Container fluid className="page-body newsfeed-style6">
        <div className="panel-sidebar">
          <div className="sticky-cls">
            <SideBar />
            <LikePage />
          </div>
        </div>
        <div className="page-center">
          <Container fluid className="px-0">
            <div className="page-content">
              <div className="content-center content-full w-100">
                <Row>
                  <Col xl="6">
                    <CreatePost />
                    <div className="overlay-bg" />
                    <div className="post-panel section-t-space ">
                      <PostWrapper />
                      <PostWrapper className="section-t-space" />
                    </div>
                  </Col>
                  <Col xl="6">
                    <div className="post-panel ">
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

export default LoaderHoc(Style10Skelton);
