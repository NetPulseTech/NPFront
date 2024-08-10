import CustomImage from "@/Common/CustomImage";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { eventCategory } from "@/Data/SliderOptions";
import Image from "next/image";
import Slider from "react-slick";
import calender from "../../../public/assets/images/icon/calender.png";
import { Col } from "reactstrap";
import { Category, EventCategoryHeading, Href, ImagePath, SeeMore } from "../../utils/constant";

const EventCategory = () => {
  const totalMember = [15, 30, 25, 15, 30, 25];

  return (
    <div className="event-category section-t-space">
      <div className=" event-title">
        <div className="icon">
          <Image
            width={14}
            height={15}
            src={calender}
            className="img-fluid blur-up lazyloaded"
            alt="calender"
          />
        </div>
        <div className="content">
          <h3>{EventCategoryHeading}</h3>
          <h6>{Category}</h6>
          <a href={Href}>{SeeMore}</a>
        </div>
      </div>
      <Col xs="10" className="suggestion-box">
        <Slider className="default-space event-slider ratio_115 no-arrow" {...eventCategory}>
          {totalMember.map((data, index) => (
            <div key={index}>
              <div>
                <div className="story-box">
                  <div className="adaptive-overlay " />
                  <div className="story-bg bg-size">
                    <CustomImage src={`${ImagePath}/game/${index + 1}.jpg`} className="img-fluid bg-img" alt="game"/>
                  </div>
                  <div className="story-content">
                    <h6>josephin water</h6>
                    <span className="player">
                      <DynamicFeatherIcon iconName="User" className="icon-light iw-10 ih-10"/>{data}k
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Col>
    </div>
  );
};

export default EventCategory;
