import { FC, useState } from "react";
import DetailGallery from "./DetailGallery";
import Album from "./Album";

const AlbumsList: FC = () => {
  const [showPhotos, setShowPhotos] = useState(false);
  return (
    <>
      <Album setShowPhotos={setShowPhotos} showPhotos={showPhotos} lg={4} xl={3} />
      <DetailGallery setShowPhotos={setShowPhotos} showPhotos={showPhotos} />
    </>
  );
};

export default AlbumsList;
