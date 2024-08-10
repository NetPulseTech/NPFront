import { ImagePath, TotalUsers, UniqueFeatures, UserReviews } from "../../../utils/constant";
import Image from "next/image";
import { Col } from "reactstrap";

const FeatureContent: React.FC = () => {
    const  names =[1,2,3,4,5,6]
  return (
    <Col lg="6"  className="order-lg-1">
      <div className="feature-content">
        <div>
          <h3 className="title">our client's reviews</h3>
          <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is a more-or-less.</p>
          <div className="user-section">
            <ul>
                {names.map((data)=><li key={data}>
                <Image height={55} width={55} src={`${ImagePath}/user-sm/${data}.jpg`} className="img-fluid blur-up lazyloaded" alt=""/>
              </li>)}
            </ul>
          </div>
          <div className="count-status">
            <ul>
              <li>
                <h4>1M+</h4>
                <h6>{TotalUsers}</h6>
              </li>
              <li>
                <h4>50+</h4>
                <h6>{UniqueFeatures}</h6>
              </li>
              <li>
                <h4>10K+</h4>
                <h6>{UserReviews}</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default FeatureContent;
