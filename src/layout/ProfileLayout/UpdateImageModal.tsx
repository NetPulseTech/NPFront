import React, { FC, useCallback, useState } from "react";
import { ModalInterFace } from "../LayoutTypes";
import {Button,Modal,ModalBody,ModalFooter,ModalHeader,Nav,NavItem,NavLink,TabContent,TabPane} from "reactstrap";
import UploadedAlbum from "./UploadedAlbum";
import AlbumTabPane from "./AlbumTabPane";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux-toolkit/store";
import { setBackgroundImage, setImageLink } from "@/redux-toolkit/reducers/LayoutSlice";
import { Album, ChoosePhoto, Uploaded } from "../../utils/constant";

const UpdateImageModal: FC<ModalInterFace> = ({ isOpen, toggle,updateBackGround }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [imageUrl, setImageUrl] = useState("post/10.jpg");
  const handleImageUrl = useCallback((tab: string) => {
    setImageUrl(tab);
  }, []);
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmitValue = () => {
    updateBackGround?dispatch(setBackgroundImage(imageUrl)):dispatch(setImageLink(imageUrl)) 
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered modalClassName="mobile-full-width" className="Choose-photo-modal modal-custom-lg">
      <ModalHeader toggle={toggle}>{ChoosePhoto}</ModalHeader>
      <ModalBody>
        <Nav tabs>
          <NavItem>
            <NavLink className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}>
              {Uploaded}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={activeTab === 2 ? "active" : ""} onClick={() => setActiveTab(2)}>
              {Album}
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId={1} className="Choose-photo-modal">
            <UploadedAlbum handleImageUrl={handleImageUrl} />
          </TabPane>
          <TabPane tabId={2}>
            <AlbumTabPane handleImageUrl={handleImageUrl} />
          </TabPane>
        </TabContent>
      </ModalBody>
      <ModalFooter>
        <Button color="solid" onClick={handleSubmitValue}>
          {ChoosePhoto}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UpdateImageModal;
