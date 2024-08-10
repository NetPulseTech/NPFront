import { Container } from "reactstrap";
import LoaderHoc from "../../utils/LoaderHoc";
import CommonLayoutHeader from "../CommonLayout/CommonLayoutHeader";
import LayoutSideBar from "../CommonLayout/LayoutSideBar";
import { LoadingLoaderProps } from "../LayoutTypes";
import ConversationPanel from "./common/ConversationPanel";
import BirthdayCenterContent from "./components/BirthdayCenterContent";
import BirthdayLeftContent from "./components/BirthdayLeftContent";

const BirthDaySkelton: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <CommonLayoutHeader headerClassName="" />
      <Container fluid className={`page-body custom-padding birthday-page`}>
        <LayoutSideBar sideBarClassName="" />
        <div className="page-center">
          <div className="event-cover light-cover">
            <div className="event-img"></div>
          </div>
          <Container fluid className="section-t-space px-0">
            <div className="page-content">
              <BirthdayCenterContent />
              <BirthdayLeftContent />
            </div>
          </Container>
        </div>
        <ConversationPanel />
      </Container>
    </div>
  );
};

export default LoaderHoc(BirthDaySkelton);
