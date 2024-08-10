import { Href, ImagePath } from "../../utils/constant";
import { FC, useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle, Media } from "reactstrap";
import DynamicFeatherIcon from "../DynamicFeatherIcon";
import { userDropDownData } from "@/Data/common";
import CustomImage from "../CustomImage";

const UserDropDown: FC = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="user-info">
      <Media>
        <a href={Href} className="user-img bg-size blur-up lazyloaded">
          <CustomImage src={`${ImagePath}/user-sm/2.jpg`} className="img-fluid blur-up lazyload bg-img" alt="user"/>
        </a>
        <Media body>
          <a href={Href}>
            <h5>Pabelo Mukrani</h5>
          </a>
          <div className="setting-dropdown">
            <Dropdown isOpen={showDropDown} toggle={() => setShowDropDown(!showDropDown)} className="custom-dropdown arrow-none dropdown-sm btn-group">
              <DropdownToggle color="transparent">
                <h6 onClick={() => setShowDropDown(!showDropDown)}>
                  <DynamicFeatherIcon iconName="Globe" className="icon-font-light left-icon iw-12 ih-12"/>
                  public
                  <DynamicFeatherIcon iconName="ChevronDown" className=" iw-14"/>
                </h6>
              </DropdownToggle>
              <DropdownMenu>
                <ul>
                  {userDropDownData.map((data, index) => (
                    <li key={index}>
                      <a href={Href}>
                        <DynamicFeatherIcon iconName={data.icon} />
                        {data.detail}
                      </a>
                    </li>
                  ))}
                </ul>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Media>
      </Media>
    </div>
  );
};

export default UserDropDown;
