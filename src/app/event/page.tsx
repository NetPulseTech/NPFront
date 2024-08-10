"use client";
import Cover from "@/Common/Cover";
import Calender from "@/components/Event/Calender";
import CalenderBottom from "@/components/Event/CalenderBottom";
import EventCategory from "@/components/Event/EventCategory";
import EventSlider from "@/components/Event/EventSlider";
import CommonLayout from "@/layout/CommonLayout";
import { Col, Row } from "reactstrap";

const Event = () => {
  return (
    <CommonLayout mainClass="event-page custom-padding" loaderName="eventSkelton">
      <div className="page-center">
        <Cover image={5} title="latest events" detail="events" backGround />
        <Row className="event-body">
          <Col xl="6">
            <EventSlider />
            <EventCategory/>
          </Col>
          <Col xl="6">
            <div className="calender-section custom-calender section-t-space  section-b-space">
              <Calender />
              <CalenderBottom />
            </div>
          </Col>
        </Row>
      </div>
    </CommonLayout>
  );
};

export default Event;
