import CommonLayoutHeader from "@/layout/CommonLayout/CommonLayoutHeader";
import { LoadingLoaderProps } from "@/layout/LayoutTypes";
import LoaderHoc from "@/utils/LoaderHoc";
import { Container } from "reactstrap";
import LayoutSideBar from "../CommonLayout/LayoutSideBar";
import ConversationPanel from "./common/ConversationPanel";
import GallerySkelton from "./common/GallerySkelton";
import ProfileTopCommon from "./common/ProfileTopCommon";

const profileGallery: React.FC<LoadingLoaderProps> = ({ show }) => {
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
                <GallerySkelton />
              </div>
            </div>
          </Container>
        </div>
        <ConversationPanel />
      </Container>
    </div>
  );
};

export default LoaderHoc(profileGallery);
