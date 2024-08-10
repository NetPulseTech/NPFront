import React, { FC } from "react";
import CustomImage from "@/Common/CustomImage";
import { EditProfile, ImagePath } from "../../utils/constant";
import Image from "next/image";
import UserData from "./UserData";
import { Href } from '../../utils/constant/index';

const UserProfileBox = ({toggle}:{toggle:()=>void}) => {
  return (
    <div className="d-lg-none d-block">
      <div className="profile-box">
        <div className="profile-content">
          <div className="image-section">
            <div className="profile-img">
              <div className="bg-size blur-up lazyloaded">
                <CustomImage src={`${ImagePath}/user-sm/15.jpg`} className="img-fluid blur-up lazyload bg-img" alt="profile"/>
              </div>
              <span className="stats">
                <Image width={15} height={15} src={`${ImagePath}/icon/verified.png`} className="img-fluid blur-up lazyloaded" alt="verified"/>
              </span>
            </div>
          </div>
          <div className="profile-detail">
            <h2>
              kelin jasen <span>❤</span>
            </h2>
            <h5>kelin.jasen156@gmail.com</h5>
            <UserData />
            <a href={Href} className="btn btn-solid" onClick={toggle}>{EditProfile}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileBox;
