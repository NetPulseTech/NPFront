import { Col, Row } from "reactstrap";
import CustomImage from "@/Common/CustomImage";
import { ImagePath,Href } from "../../../utils/constant";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import PaginationSection from "./PaginationSection";


const BlogList:React.FC = () => {
  const numbers = [5, 4, 3, 2, 1, 6];
  return (
    <Col lg="9" className="order-lg-1">
      <div className="blog_section ratio_55">
        <Row>
          {numbers.map((data, index) => (
            <Col md="6" key={index}>
              <div className="blog-wrap">
                <div className="blog-image">
                  <a href={Href} className="bg-size blur-up lazyloaded">
                    <CustomImage src={`${ImagePath}/blog/${data}.jpg`} className="img-fluid blur-up lazyload bg-img" alt=""/>
                  </a>
                  <div className="blog-label">
                    <h6>
                      <DynamicFeatherIcon iconName="Heart" className="iw-13 ih-13"/>10
                    </h6>
                    <h6>
                      <DynamicFeatherIcon iconName="MessageCircle" className="iw-14 ih-14"/>5
                    </h6>
                  </div>
                </div>
                <div className="blog-details">
                  <div className="detail">
                    <h6>
                      <DynamicFeatherIcon iconName="User" className="iw-15 ih-15"/>page turner
                    </h6>
                    <h6>
                      <DynamicFeatherIcon iconName="Clock" className="iw-15 ih-15"/>20 June, 2023
                    </h6>
                  </div>
                  <a href={Href}>
                    <h5>increase your netpulse followers - post, like, comments</h5>
                  </a>
                  <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <PaginationSection />
      </div>
    </Col>
  );
};

export default BlogList;
