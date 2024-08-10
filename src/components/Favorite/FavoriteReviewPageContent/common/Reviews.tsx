import { FC } from "react";
import CustomImage from "../../../../Common/CustomImage";
import { ImagePath, PeopleReactThisPost } from "../../../../utils/constant";
import ReviewsDropdown from "./ReviewsDropdown";
import { Media } from "reactstrap";
import CommonLikePanel from "@/Common/CommonLikePanel";
import CommonPostReact from "@/Common/CommonPostReact";
interface ReviewsInterFace {
  image: number;
  details: string;
}
const Reviews: FC<ReviewsInterFace> = ({ image, details }) => {
  const numbers = [1, 2, 3];

  return (
    <div className="post-wrapper col-grid-box section-t-space d-block">
      <div className="post-title">
        <div className="profile">
          <Media>
            <div className="user-img bg-size blur-up lazyloaded">
              <CustomImage
                src={`${ImagePath}/user-sm/${image}.jpg`}
                className="img-fluid blur-up lazyload bg-img"
                alt="user"
              />
            </div>
            <Media body>
              <h5>
                bob frapples
                <span>
                  reviewed <a href="#">dance acadamy</a>
                </span>
              </h5>
              <h6>30 mins ago</h6>
            </Media>
          </Media>
        </div>
        <ReviewsDropdown />
      </div>
      <div className="post-details">
        <div className="detail-box">
          <h4>{details}</h4>
          <div className="people-likes">
            <ul>
              {numbers.map((data, index) => (
                <li
                  key={index}
                  className="popover-cls bg-size blur-up lazyloaded"
                  style={{
                    backgroundImage: `url("${ImagePath}/user-sm/${data}.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                  }}
                />
              ))}
            </ul>
            <h6>+12 {PeopleReactThisPost}</h6>
          </div>
        </div>
      <CommonLikePanel/>
      <CommonPostReact/>
      </div>
    </div>
  );
};

export default Reviews;
