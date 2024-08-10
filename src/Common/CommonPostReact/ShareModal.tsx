import { FC } from "react";
import {Button,Input,Modal,ModalBody,ModalFooter,ModalHeader} from "reactstrap";
import ShareModalHeader from "./ShareModalHeader";
import UserDropDown from "./UserDropDown";
import { ImagePath, sharePost } from "../../utils/constant";
import { ShareModalProps } from "../CommonInterFace";
import CustomImage from "../CustomImage";

const ShareModal: FC<ShareModalProps> = ({ showModal, toggleModal }) => {
  return (
    <Modal isOpen={showModal} toggle={toggleModal} centered modalClassName="mobile-full-width" contentClassName="share-modal">
      <ModalHeader toggle={toggleModal}>
        <ShareModalHeader />
      </ModalHeader>
      <ModalBody>
        <UserDropDown />
        <div className="input-section">
          <Input type="text" className="emojiPicker" placeholder="write a comment.."/>
        </div>
        <div className="post-section ratio2_1">
          <div className="post-img bg-size blur-up lazyloaded">
            <CustomImage src={`${ImagePath}/post/1.jpg`} className="img-fluid blur-up lazyload bg-img" alt=""/>
          </div>
          <div className="post-content">
            <h3>Today Our Three Cute Puppy Dog Birthday !!!!</h3>
            <h5 className="tag">
              <span>#ourcutepuppy,</span> #puppy, #birthday, #dog
            </h5>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="solid">{sharePost}</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ShareModal;
