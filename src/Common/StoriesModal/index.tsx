import { FC } from "react";
import { Col, Container, Modal, ModalBody, Row } from "reactstrap";
import { StoriesModalProps } from "../CommonInterFace";
import ModalLeftBox from "./ModalLeftBox";
import { Href, ImagePath, Public } from '../../utils/constant/index';
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import ReactInstaStories from "react-insta-stories";

const StoriesModal: FC<StoriesModalProps> = ({ showModal, toggle }) => {
  const story = [
     {
       url: `${ImagePath}/post/1.jpg`,
       duration: 5000,
     },    {
       url: `${ImagePath}/post/2.jpg`,
       duration: 5000,
     },    {
       url: `${ImagePath}/post/3.jpg`,
       duration: 5000,
     },    {
       url: `${ImagePath}/post/4.jpg`,
       duration: 5000,
     },    {
       url: `${ImagePath}/post/5.jpg`,
       duration: 5000,
     },    {
       url: `${ImagePath}/post/6.jpg`,
       duration: 5000,
     },
  ];
  return (
    <Modal isOpen={showModal} toggle={toggle} modalClassName="story-model">
      <ModalBody toggle={toggle}>
        <div className="story-bg">
          <Container fluid className="p-0">
            <Row className="m-0">
              <ModalLeftBox />
              <Col xl="9" lg="8" className="right-box p-0">
                <a href={Href} onClick={toggle}>
                  <DynamicFeatherIcon
                    iconName="X"
                    className="icon-light close"
                  />
                </a>
                <div className="sliderContainer">
                  <ReactInstaStories
                    stories={story}
                    loop
                    //  width={1200}
                    //  height={720}
                  />
                </div>
                <div className="reply-section">
                  <div className="reply-form">
                    <input className="form-control" placeholder="reply..." />
                  </div>
                  <ul className="emoji icon-xl">
                    <li>
                      <img
                        src="../assets/svg/emoji/040.svg"
                        className="img-fluid blur-up lazyloaded"
                        alt="smile"
                      />
                    </li>
                    <li>
                      <img
                        src="../assets/svg/emoji/113.svg"
                        className="img-fluid blur-up lazyloaded"
                        alt="smile"
                      />
                    </li>
                    <li>
                      <img
                        src="../assets/svg/emoji/027.svg"
                        className="img-fluid blur-up lazyloaded"
                        alt="smile"
                      />
                    </li>
                    <li>
                      <img
                        src="../assets/svg/emoji/052.svg"
                        className="img-fluid blur-up lazyloaded"
                        alt="smile"
                      />
                    </li>
                    <li>
                      <img
                        src="../assets/svg/emoji/039.svg"
                        className="img-fluid blur-up lazyloaded"
                        alt="smile"
                      />
                    </li>
                    <li>
                      <img
                        src="../assets/svg/emoji/042.svg"
                        className="img-fluid blur-up lazyloaded"
                        alt="smile"
                      />
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default StoriesModal;
