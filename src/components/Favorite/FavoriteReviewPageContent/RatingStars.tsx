import { FC } from "react";
import HeadingTittleCommon from "./common/HeadingTittleCommon";
import { Progress } from "reactstrap";
import { ratingNumbers } from "@/Data/Favorite";

const RatingStars: FC = () => {
  return (
    <div className="review-counter section-b-space">
      <HeadingTittleCommon title="review" />
      <div className="review-content">
        <h2>4.6</h2>
        <h4>based on 22 ratings</h4>
        {/* add rating pkg */}
        <div className="review-part">
          <ul>
            {ratingNumbers.map((data, index) => (
              <li key={index}>
                <h5>{data.rating} stars</h5>
                <Progress value={data.value} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RatingStars;
