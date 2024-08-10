import React from "react";
import { Href, ImagePath } from "../../../utils/constant/index";
import { Col, Container, Row } from "reactstrap";
import CustomImage from "@/Common/CustomImage";

const UserGallery = () => {
  let userGalleryPhotos = [2, 4, 11];
  return (
    <div className="user-gallery">
      <h5>
        media <a href={Href}>see all</a>
      </h5>
      <div className="gallery-section">
        <div className="portfolio-section ratio_square">
          <Container fluid className="p-0">
            <Row>
              {userGalleryPhotos.map((data, index) => (
                <Col xs="4" key={index}>
                  <div className="overlay">
                    <div className="portfolio-image">
                      <a href={Href}>
                        <CustomImage
                          src={`${ImagePath}/post/${data}.jpg`}
                          alt="image"
                          className="img-fluid blur-up lazyload bg-img"
                        />
                      </a>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default UserGallery;
