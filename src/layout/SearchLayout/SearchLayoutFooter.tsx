import { layoutFooterData } from "@/Data/Layout";
import { About, ImagePath } from "../../utils/constant";
import { Href } from "../../utils/constant/index";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaRss, FaTwitter, } from "react-icons/fa";
import { Col, Container, Row } from "reactstrap";

interface SearchLayoutFooterInterFace {
  diffrentImage?: boolean;
  animation?: boolean;
}
const SearchLayoutFooter: React.FC<SearchLayoutFooterInterFace> = ({diffrentImage,animation,}) => {
  return (
    <footer className={`${diffrentImage? "footer-pt-space pb-0 footer-theme overflow-hidden": "footer-t-space footer-bg"}`}>
      <Container>
        <Row className=" footer-sec footer-b-space">
          <Col lg="4" md="6">
            <div className="footer-title d-md-none d-block">
              <h4>{About}</h4>
            </div>
            <div className="footer-content">
              <div className="footer-logo">
                <Image src={`${ImagePath}/icon/${diffrentImage ? "logo.png" : "logo-color.png"}`} alt="" height={47} width={148}/>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddoeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, et dolore magna aliqua. Ut enim ad minimveniam, enim ad minim veniam,{" "}</p>
              <div className="footer-social">
                <ul className="d-flex">
                  <li><a href="https://www.facebook.com/"  target="_blank"><FaFacebookF /></a></li>
                  <li><a href="https://accounts.google.com/"  target="_blank"><FaGooglePlusG /></a></li>
                  <li><a href="https://twitter.com/"  target="_blank"><FaTwitter /></a></li>
                  <li><a href="https://instagram.com/"  target="_blank"><FaInstagram /></a></li>
                  <li><a href="https://rss.app/"  target="_blank"><FaRss /></a></li>
                </ul>
              </div>
            </div>
          </Col>
          {layoutFooterData.map((data, index) => (
            <Col lg="2" md="4" key={index}>
              <div className="footer-title">
                <h4>{data.mainTittle}</h4>
              </div>
              <div className="footer-content">
                <ul>
                  {data.children.map((item, i) => (
                    <li key={i}>
                      <Link href={item.link ? item.link : Href}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs="12">
            <div className="sub-footer">
              <p>Friendbook © 2023. All rights reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
      {animation && (
        <div className="animation-home">
          <div className="cross" />
          <div className="cross cross1" />
          <div className="tringle tringle1" />
        </div>
      )}
    </footer>
  );
};

export default SearchLayoutFooter;
