import { dynamicNumber } from "../../../utils/DynamicNumberArray";
import { Href } from "../../../utils/constant/index";
import { Col, Container, Media } from "reactstrap";

const ProfileCenterContent = () => {
  return (
    <>
      <div className="about-profile section-b-space">
        <div className="card-title">
          <h3 />
          <div className="settings">
            <div className="setting-btn">
              <a href={Href}></a>
            </div>
          </div>
        </div>
        <ul className="about-list">
          {dynamicNumber(7).map((index) => (
            <li key={index}>
              <h5 className="title" />
              <h6 className="content" />
            </li>
          ))}
        </ul>
      </div>
      <div className="about-profile section-b-space">
        <div className="card-title">
          <h3 />
          <div className="settings">
            <div className="setting-btn">
              <a href={Href}></a>
            </div>
          </div>
        </div>
        <ul className="about-list">
          {dynamicNumber(4).map((index) => (
            <li key={index}>
              <h5 className="title" />
              <h6 className="content" />
            </li>
          ))}
        </ul>
      </div>
      <div className="friend-list-box section-t-space section-b-space">
        <div className="card-title">
          <h3 />
        </div>
        <Container fluid>
          <div className="friend-list row">
            <Col sm="6">
              {dynamicNumber(3).map((index) => (
                <div className="friend-box" key={index}>
                  <Media>
                    <a href={Href} className="user-img"></a>
                    <Media body>
                      <a href={Href}>
                        <h5 className="user-name" />
                      </a>
                      <h6 />
                    </Media>
                  </Media>
                </div>
              ))}
            </Col>
            <Col sm="6">
              {dynamicNumber(3).map((index) => (
                <div className="friend-box" key={index}>
                  <Media>
                    <a href={Href} className="user-img"></a>
                    <Media body>
                      <a href={Href}>
                        <h5 className="user-name" />
                      </a>
                      <h6 />
                    </Media>
                  </Media>
                </div>
              ))}
            </Col>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProfileCenterContent;
