import CommonLikePanel from "@/Common/CommonLikePanel";
import CommonPostReact from "@/Common/CommonPostReact";
import CommonUserHeading from "@/Common/CommonUserHeading";
import DetailBox from "@/Common/DetailBox";
import { BirthdayHeading, BirthdaySpan } from "../../../utils/constant";
import { Col, Container, Row } from "reactstrap";
import MultipleImage from "../Style3/ContentCenter/common/MultipleImage";
import { FC, useState } from "react";
import CommonGalleryModal from "@/Common/CommonGalleryModal";
import { SufiyaElizaTwoPhotoPostInterFace } from "../Style1/Style1Types";

const SufiyaElizaTwoPhotoPost:FC<SufiyaElizaTwoPhotoPostInterFace>  = ({diffrentImage}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggle = () => setModalOpen(!modalOpen);
  return (
    <div className="post-wrapper col-grid-box section-t-space d-block">
      <CommonUserHeading image={1} id="SufiyaElizaTwoPhotoPost" />
      <div className="post-details">
        <div className="img-wrapper">
          <div className="gallery-section">
            <div className="portfolio-section ratio_square">
              <Container fluid className="p-0">
                <Row>
                  <Col xs="6" onClick={toggle}>
                    <MultipleImage image={diffrentImage?39:16} />
                  </Col>
                  <Col xs="6" className="m-0" onClick={toggle}>
                    <MultipleImage image={diffrentImage?40:17} />
                  </Col>
                </Row>
                <CommonGalleryModal toggle={toggle} modal={modalOpen} />
              </Container>
            </div>
          </div>
        </div>
        <DetailBox heading={BirthdayHeading} span={BirthdaySpan} />
        <CommonLikePanel />
        <CommonPostReact />
      </div>
    </div>
  );
};

export default SufiyaElizaTwoPhotoPost;
