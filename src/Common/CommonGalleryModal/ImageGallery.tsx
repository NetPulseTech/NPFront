import { Href, ImagePath } from "../../utils/constant";
import Image from "next/image";
import { FC } from "react";
import Slider from "react-slick";
import { Col } from "reactstrap";
import { CommonGalleryModalInterFace } from "../CommonInterFace";
import DynamicFeatherIcon from "../DynamicFeatherIcon";

const ImageGallery: FC<CommonGalleryModalInterFace> = ({ toggle }) => {
  const imageName = [15, 16, 17];

  return (
    <Col xl={9} lg={8} className="p-0">
      <a href={Href}>
        <DynamicFeatherIcon iconName="X" className="icon-light close-btn" onClick={toggle}/>
      </a>
      <Slider className="slide-1 box-arrow dots-number" >
        {imageName.map((data, index) => (
          <div key={index}>
            <div style={{ width: "100%", display: "inline-block" }}>
              <div className="img-part">
                <Image width={1165} height={775} src={`${ImagePath}/post/${data}.jpg`} className="img-fluid blur-up lazyloaded" alt="image"/>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Col>
  );
};

export default ImageGallery;
