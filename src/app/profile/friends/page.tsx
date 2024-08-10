"use client";
import FriendListBox from "@/components/profile/FriendListBox";
import ProfileLayout from "@/layout/ProfileLayout";
import { Container } from "reactstrap";

const ProfileFriendTimeLine = () => {
  return (
    <ProfileLayout title="friends" loaderName="profileFriend">
      <Container fluid className="section-t-space px-0">
        <div className="page-content">
          <div className="content-center w-100">
            <FriendListBox/>
          </div>
        </div>
      </Container>
    </ProfileLayout>
  );
};

export default ProfileFriendTimeLine;
