"use client"

import FavoriteLayout from "@/layout/FavoriteLayout";
import FavoriteAboutPageContent from "./FavoriteAboutPageContent";

const FavoriteAboutPage = () => {
  return (
    <FavoriteLayout loaderName="favoriteAboutPage">
      <FavoriteAboutPageContent />
    </FavoriteLayout>
  );
};

export default FavoriteAboutPage;
