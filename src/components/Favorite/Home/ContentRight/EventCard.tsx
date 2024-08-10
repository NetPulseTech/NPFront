import { FC, useState } from "react";
import CustomImage from "@/Common/CustomImage";
import { Event, ImagePath } from "../../../../utils/constant";
import { Href } from "../../../../utils/constant/index";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Dropdown, DropdownMenu, DropdownToggle, Input } from "reactstrap";
import Image from "next/image";

const EventCard: FC = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  return (
    <div className="event-box section-t-space ratio2_3">
      <div className="image-section bg-size blur-up lazyloaded">
        <CustomImage src={`${ImagePath}/post/12.jpg`} className="img-fluid blur-up lazyload bg-img" alt="event"/>
        <div className="card-title">
          <h3>{Event}</h3>
          <div className="settings">
            <div className="setting-btn">
              <a href={Href} className="d-flex">
                <DynamicFeatherIcon iconName="RotateCw" className="icon icon-dark stroke-width-3 iw-11 ih-11"/>
              </a>
            </div>
            <div className="setting-btn setting-dropdown">
              <Dropdown className="btn-group custom-dropdown arrow-none dropdown-sm" isOpen={dropDownOpen} toggle={() => setDropDownOpen(!dropDownOpen)}>
                <DropdownToggle color="transparent">
                  <a href={Href}>
                    <DynamicFeatherIcon iconName="Sun" className="icon-dark stroke-width-3 icon iw-11 ih-11"/>
                  </a>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu dropdown-menu-right custom-dropdown">
                  <ul>
                    <li>
                      <a href={Href}><DynamicFeatherIcon iconName="Edit" className="icon-font-light iw-16 ih-16"/>remind me</a>
                    </li>
                    <li>
                      <a href={Href}><DynamicFeatherIcon iconName="Settings" className="icon-font-light iw-16 ih-16"/> setting</a>
                    </li>
                  </ul>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="play-btn">
          <img src={`${ImagePath}/icon/play.png`} className="img-fluid blur-up lazyloaded" alt="play"/>
        </div>
      </div>
      <div className="event-content">
        <h3>happy life event</h3>
        <h6>26 january 2023</h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
          <span>15256 People Going</span>
        </p>
        <div className="bottom-part">
          <a href={Href} className="event-btn"> interested / not in..</a>
        </div>
        <a href={Href} className="share-btn">
          <DynamicFeatherIcon iconName="CornerUpRight" className="icon-dark stroke-width-3 iw-14 ih-14"/>
        </a>
      </div>
    </div>
  );
};

export default EventCard;
