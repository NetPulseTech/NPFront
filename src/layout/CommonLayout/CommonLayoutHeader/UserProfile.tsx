import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { ActiveNow, Close, Href, ImagePath, Profile } from "../../../utils/constant";
import { FC, useState } from "react";
import { Media } from "reactstrap";
import UserProfileMenu from "./UserProfileMenu";
import CustomImage from '@/Common/CustomImage';
import useOutsideDropdown from "@/utils/useOutsideDropdown";

const UserProfile: FC = () => {
  const { isComponentVisible, ref, setIsComponentVisible } =useOutsideDropdown(false);
  return (
    <li className="header-btn custom-dropdown profile-btn btn-group">
      <a className={`main-link ${isComponentVisible ? "show" : ""}`} href={Href} onClick={() => setIsComponentVisible(!isComponentVisible)}>
        <DynamicFeatherIcon iconName="User" className="icon-light stroke-width-3 d-sm-none d-block iw-16 ih-16"/>
        <Media className="d-none d-sm-flex">
          <div className="user-img bg-size blur-up lazyloaded ">
            <CustomImage src={`${ImagePath}/user-sm/1.jpg`} className="img-fluid blur-up lazyload bg-img" alt="user"  />
            <span className="available-stats online" />
          </div>
          <Media body className="d-none d-md-block">
            <h4>Josephin water</h4>
            <span>{ActiveNow}</span>
          </Media>
        </Media>
      </a>
      <div ref={ref} className={`dropdown-menu dropdown-menu-right ${ isComponentVisible ? "show" : ""} `} style={{ position: "absolute", inset: "0px auto auto 0px", margin: "0px", transform: "translate(-101px, 54px)",}}>
        <div className="dropdown-header">
          <span>{Profile}</span>
          <div className="mobile-close" onClick={() => setIsComponentVisible(false)}>
            <h5>{Close}</h5>
          </div>
        </div>
        <div className="dropdown-content">
            <UserProfileMenu/>
        </div>
      </div>
    </li>
  );
};

export default UserProfile;
