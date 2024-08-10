import CommonLayoutHeader from "@/layout/CommonLayout/CommonLayoutHeader";
import { LoadingLoaderProps } from "@/layout/LayoutTypes";
import LoaderHoc from "@/utils/LoaderHoc";
import { Col, Container, Row } from "reactstrap";
import LayoutSideBar from "../CommonLayout/LayoutSideBar";
import ActivityFeed from "./common/ActivityFeed";
import BirthdayReminder from "./common/BirthdayReminder";
import ContentCenter from "./common/ContentCenter";
import ConversationPanel from "./common/ConversationPanel";
import GallerySection from "./common/GallerySection";
import LikePage from "./common/LikePage";
import ProfileBox from "./common/ProfileBox";
import ProfileTopCommon from "./common/ProfileTopCommon";
import SuggestionBox from "./common/SuggestionBox";
import { Href } from "../../utils/constant";
import { dynamicNumber } from "../../utils/DynamicNumberArray";

const PageList: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <CommonLayoutHeader headerClassName="" />
      <Container fluid className={`custom-padding page-body event-page`}>
        <LayoutSideBar sideBarClassName="" />
        <div className="page-center">
          <div className="event-cover light-cover">
            <div className="event-img bg-size">
              <div className="settings">
                <div className="setting-btn"></div>
                <div className="setting-btn setting-dropdown">
                  <div className=" btn-group custom-dropdown arrow-none dropdown-sm">
                    <a href={Href}></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Container fluid className="section-t-space px-0">
            <div className="page-content">
              <div className="content-center w-100">
                <div className="profile-menu ms-0 me-0">
                  <ul>
                    <li />
                    <li />
                    <li />
                    <li />
                    <li className="d-xl-none d-inline-block" />
                  </ul>
                  <ul className="right-menu d-xl-flex d-none">
                    <li />
                  </ul>
                </div>
                <div className="page-list-section section-t-space">
                  <Row>
                    {dynamicNumber(8).map((index) => (
                      <Col xl="3" lg="4" sm="6" key={index}>
                        <div className="list-box">
                          <div className="cover-img bg-size">
                            <div className="logo-img" />
                          </div>
                          <div className="list-content">
                            <div className="page-name">
                              <a href="#">
                                <h4 />
                              </a>
                              <h6 />
                            </div>
                            <div className="counter-stats">
                              <span />
                            </div>
                            <div className="bottom-btn">
                              <div className="ldr-btn btn" />
                              <div className="ldr-btn btn" />
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <ConversationPanel />
      </Container>
    </div>
  );
};

export default LoaderHoc(PageList);
