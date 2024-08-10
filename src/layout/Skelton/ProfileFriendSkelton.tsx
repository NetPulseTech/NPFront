import CommonLayoutHeader from "@/layout/CommonLayout/CommonLayoutHeader";
import { LoadingLoaderProps } from "@/layout/LayoutTypes";
import LoaderHoc from "@/utils/LoaderHoc";
import { Col, Container, Row } from "reactstrap";
import LayoutSideBar from "../CommonLayout/LayoutSideBar";
import ConversationPanel from "./common/ConversationPanel";
import ProfileTopCommon from "./common/ProfileTopCommon";
import AboutProfile from "./components/AboutProfile";
import ProfileCenterContent from "./components/ProfileCenterContent";
import { dynamicNumber } from "../../utils/DynamicNumberArray";

const ProfileFriendSkelton: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <CommonLayoutHeader headerClassName="" />
      <Container
        fluid
        className={`page-body custom-padding profile-page profile-page-friend`}
      >
        <LayoutSideBar sideBarClassName="" />
        <div className="page-center">
          <ProfileTopCommon />
          <Container fluid className="section-t-space px-0">
            <div className="page-content">
              <div className="content-center w-100">
                <div className="friend-list-box section-b-space">
                  <div className="card-title">
                    <h3 />
                  </div>
                  <Container fluid>
                    <div className="friend-list friend-page-list">
                      <ul>
                        {dynamicNumber(12).map((index) => (
                          <li key={index}>
                            <div className="profile-box friend-box">
                              <div className="profile-content">
                                <div className="image-section">
                                  <div className="profile-img">
                                    <div className="bg-loader" />
                                  </div>
                                </div>
                                <div className="profile-detail">
                                  <h2 />
                                  <h5 />
                                  <div className="counter-stats">
                                    <span />
                                  </div>
                                  <div className="ldr-btn btn" />
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Container>
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

export default LoaderHoc(ProfileFriendSkelton);
