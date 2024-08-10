import Album from "@/Common/CommonGalleryPhotos/Album";
import React, { FC, useState } from "react";
import SinglePhotos from "./SinglePhotos";
import { TabPaneInterFace } from "../LayoutTypes";

const AlbumTabPane: FC<TabPaneInterFace> = ({handleImageUrl}) => {
  const [showPhotos, setShowPhotos] = useState(false);

  return (
    <>
      <Album setShowPhotos={setShowPhotos} showPhotos={showPhotos} />
      <SinglePhotos setShowPhotos={setShowPhotos} showPhotos={showPhotos}  handleImageUrl={handleImageUrl} />
    </>
  );
};

export default AlbumTabPane;
