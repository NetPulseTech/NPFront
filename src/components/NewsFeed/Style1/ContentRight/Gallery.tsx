import { FC, Fragment, useState } from "react";
import GalleryTop from "./GalleryTop";
import { Col, Container, Row } from "reactstrap";
import CommonGalleryImage from "./common/CommonGallleryImage";
import CommonGalleryModal from "@/Common/CommonGalleryModal";
import { galleryData } from "@/Data/NewsFeed";

const Gallery: FC = () => {
  const [galleryModal, setGalleryModal] = useState(false);
  const toggleGalleryModal = () => setGalleryModal(!galleryModal);

  return (
    <div className="gallery-section section-t-space">
      <GalleryTop />
      <div className="portfolio-section ratio_square">
        <Container fluid className="p-0">
          <Row>
            {galleryData.map((item, index) => (
              <Fragment key={index}>
                {item.row ? (
                  <Col xs="4" className="row m-0">
                    <Col xs="12" className="pt-cls p-0">
                      <CommonGalleryImage imageName={4} onClickHandle={toggleGalleryModal}/>
                    </Col>
                    <Col xs="12" className="pt-cls p-0">
                      <CommonGalleryImage imageName={6} onClickHandle={toggleGalleryModal}/>
                    </Col>
                  </Col>
                ) : (
                  <Col xs={item.sizeSmall} className={item.className?item.className:""}>
                    <CommonGalleryImage imageName={item.imageName} onClickHandle={toggleGalleryModal}/>
                  </Col>
                )}
              </Fragment>
            ))}
          </Row>
        </Container>
      </div>
      <CommonGalleryModal modal={galleryModal} toggle={toggleGalleryModal} />
    </div>
  );
};

export default Gallery;
