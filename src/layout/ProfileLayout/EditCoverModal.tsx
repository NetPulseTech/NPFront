import React, { FC, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { ModalInterFace } from "../LayoutTypes";
import { EditProfile, ImagePath, Href, EditProfileImage } from "../../utils/constant/index";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import EditProfileDetails from "./EditProfileDetails";
import UpdateImageModal from "./UpdateImageModal";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import CustomImage from "@/Common/CustomImage";

const EditCoverModal: FC<ModalInterFace> = ({ isOpen, toggle }) => {
  const [updateImage, setUpdateImage] = useState(false);
  const updateToggleImage = () => {setUpdateImage(!updateImage)};
  const handleEdit = () => {
    toggle();
    updateToggleImage();
  };
  const { imageLink } = useSelector((state: RootState) => state.LayoutSlice);

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{EditProfile}</ModalHeader>
        <ModalBody>
          <div className="edit-profile-sec">
            <div className="profile-wrap">
              <div className="edit-title">
                <div className="icon">
                  <DynamicFeatherIcon iconName="Image" className="iw-16 ih-16"/>
                </div>
                <h5>{EditProfileImage}</h5>
              </div>
              <div className="edit-content">
                <div className="profile-pic">
                  <div className="bg-size blur-up lazyloaded">
                    <CustomImage
                      src={`${ImagePath}/${imageLink}`}
                      className="img-fluid blur-up lazyload bg-img"
                      alt=""
                    />
                  </div>
                  <a href={Href} onClick={handleEdit}>
                    edit image
                  </a>
                </div>
              </div>
            </div>
            <EditProfileDetails />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="solid">save changes</Button>
        </ModalFooter>
      </Modal>
      <UpdateImageModal isOpen={updateImage} toggle={updateToggleImage} />
    </>
  );
};

export default EditCoverModal;
