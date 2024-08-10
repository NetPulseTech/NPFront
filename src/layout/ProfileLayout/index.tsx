"use client";
import { FC, useState } from "react";
import { ProfileLayoutInterFace } from "../LayoutTypes";
import CommonLayout from "@/layout/CommonLayout";
import UserProfile from "./UserProfile";
import UserProfileBox from "./UserProfileBox";
import ProfileMenu from "./ProfileMenu";
import EditCoverModal from "./EditCoverModal";

const ProfileLayout: FC<ProfileLayoutInterFace> = ({ children, title,profileTab,loaderName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <CommonLayout mainClass="custom-padding profile-page" loaderName={loaderName}>
      <div className="page-center">
        <UserProfile toggle={toggle} />
        <UserProfileBox toggle={toggle} />
        {!profileTab && <ProfileMenu title={title?title:""} />}
        {children}
      </div>
      <EditCoverModal isOpen={isOpen} toggle={toggle} />
    </CommonLayout>
  );
};

export default ProfileLayout;
