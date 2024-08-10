import {  Archive, Href, ImagePath, Settings, Stories, YourStory } from "../../utils/constant";
import { FC } from "react";
import { Col, Media } from "reactstrap";
import AddStoryNew from "./AddStoryNew";
import CustomImage from "../CustomImage";

const ModalLeftBox: FC = () => {
  let names = [
    { name: "petey cruiser", time: 2 },
    { name: "Anna Sthesia", time: 3 },
    { name: "Paul Molive", time: 5 },
    { name: "Anna maul ", time: 5 },
    { name: "paige turner", time: 5 },
    { name: "Bob Frapples", time: 5 },
  ]
  return (
    <Col xl="3" lg="4" className="left-box">
      <div className="model-title">
        <div className="title-main">
          <h2>{Stories}</h2>
        </div>
        <div className="title-setting">
          <ul>
            <li>
              <a href={Href}>{Archive}</a>
            </li>
            <li>
              <a href={Href}>{Settings}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="modal-flex story-images">
        <AddStoryNew />

        <div className="friend-story theme-scrollbar">
          <h4 className="story-title">all stories</h4>
          {names.map((data, index) => <div key={index}>
            <Media className="list-media" >
              <div className="story-img seen">
                <div className="user-img bg-size blur-up lazyloaded">
                  <CustomImage src={`${ImagePath}/user-sm/${index + 1}.jpg`} className=" bg-img" alt="user" />
                </div>
              </div>
              <Media body>
                <h5>{data.name}</h5>
                <h6>{data.time} hours ago</h6>
              </Media>
            </Media>
          </div>)}


        </div>
      </div>
    </Col>
  );
};

export default ModalLeftBox;
