import { FC, useState } from "react";
import { OverlayNames } from "../../Style1Types";
import { Href, ImagePath, Mute, ViewProfile } from "../../../../../utils/constant";
import { ButtonGroup } from "reactstrap";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import StoriesModal from "@/Common/StoriesModal";
import CustomImage from "@/Common/CustomImage";

const CommonStoryBox: FC<OverlayNames> = ({ image, color }) => {
  const [showStoryModal, setShowStoryModal] = useState(false);
  const toggleStoryModal = () => setShowStoryModal(!showStoryModal);
  return (
    <>
      <div onClick={toggleStoryModal}>
        <div>
          <div className="story-box">
            <div className={`adaptive-overlay ${color ? `${color}-overlay` : ""}`}/>
            <div className="story-bg bg-size">
              <CustomImage src={`${ImagePath}/story/${image}.jpg`} className="img-fluid bg-img" alt="image"/>
            </div>
            <div className="story-content">
              <h6>josephin water</h6>
              <span>active now</span>
            </div>
            <div className="story-setting setting-dropdown">
              <ButtonGroup className="custom-dropdown arrow-none dropdown-sm">
                <a href={Href}>
                  <DynamicFeatherIcon iconName="Sun" className="icon-light iw-13 ih-13"/>
                </a>
                <div className="dropdown-menu dropdown-menu-right custom-dropdown ">
                  <ul>
                    <li>
                      <a href={Href}> <DynamicFeatherIcon iconName="VolumeX" className="icon-font-light iw-16 ih-16"/>{Mute} josephin</a>
                    </li>
                    <li>
                      <a href={Href}>
                        <DynamicFeatherIcon iconName="User" className="icon-font-light iw-16 ih-16"/>{ViewProfile}
                      </a>
                    </li>
                  </ul>
                </div>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
      <StoriesModal showModal={showStoryModal} toggle={toggleStoryModal} />
    </>
  );
};

export default CommonStoryBox;
