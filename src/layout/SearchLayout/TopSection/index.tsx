import React from "react";
import CustomImage from "@/Common/CustomImage";
import { ImagePath } from "../../../utils/constant";
import { Col, Container, Input, Row } from "reactstrap";

const TopSection = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section className="breadcrumb-section bg-size blur-up lazyloaded">
      <CustomImage
        src={`${ImagePath}/breadcrumb.jpg`}
        className="img-fluid blur-up lazyload bg-img"
        alt=""
      />
      <div className="animation-emoji">
        <ul className="circles">
          {images.map((data) => (
            <li key={data}>
              <img
                src={`${ImagePath}/breadcrumb/${data}.png`}
                className="img-fluid blur-up lazyloaded"
                alt=""
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="help-search">
        <Container>
          <Row>
            <Col lg="6" md="8" xs="12" className="m-auto">
              <h2>how can we help you?</h2>
              <form
                onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
                  event.preventDefault()
                }
              >
                <Input type="search" placeholder="Search something here..." />
                <span>popular topics: privacy, security, profile</span>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default TopSection;
