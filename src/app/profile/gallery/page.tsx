"use client";
import CommonGalleryPhotos from "@/Common/CommonGalleryPhotos";
import ProfileLayout from "@/layout/ProfileLayout";
import { Container } from "reactstrap";

const ProfileGalleryTimeLine = () => {
  return (
    <ProfileLayout title="photos" loaderName="profileGallery">
      <Container fluid className="section-t-space px-0">
        <div className="page-content">
          <div className="content-center w-100">
            <CommonGalleryPhotos />
          </div>
        </div>
      </Container>
    </ProfileLayout>
  );
};

export default ProfileGalleryTimeLine;
