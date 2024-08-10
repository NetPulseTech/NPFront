import { galleryData } from "@/Data/NewsFeed";
import { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";

const GallerySection = () => {
  return (
    <div className="gallery-section section-t-space">
      <div className="gallery-top">
        <div className="card-title">
          <h3 />
        </div>
      </div>
      <div className="portfolio-section ratio_square">
        <Container fluid className="p-0">
          <Row>
            {galleryData.map((item, index) => (
              <Fragment key={index}>
                {item.row ? (
                  <Col xs="4" className="row m-0">
                    <Col xs="12" className="pt-cls p-0">
                      <div className="overlay">
                        <div className="portfolio-image bg-size"></div>
                      </div>
                    </Col>
                    <Col xs="12" className="pt-cls p-0">
                      <div className="overlay">
                        <div className="portfolio-image bg-size"></div>
                      </div>
                    </Col>
                  </Col>
                ) : (
                  <Col xs={item.sizeSmall} className={item.className ? item.className : ""}>
                    <div className="overlay">
                      <div className="portfolio-image bg-size"></div>
                    </div>
                  </Col>
                )}
              </Fragment>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default GallerySection;
