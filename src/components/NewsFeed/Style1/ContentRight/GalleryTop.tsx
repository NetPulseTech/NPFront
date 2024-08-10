import { FC, useState } from "react";
import { EditProfile, Gallery, Href, ViewProfile, photos } from "../../../../utils/constant/index";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

const GalleryTop: FC = () => {
  const [galleryDropDown, setGalleryDropDown] = useState(false);
  const handleDropDown = () => setGalleryDropDown(!galleryDropDown);
  return (
    <div className="gallery-top">
      <div className="card-title">
        <h3>{Gallery}</h3>
        <h5>156 {photos}</h5>
        <div className="settings">
          <div className="setting-btn">
            <a href={Href}>
              <DynamicFeatherIcon iconName="RotateCw" className="icon icon-dark stroke-width-3 iw-11 ih-11"/>
            </a>
          </div>
          <div className="setting-btn setting-dropdown">
            <Dropdown className="btn-group custom-dropdown arrow-none dropdown-sm" isOpen={galleryDropDown} toggle={handleDropDown}>
              <DropdownToggle color="transparent">
                <a href={Href}>
                  <DynamicFeatherIcon iconName="Sun" className="icon-dark stroke-width-3 icon iw-11 ih-11"/>
                </a>
              </DropdownToggle>
              <DropdownMenu>
                <ul>
                  <li>
                    <a href={Href}><DynamicFeatherIcon iconName="Edit" className="icon-font-light iw-16 ih-16"/>{EditProfile}</a>
                  </li>
                  <li>
                    <a href={Href}><DynamicFeatherIcon iconName="User" className="icon-font-light iw-16 ih-16"/>{ViewProfile}</a>
                  </li>
                </ul>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryTop;
