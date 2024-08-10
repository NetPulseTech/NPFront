import { dynamicNumber } from "../../../utils/DynamicNumberArray";
import {CardBody,Col,Nav,NavItem,NavLink,Row,TabContent,TabPane} from "reactstrap";

const GallerySkelton = () => {
  return (
    <div className="gallery-page-section section-b-space">
      <div className="card-title">
        <h3 />
      </div>
      <div className="tab-section">
        <Nav tabs>
          <NavItem>
            <NavLink active />
          </NavItem>
          <NavItem>
            <NavLink />
          </NavItem>
        </Nav>
        <TabContent>
          <TabPane className="fade show active Choose-photo-modal">
            <Row className="gallery-album">
              <Col xl="3" lg="4" xs="6">
                <a className="card add-card"></a>
              </Col>
              {dynamicNumber(6).map((data) => (
                <Col xl="3" lg="4" xs="6" key={data}>
                  <a className="card collection">
                    <CardBody>
                      <h5 className="card-title" />
                      <h6 />
                    </CardBody>
                  </a>
                </Col>
              ))}
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default GallerySkelton;
