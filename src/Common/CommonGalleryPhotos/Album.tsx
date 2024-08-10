import { albumListData } from "@/Data/common";
import React, { ChangeEvent, FC, useState } from "react";
import { Card, CardBody, Col, Input, Row } from "reactstrap";
import DynamicFeatherIcon from "../DynamicFeatherIcon";
import { CreateAlbum, ImagePath, photos } from "../../utils/constant";
import CustomImage from "../CustomImage";
import { AlbumInterFace } from "../CommonInterFace";

const Album: FC<AlbumInterFace> = ({ showPhotos, setShowPhotos,lg,xl }) => {
  const [albumDetail, setAlbumDetail] = useState(albumListData);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const randomIndex = Math.floor(Math.random() * albumDetail.length);
    const randomAlbum = albumListData[randomIndex];
    const file = event.target.files?.[0];
    const tempFiles = { tittle: file?.name || "", image: randomAlbum.image };
    setAlbumDetail([...albumDetail, tempFiles]);
  };
  return (
    <Row className={`gallery-album ${showPhotos ? "d-none" : ""}`}>
      <Col lg={lg} xl={xl} xs="6">
        <Card className="add-card">
          <div className="add-icon">
            <div>
              <DynamicFeatherIcon iconName="PlusCircle" className="iw-30 ih-30"/>
              <Input onChange={handleChange} type="file" className="form-control-file"/>
              <h5 className="card-title">{CreateAlbum}</h5>
              <p>create album in just few minutes</p>
            </div>
          </div>
        </Card>
      </Col>
      {albumDetail.map((data, index) => (
        <Col lg={lg} xl={xl} xs="6" key={index} onClick={() => setShowPhotos(!showPhotos)}>
          <a className="card collection bg-size blur-up lazyloaded">
            <CustomImage className="card-img-top img-fluid blur-up lazyload bg-img" src={`${ImagePath}/post/${data.image}.jpg`} alt="Card image cap"/>
            <CardBody>
              <h5 className="card-title">{data.tittle}</h5>
              <h6>3 {photos}</h6>
            </CardBody>
          </a>
        </Col>
      ))}
    </Row>
  );
};

export default Album;
