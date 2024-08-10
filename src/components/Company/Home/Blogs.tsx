import { Col, Container, Row } from "reactstrap";
import CustomImage from "@/Common/CustomImage";
import { ImagePath } from "../../../utils/constant";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Href } from "../../../utils/constant/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogSlider } from "@/Data/SliderOptions";
import Slider from "react-slick";

const Blogs: React.FC = () => {
  const images = [8, 9, 4, 7];

  return (
    <section className="section-pb-space section-pt-space landing-bg blog-wrapper overflow-hidden">
      <Container>
        <Row>
          <Col xs="12">
            <div className="title-sec">
              <h4>blogs</h4>
              <h3>our latest posts</h3>
            </div>
          </Col>
          <Col xs="12">
            <div className="slider-section ratio2_3">
              <Slider  className="blog-slider default-space-lg no-arrow" {...blogSlider} >
                {images.map((data, index) => (
                  <div key={index}>
                    <div className="blog-wrap">
                      <div className="blog-image">
                        <a href={Href} className="bg-size blur-up lazyloaded">
                          <CustomImage src={`${ImagePath}/blog/${data}.jpg`} className="img-fluid blur-up lazyload bg-img" alt=""/>
                        </a>
                        <div className="blog-label">
                          <h6>
                            <DynamicFeatherIcon iconName="Heart" className="iw-15 ih-15"/>10
                          </h6>
                          <h6>
                            <DynamicFeatherIcon iconName="MessageCircle" className="iw-16 ih-16"/>5
                          </h6>
                        </div>
                        <h3 className="title">fashion shoot</h3>
                      </div>
                      <div className="blog-details">
                        <a href={Href}>
                          <h5>increase your netpulse followers - post, like, comments</h5>
                        </a>
                        <div className="detail">
                          <h6>
                            <DynamicFeatherIcon iconName="User" className="iw-15 ih-15"/>
                            page turner
                          </h6>
                          <h6>
                            <DynamicFeatherIcon iconName="Clock" className="iw-15 ih-15"/>
                            20 June, 2023
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
