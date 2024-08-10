import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Href, ImagePath } from "../../../utils/constant/index";
import Image from "next/image";
import { Col, Input, Media } from 'reactstrap';


const BlogSideBar:React.FC = () => {
    const sidebarList = ["Lorem Ipsum Is Simple","Many Variations","random text","lorem ipsum.","it's Random.",];
    const numbers = [1, 2, 3, 4];
    const popularTags = ["adventure","luxury","romantic","foodie","villas","cruise","shopping","beach","family",];
  
  return (
    <Col lg="3" className="order-lg-0">
    <div className="sticky-cls-top">
      <div className="blog-sidebar">
        <div className="blog-wrapper">
          <div className="search-bar">
            <Input type="text" placeholder="Search here.." />
            <DynamicFeatherIcon iconName="Search" className="iw-16 ih-16"/>
          </div>
        </div>
        <div className="blog-wrapper">
          <div className="sidebar-title">
            <h3>categories</h3>
          </div>
          <div className="sidebar-content">
            <ul className="sidebar-list">
              {sidebarList.map((data, index) => (
                <li key={index}>
                  <a href={Href}><DynamicFeatherIcon iconName="ArrowRightCircle" className="iw-17 ih-17 "/>{data}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="blog-wrapper">
          <div className="sidebar-title">
            <h3>popular post</h3>
          </div>
          <div className="sidebar-content">
            <ul className="blog-post">
              {numbers.map((data, index) => (
                <li key={index}>
                  <Media>
                    <a href={Href}>
                      <img className="img-fluid blur-up blur-up lazyloaded" src={`${ImagePath}/blog/${data}.jpg`} alt="Generic placeholder image"/>
                    </a>
                    <Media body className="align-self-center">
                      <div>
                        <h5><DynamicFeatherIcon iconName="Clock" className="iw-12 ih-12"/>25 Dec 2018</h5>
                        <h5><DynamicFeatherIcon iconName="Heart" className="iw-12 ih-12"/>100</h5>
                      </div>
                    </Media>
                  </Media>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="blog-wrapper">
          <div className="sidebar-title">
            <h3>popular tags</h3>
          </div>
          <div className="sidebar-content">
            <ul className="tags">
              {popularTags.map((data, index) => (
                <li key={index}>
                  <a href={Href}>{data}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Col>
  )
}

export default BlogSideBar