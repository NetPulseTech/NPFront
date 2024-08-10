import { Col, Container, Row } from "reactstrap";
import ProfileAbout from "../ProfileAbout";
import HobbiesProfile from "../HobbiesProfile";
import EducationProfile from "../EducationProfile";
import ProfileFriendList from "../ProfileFriendList";

const AboutTabContent: React.FC = () => {
  return (
    <Container fluid>
      <Row className="page-content">
        <Col xs="4" className="content-left  res-full-width order-1">
          <ProfileAbout />
        </Col>
        <Col xs="8" className="content-center about-profile-item">
          <HobbiesProfile />
          <EducationProfile />
          <ProfileFriendList />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutTabContent;
