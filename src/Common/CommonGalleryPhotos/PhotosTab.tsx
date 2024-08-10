import React, { FC } from "react";
import { Col, Row } from "reactstrap";
import CustomImage from '@/Common/CustomImage';
import CommonGalleryDropDowns from "./CommonGalleryDropDowns";
import { Href, ImagePath } from '../../utils/constant/index';

const PhotosTab: FC = () => {
    let datas =[10,11,12,9,8,7,5,6]
  return (
    <div className="portfolio-section">
      <Row className="ratio_square">
        {datas.map((data,index)=> <Col xl="3" lg="4" xs="6" key={index}>
          <div className="portfolio-image">
            <a href={Href}>
              <CustomImage
                src={`${ImagePath}/post/${data}.jpg`}
                alt="image"
                className="img-fluid blur-up lazyload bg-img"
              />
            </a>
            <CommonGalleryDropDowns/>
          </div>
        </Col>)}
        
        
      </Row>
    </div>
  );
};

export default PhotosTab;
