import { FC, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import MultipleImage from "./common/MultipleImage";
import CommonGalleryModal from "@/Common/CommonGalleryModal";
import { SufiyaElizaMultiplePostInterFace } from "../../Style1/Style1Types";

const PostImages: FC<SufiyaElizaMultiplePostInterFace> = ({moreImage,diffrentImage,third,main,second}) => {
    const [modalOpen, setModalOpen] = useState(false)
    const toggle = ()=>setModalOpen(!modalOpen)
  return (
    <div className="img-wrapper">
      <div className="gallery-section">
        <div className="portfolio-section ratio_square">
          <Container fluid className="p-0">
            <Row>
              <Col xs="8" className="pt-cls" onClick={toggle}>
                <MultipleImage image={main} />
              </Col>
              <Col xs="4" className="row m-0">
                <Col xs="12" className="pt-cls p-0" onClick={toggle}>
                  <MultipleImage image={second} />
                </Col>
                <Col xs="12" className="pt-cls p-0" onClick={toggle}>
                  <MultipleImage image={third} moreImage={moreImage} />
                </Col>
              </Col>
            </Row>
            <CommonGalleryModal toggle={toggle}  modal={modalOpen}/>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default PostImages;
