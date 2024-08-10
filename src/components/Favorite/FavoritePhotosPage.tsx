import CommonGalleryPhotos from "@/Common/CommonGalleryPhotos";
import FavoriteLayout from "@/layout/FavoriteLayout";
import React from "react";

const FavoritePhotosPage = () => {
  return (
    <FavoriteLayout  loaderName="favoriteGallery">
      <div className="page-content">
        <div className="content-center w-100">
          <CommonGalleryPhotos />
        </div>
      </div>
    </FavoriteLayout>
  );
};

export default FavoritePhotosPage;
