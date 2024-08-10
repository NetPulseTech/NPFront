"use client";
import React, { FC } from "react";
import CommonLayout from "../CommonLayout";
import PageCover from "@/components/Favorite/Home/PageCover";
import ProfileMenus from "@/components/Favorite/Home/ProfileMenus";
import { Container } from "reactstrap";
import { FavoriteLayoutProps } from "../LayoutTypes";

const FavoriteLayout: FC<FavoriteLayoutProps> = ({children,FavoriteTabs,loaderName}) => {
  return (
    <CommonLayout mainClass="favourite-page-body  custom-padding " loaderName={loaderName}>
      <div className="page-center">
        <PageCover />
        {FavoriteTabs ? FavoriteTabs : <ProfileMenus />}
        <Container fluid className="section-t-space px-0">
          {children}
        </Container>
      </div>
    </CommonLayout>
  );
};

export default FavoriteLayout;
