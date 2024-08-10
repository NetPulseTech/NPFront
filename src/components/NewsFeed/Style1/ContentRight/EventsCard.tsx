import { FC, useState } from "react";
import CustomImage from "@/Common/CustomImage";
import { Event, GoingNotGoing, ImagePath, PeopleGoing, RemindMe, Setting } from "../../../../utils/constant";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Href } from "../../../../utils/constant";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import Image from "next/image";
import CommonVideoModal from "@/Common/Modals/CommonVideoModal";
import { EventsCardInterFace } from "../Style1Types";

const EventsCard: FC<EventsCardInterFace> = ({eventImage,diffrentPath}) => {
 const [eventModal, setEventModal] = useState(false)
  const [eventDropDown, setEventDropDown] = useState(false);
  const toggleEventDropDown = () => setEventDropDown(!eventDropDown);
  const toggleEventModal = () => setEventModal(!eventModal);
  return (
    <div className="event-box section-t-space ratio2_3">
      <div className="image-section bg-size blur-up lazyloaded">
        <CustomImage src={`${ImagePath}/${diffrentPath?diffrentPath:"event"}/${eventImage}.jpg`} className="img-fluid blur-up lazyload bg-img" alt="event"/>
        <div className="card-title">
          <h3>{Event}</h3>
          <div className="settings">
            <div className="setting-btn">
              <a href={Href} className="d-flex">
                <DynamicFeatherIcon iconName="RotateCw" className="icon icon-dark stroke-width-3 iw-11 ih-11"/>
              </a>
            </div>
            <div className="setting-btn setting-dropdown">
              <Dropdown className="btn-group custom-dropdown arrow-none dropdown-sm" isOpen={eventDropDown} toggle={toggleEventDropDown}>
                <DropdownToggle color="transparent">
                  <a href={Href}><DynamicFeatherIcon iconName="Sun" className="icon-dark stroke-width-3 icon iw-11 ih-11"/></a>
                </DropdownToggle>
                <DropdownMenu>
                  <ul>
                    <li>
                      <a><DynamicFeatherIcon iconName="Edit" className="icon-font-light iw-16 ih-16"/>{RemindMe}</a>
                    </li>
                    <li>
                      <a><DynamicFeatherIcon iconName="Settings" className="icon-font-light iw-16 ih-16"/>{Setting}</a>
                    </li>
                  </ul>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="play-btn" onClick={toggleEventModal}>
          <img src={`${ImagePath}/icon/play.png`} className="img-fluid blur-up lazyloaded" alt="play"/>
        </div>
      </div>
      <div className="event-content">
        <h3>christmas 2023</h3>
        <h6>26 january 2023</h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
          <span>15256 {PeopleGoing}</span>
        </p>
        <div className="bottom-part">
          <a href={Href} className="event-btn">{GoingNotGoing}</a>
        </div>
        <a href={Href} className="share-btn">
          <DynamicFeatherIcon iconName="CornerUpRight" className="icon-dark stroke-width-3 iw-14 ih-14"
          />
        </a>
      </div>
      <CommonVideoModal modal={eventModal} toggle={toggleEventModal}/>
    </div>
  );
};

export default EventsCard;
