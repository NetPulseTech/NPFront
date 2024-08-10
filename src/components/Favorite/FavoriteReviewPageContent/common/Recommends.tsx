import React, { FC } from "react";
import ReviewsDropdown from "./ReviewsDropdown";
import { Media } from "reactstrap";
import CustomImage from "@/Common/CustomImage";
import { ImagePath, PeopleReactThisPost } from "../../../../utils/constant";
import CommonLikePanel from "@/Common/CommonLikePanel";
import CommonPostReact from "@/Common/CommonPostReact";
interface RecommendsInterFace{
    image:number
}
const Recommends: FC<RecommendsInterFace> = ({image}) => {
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
                sufiya eliza{" "}
                <span>
                  recommends <a href="#">dance acadamy</a>
                </span>
              </h5>
              <h6>30 mins ago</h6>
            </Media>
          </Media>
        </div>
        <ReviewsDropdown />
      </div>
      <div className="post-details">
      <CommonLikePanel/>
      <CommonPostReact/>
      </div>
    </div>
  );
};

export default Recommends;
