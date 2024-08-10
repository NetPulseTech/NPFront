"use client";
import { FC, useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import AlbumsList from "./AlbumsList";
import PhotosTab from "./PhotosTab";

const CommonGalleryPhotos: FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="gallery-page-section section-b-space">
      <div className="card-title">
        <h3>gallery</h3>
        <div className="right-setting">
          <a href="#" className="btn btn-solid">
            create album
          </a>
          <a href="#" className="btn btn-solid">
            add photo/video
          </a>
        </div>
      </div>
      <div className="tab-section">
        <Nav tabs>
          <NavItem>
            <NavLink className={activeTab === 1 ?"active":""} onClick={()=>setActiveTab(1)} >Album</NavLink>
          </NavItem>
          <NavItem>
            <NavLink  className={activeTab === 2 ?"active":""} onClick={()=>setActiveTab(2)}>Photos</NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId={1} className="Choose-photo-modal">
            <AlbumsList/>
          </TabPane>
          <TabPane tabId={2}>
            <PhotosTab/> 
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default CommonGalleryPhotos;
