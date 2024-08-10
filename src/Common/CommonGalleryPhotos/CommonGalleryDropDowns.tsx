import React, { FC, useState } from "react";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Href } from "../../utils/constant/index";
import { galleryDropDowns } from "@/Data/common";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";

const CommonGalleryDropDowns: FC = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  return (
    <div className="settings">
      <div className="setting-btn  setting-dropdown">
        <Dropdown isOpen={dropDownOpen} toggle={() => setDropDownOpen(!dropDownOpen)} className="btn-group custom-dropdown arrow-none dropdown-sm">
          <DropdownToggle color="transparent">
            <a href={Href} className="d-flex">
              <DynamicFeatherIcon
                iconName="Trash2"
                className="icon icon-dark stroke-width-3 iw-11 ih-11"
              />
            </a>
          </DropdownToggle>
          <DropdownMenu>
            <ul>
              {galleryDropDowns.map((data, index) => (
                <li key={index}>
                  <a href={Href} className="d-flex">
                    <DynamicFeatherIcon
                      iconName={data.icon}
                      className="icon icon-dark stroke-width-3 iw-11 ih-11"
                    />
                    {data.title}
                  </a>{" "}
                </li>
              ))}
            </ul>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default CommonGalleryDropDowns;
