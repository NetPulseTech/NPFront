import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { FC, useState } from "react";
import { Dropdown, Media, DropdownToggle, DropdownMenu } from "reactstrap";
import { Href, ImagePath } from "../utils/constant/index";
import { postDropDownOption } from "@/Data/NewsFeed";
import { CommonUserHeadingProps } from "./CommonInterFace";
import CustomImage from "./CustomImage";
import HoverMessage from "./HoverMessage";

const CommonUserHeading: FC<CommonUserHeadingProps> = ({ image,id }) => {
  const [showOption, setShowOption] = useState(false);
  return (
    <div className="post-title">
      <div className="profile">
        <Media>
          <a className="popover-cls user-img bg-size blur-up lazyloaded" href={Href} id={id}>
            <CustomImage src={`${ImagePath}/user-sm/${image}.jpg`} className="img-fluid blur-up lazyload bg-img" alt="user"/>
          </a>
          <Media body>
            <h5>sufiya eliza</h5>
            <h6>30 mins ago</h6>
          </Media>
        </Media>
        <HoverMessage placement={"right"} target={id} name={"sufiya eliza"} imagePath={`user-sm/${image}.jpg`} />
      </div>
      <div className="setting-btn ms-auto setting-dropdown no-bg">
        <Dropdown isOpen={showOption} toggle={() => setShowOption(!showOption)} className="custom-dropdown arrow-none dropdown-sm btn-group">
          <DropdownToggle color="transparent">
            <div>
              <DynamicFeatherIcon iconName="MoreHorizontal" className="icon icon-font-color iw-14"/>
            </div>
          </DropdownToggle>
          <DropdownMenu>
            <ul>
              {postDropDownOption.map((data, index) => (
                <li key={index}>
                  <a href={Href}>
                    <DynamicFeatherIcon iconName={data.iconName} className="icon icon-font-color iw-14"/>
                    {data.post}
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

export default CommonUserHeading;
