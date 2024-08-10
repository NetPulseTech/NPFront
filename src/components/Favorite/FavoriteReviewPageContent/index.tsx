"use client";
import { FC } from "react";
import { Col, Row } from "reactstrap";
import RatingStars from "./RatingStars";
import ReviewStateMent from "./ReviewStateMent";
import Headers from "./Headers";
import Reviews from "./common/Reviews";
import Recommends from "./common/Recommends";

const FavoriteReviewPageContent: FC = () => {
  return (
    <Row>
      <Col xs="4" className="content-left  order-1 res-full-width">
        <div className="sticky-top">
          <RatingStars />
          <ReviewStateMent />
        </div>
      </Col>
      <Col xl="8" className="content-center">
        <Headers />
      <div className="post-panel infinite-loader-sec">
        <Recommends image={15} />
        <Reviews  image={12} details="Best acadamy for dance, environment is so good.We had a great time learning the dances. Teacher was lovely as was the organisers. Lots of energy and quite a few laughs. Loads of fun!"/>
        <Reviews  image={11} details="The Team of Dance Academy were very welcoming, enthusiastic and full of energy. We had an incredible time which was fun and exciting. Relaxed atmosphere full of laughter."/>
        <Recommends image={14} />
      </div>
      </Col>
    </Row>
  );
};

export default FavoriteReviewPageContent;
