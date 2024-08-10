import { FC } from "react";
import { CloseAlbum, Href, ImagePath } from "../../utils/constant/index";
import { Col, Input, Label, Row } from "reactstrap";
import { SinglePhotosInterFace } from "../LayoutTypes";
import CustomImage from "@/Common/CustomImage";

const SinglePhotos: FC<SinglePhotosInterFace> = ({
  showPhotos,
  setShowPhotos,
  handleImageUrl
}) => {
  const datas = [1, 2, 3, 4, 5, 6];
  return (
    <div className={`gallery-open ${showPhotos ? "d-block" : ""}`}>
      <div className="close-album" onClick={() => setShowPhotos(!showPhotos)}>
        <h5>{CloseAlbum}</h5>
      </div>
      <Row className=" gallery-photo ratio_landscape">
        {datas.map((data) => (
          <Col sm="4" xs="6" key={data}>
            <Label htmlFor={`chkAni${data}`} />
            <Input className="radio_animated" id={`chkAni${data}`} type="radio" onChange={()=>handleImageUrl(`post/${data}.jpg`)} name="Radios1" defaultChecked={data === 1 ? true : false}/>
            <div className="image-box">
              <div className="image bg-size blur-up lazyloaded">
                <CustomImage
                  src={`${ImagePath}/post/${data}.jpg`}
                  alt="image"
                  className="img-fluid blur-up lazyload bg-img"
                />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SinglePhotos;
