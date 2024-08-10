"use client";
import Cover from "@/Common/Cover";
import FavoriteArtists from "@/components/Music/FavoriteArtists";
import FavoritePlaylist from "@/components/Music/FavoritePlaylist";
import PlayerBox from "@/components/Music/MusicPlayer";
import PopularSongs from "@/components/Music/PopularSongs";
import CommonLayout from "@/layout/CommonLayout";
import React from "react";
import { Container } from "reactstrap";

const Music = () => {
  return (
    <CommonLayout mainClass="music-page custom-padding" loaderName="music">
      <div className="page-center">
        <Cover image={7} title="Feel Music" detail="songs" />
        <div className="event-category music-slider-section section-t-space">
          <FavoriteArtists />
        </div>
        <Container fluid className="section-t-space px-0">
          <div className="page-content">
            <div className="content-left"><PlayerBox /></div>
            <div className="content-center"><FavoritePlaylist /></div>
            <div className="content-right"><PopularSongs /></div>
          </div>
        </Container>
      </div>
    </CommonLayout>
  );
};

export default Music;
