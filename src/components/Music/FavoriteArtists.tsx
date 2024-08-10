import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { ButtonGroup, Col } from "reactstrap";
import CustomImage from "@/Common/CustomImage";
import { ImagePath } from "../../utils/constant";
import Slider from "react-slick";
import { musicSlider } from "@/Data/SliderOptions";
import { Href } from "../../utils/constant/index";

const FavoriteArtists = () => {
  let imageName = [2, 3, 4, 5, 6, 7, 5, 6, 6, 7];
  return (
    <>
      <div className="event-title">
        <div className="icon">
          <DynamicFeatherIcon iconName="Plus" className="icon-light" />
        </div>
        <div className="content">
          <h3>your favourite artist</h3>
          <h6>listen more song your favourite artist</h6>
        </div>
      </div>
      <Col xs="10" className="suggestion-box">
        <Slider
          className="music-slider ratio_115 no-arrow default-space "
          {...musicSlider}
        >
          {imageName.map((data, index) => (
            <div key={index}>
              <div style={{ width: "100%", display: "inline-block" }}>
                <div className="story-box">
                  <div className="adaptive-overlay" />
                  <div className="story-bg bg-size blur-up lazyloaded">
                    <CustomImage
                      src={`${ImagePath}/music/${data}.jpg`}
                      className="img-fluid blur-up lazyload bg-img"
                    />
                  </div>
                  <div className="story-content">
                    <h6>josephin water</h6>
                    <span className="player">
                      <DynamicFeatherIcon
                        iconName="User"
                        className="icon-light iw-10 ih-10"
                      />
                      15k
                    </span>
                  </div>
                  <div className="story-setting setting-dropdown">
                    <ButtonGroup className="btn-group custom-dropdown arrow-none dropdown-sm">
                      <a href={Href}>
                        <DynamicFeatherIcon
                          iconName="Sun"
                          className="icon-light iw-13 ih-13"
                        />
                      </a>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Col>
    </>
  );
};

export default FavoriteArtists;
