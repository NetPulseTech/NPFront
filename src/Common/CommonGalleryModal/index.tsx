import { FC } from "react";
import { Col, Modal, Row } from "reactstrap";
import { CommonGalleryModalInterFace } from "../CommonInterFace";
import ImageGallery from "./ImageGallery";
import CommonLikePanel from "../CommonLikePanel";
import CommonPostReact from "../CommonPostReact";
import UserHeading from "./UserHeading";

const CommonGalleryModal: FC<CommonGalleryModalInterFace> = ({modal,toggle}) => {
  return (
    <Modal isOpen={modal} toggle={toggle} centered modalClassName="comment-model">
      <div>
        <div className="image-gallery">
          <Row className="m-0">
            <ImageGallery toggle={toggle} />
            <Col xl="3" lg="4" className="p-0">
              <div className="comment-part theme-scrollbar">
                <UserHeading />
                <div className="post-panel mb-0">
                  <div className="post-wrapper">
                    <div className="post-details">
                      <CommonLikePanel />
                      <CommonPostReact />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Modal>
  );
};

export default CommonGalleryModal;
