"use client"
import FavoriteLayout from "@/layout/FavoriteLayout";
import React, { FC } from "react";
import FavoriteHomePageContent from "./Home/FavoriteHomePageContent";

const FavoriteHomePage: FC = () => {
  return (
    <FavoriteLayout loaderName="favoriteHomePage" >
      <FavoriteHomePageContent />
    </FavoriteLayout>
  );
};

export default FavoriteHomePage;
