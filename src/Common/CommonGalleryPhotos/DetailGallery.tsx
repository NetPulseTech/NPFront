import React, { FC } from "react";
import { CloseAlbum, Href, ImagePath } from "../../utils/constant/index";
import { Col, Row } from "reactstrap";
import CustomImage from "../CustomImage";
import { DetailGalleryInterFace } from "../CommonInterFace";

const DetailGallery: FC<DetailGalleryInterFace> = ({showPhotos,setShowPhotos}) => {
  let datas = [1, 2, 3, 4, 5, 6];
  return (
    <div className={`gallery-open ${showPhotos ? "d-block" : ""}`}>
      <div className="close-album" onClick={() => setShowPhotos(!showPhotos)}>
        <h5>{CloseAlbum}</h5>
      </div>
      <div className="portfolio-section">
        <Row className="ratio_square">
          {datas.map((data,index) => (
            <Col xl="3" lg="4" xs="6" key={index}>
              <div className="portfolio-image">
                <a href={Href}>
                  <CustomImage
                    src={`${ImagePath}/post/${data}.jpg`}
                    alt="image"
                    className="img-fluid blur-up lazyload bg-img"
                  />
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default DetailGallery;
