import CommonLayoutHeader from "@/layout/CommonLayout/CommonLayoutHeader";
import { LoadingLoaderProps } from "@/layout/LayoutTypes";
import LoaderHoc from "@/utils/LoaderHoc";
import { Container } from "reactstrap";
import ConversationPanel from "./common/ConversationPanel";
import FullSideBar from "./common/FullSideBar";
import StorySection from "./common/StorySection";
import ProfileBox from "./common/ProfileBox";
import BirthdayReminder from "./common/BirthdayReminder";
import GallerySection from "./common/GallerySection";
import ContentCenter from "./common/ContentCenter";
const Style3Skelton: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <CommonLayoutHeader headerClassName="" />
      <Container fluid className={`page-body  newsfeed-style1`}>
        <FullSideBar />
        <div className="page-center">
          <StorySection />
          <Container fluid className="section-t-space px-0">
            <div className="page-content">
              <ContentCenter/>
              <div className="content-left">
                <ProfileBox />
                <BirthdayReminder />
                <GallerySection />
              </div>
            </div>
          </Container>
        </div>

        <ConversationPanel />
      </Container>
    </div>
  );
};

export default LoaderHoc(Style3Skelton);
