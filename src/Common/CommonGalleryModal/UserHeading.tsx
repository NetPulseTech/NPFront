import { FC, useState } from "react";
import { Dropdown, Media, DropdownToggle, DropdownMenu } from "reactstrap";
import CustomImage from "@/Common/CustomImage";
import { ImagePath } from "../../utils/constant";
import DynamicFeatherIcon from "../DynamicFeatherIcon";
import { Href } from "../../utils/constant/index";
import { galleryModalDropDownData } from "@/Data/common";

const UserHeading: FC = () => {
  const [userDropDown, setUserDropDown] = useState(false);
  const showDropDown = () => setUserDropDown(!userDropDown);
  return (
    <div className="user-detail">
      <div className="user-media">
        <Media>
          <a className="user-img bg-size blur-up lazyloaded">
            <CustomImage src={`${ImagePath}/user-sm/1.jpg`} className="img-fluid blur-up lazyload bg-img" alt="user"/>
            <span className="available-stats" />
          </a>
          <Media body>
            <h5 className="user-name">Paige Turner</h5>
            <h6>alabma, USA</h6>
          </Media>
        </Media>
      </div>
      <div className="setting-btn ms-auto setting-dropdown no-bg">
        <Dropdown className="btn-group custom-dropdown arrow-none dropdown-sm" toggle={showDropDown} isOpen={userDropDown}>
          <DropdownToggle color="transparent">
            <div>
              <DynamicFeatherIcon iconName="MoreHorizontal" className="icon icon-font-color iw-14"/>
            </div>
          </DropdownToggle>
          <DropdownMenu>
            <ul>
              {galleryModalDropDownData.map((data, index) => (
                <li key={index}>
                  <a href={Href}>
                    <DynamicFeatherIcon iconName={data.icon} className="icon-font-light iw-16 ih-16"/>{data.title}
                  </a>
                </li>
              ))}
            </ul>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default UserHeading;
