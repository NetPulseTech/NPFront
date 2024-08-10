import { FC } from "react";
import { Modal, ModalBody } from "reactstrap";
import { CommonVideoModalInterFace } from "../CommonInterFace";

const CommonVideoModal: FC<CommonVideoModalInterFace> = ({ modal, toggle }) => {
  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      modalClassName="bd-example-modal-lg"
      centered
      size="lg"
    >
      <ModalBody className="video-model">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/TKnufs85hXk"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </ModalBody>
    </Modal>
  );
};

export default CommonVideoModal;
