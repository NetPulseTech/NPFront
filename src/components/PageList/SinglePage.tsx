import { Col } from "reactstrap";
import CustomImage from "@/Common/CustomImage";
import {CreatePage,DanceAcademy,Followed,Followers,Following,ImagePath,Invite,Likes} from "../../utils/constant";
import { Href } from "../../utils/constant/index";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";

const SinglePage: React.FC = () => {
  let numberOfPages = [1, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      {numberOfPages.map((data, index) =>
        data === 1 ? (
          <Col xl="3" lg="4" sm="6" key={index}>
            <div className="list-box create-page">
              <div>
                <DynamicFeatherIcon iconName="PlusCircle" className="iw-30 ih-30"/>
                <h5 className="card-title">{CreatePage}</h5>
                <p>create page to reach more people</p>
              </div>
            </div>
          </Col>
        ) : (
          <Col xl="3" lg="4" sm="6" key={index}>
            <div className="list-box">
              <div className="cover-img bg-size blur-up lazyloaded">
                <CustomImage src={`${ImagePath}/cover/${data}.jpg`} className="img-fluid blur-up lazyload bg-img" alt="image"/>
                <div className="logo-img">
                  <a href={Href} className="bg-size blur-up lazyloaded">
                    <CustomImage src={`${ImagePath}/pages-logo/6.png`} className="img-fluid blur-up lazyload bg-img" alt=""/>
                  </a>
                </div>
              </div>
              <div className="list-content">
                <div className="page-name">
                  <a href={Href}>
                    <h4>{DanceAcademy}</h4>
                  </a>
                  <h6>danceacadamy@gmail.com</h6>
                </div>
                <div className="counter-stats">
                  <ul>
                    <li><h3 className="counter-value">546</h3><h5>{Following}</h5></li>
                    <li><h3 className="counter-value">26335</h3><h5>{Likes}</h5></li>
                    <li><h3 className="counter-value">6845</h3><h5>{Followers}</h5></li>
                  </ul>
                </div>
                <div className="bottom-btn">
                  <a href={Href} className="btn btn-solid">{Followed}</a>
                  <a href={Href} className="btn btn-solid">{Invite}</a>
                </div>
              </div>
            </div>
          </Col>
        )
      )}
    </>
  );
};

export default SinglePage;
