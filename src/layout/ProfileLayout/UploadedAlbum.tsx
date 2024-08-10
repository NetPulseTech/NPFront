import { Col, Input, Label, Row } from "reactstrap";
import CustomImage from "@/Common/CustomImage";
import { ImagePath } from "../../utils/constant";
import { FC } from "react";
import { TabPaneInterFace } from "../LayoutTypes";

const UploadedAlbum:FC<TabPaneInterFace> = ({handleImageUrl}) => {
  let datas = [10, 9, 8, 7, 6, 5];
  return (
    <Row className="gallery-photo ratio_landscape">
      {datas.map((data, index) => (
        <Col key={index} sm="4" xs="6">
          <Label htmlFor="chk-ani1" />
          <Input className="radio_animated" onChange={()=>handleImageUrl(`post/${data}.jpg`)} id="chk-ani1" type="radio" name="Radios" defaultChecked={data === 10 ? true : false}/>
          <div className="image-box">
            <div className="image bg-size blur-up lazyloaded">
              <CustomImage src={`${ImagePath}/post/${data}.jpg`} className="img-fluid blur-up lazyload bg-img d-none" alt=""
              />
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default UploadedAlbum;
