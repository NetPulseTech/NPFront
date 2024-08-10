import FavoriteLayout from "@/layout/FavoriteLayout";
import React from "react";
import FavoriteReviewPageContent from "./FavoriteReviewPageContent";

const FavoriteReviewsPage = () => {
  return (
    <FavoriteLayout loaderName="favoriteReviews">
      <FavoriteReviewPageContent />
    </FavoriteLayout>
  );
};

export default FavoriteReviewsPage;
