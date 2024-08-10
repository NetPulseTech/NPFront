import { Col, Container, Row } from "reactstrap";
import LoaderHoc from "../../utils/LoaderHoc";
import CommonLayoutHeader from "../CommonLayout/CommonLayoutHeader";
import LayoutSideBar from "../CommonLayout/LayoutSideBar";
import { LoadingLoaderProps } from "../LayoutTypes";
import ConversationPanel from "./common/ConversationPanel";
import EventCategory from "./components/EventCategory";
import EventCover from "./components/EventCover";
import EventSection from "./components/EventSection";

const EventSkelton: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <CommonLayoutHeader headerClassName="" />
      <Container fluid className={`page-body custom-padding event-page`}>
        <LayoutSideBar sideBarClassName="" />
        <div className="page-center">
          <EventCover />
          <Row className="event-body">
            <Col xl="6">
              <EventSection />
              <EventCategory />
            </Col>
            <Col xl="6">
              <div className="calender-section custom-calender section-t-space  section-b-space">
                <div className="event-bottom">
                  <div className="event-content">
                    <h3>
                      <span></span>
                    </h3>
                    <p>
                      <span></span>
                    </p>
                    <h6></h6>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <ConversationPanel />
      </Container>
    </div>
  );
};

export default LoaderHoc(EventSkelton);
