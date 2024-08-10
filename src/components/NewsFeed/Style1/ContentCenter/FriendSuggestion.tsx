import { friendSliderOption } from "@/Data/SliderOptions";
import { AddFriend, Followers, Following, ImagePath } from "../../../../utils/constant";
import Image from "next/image";
import { FC } from "react";
import Slider from "react-slick";
import { Href } from "../../../../utils/constant";

const FriendSuggestion: FC = () => {

  const numbers = [1, 2, 3, 4,1, 2, 3, 4];
  return (
    <div className="post-wrapper col-grid-box section-t-space no-background d-block">
      <div className="post-details">
        <div className="img-wrapper">
          <div className="slider-section">
            <Slider   className="friend-slide ratio_landscape default-space no-arrow " {...friendSliderOption} >
              {numbers.map((data) => (
                <div key={data}>
                  <div style={{ width: "100%", display: "inline-block" }}>
                    <div className="profile-box friend-box">
                      <div className="profile-content">
                        <div className="image-section">
                          <div className="profile-img">
                            <div
                              className="bg-size blur-up lazyloaded"
                              style={{ backgroundImage: `url("${ImagePath}/user-sm/${data}.jpg")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", display: "block",}}
                            />
                            <span className="stats">
                              <Image width={22} height={22} src={`${ImagePath}/icon/verified.png`} className="img-fluid blur-up lazyloaded" alt="verified"/>
                            </span>
                          </div>
                        </div>
                        <div className="profile-detail">
                          <h2>
                            kelin jasen <span>❤</span>
                          </h2>
                          <div className="counter-stats">
                            <ul>
                              <li>
                                <h3 className="counter-value">546</h3>
                                <h5>{Following}</h5>
                              </li>
                              <li>
                                <h3 className="counter-value">6845</h3>
                                <h5>{Followers}</h5>
                              </li>
                            </ul>
                          </div>
                          <a href={Href} className="btn btn-outline">{AddFriend}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendSuggestion;
