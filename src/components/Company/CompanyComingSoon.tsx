import CustomImage from "@/Common/CustomImage";
import { Href, ImagePath } from "../../utils/constant";
import Image from "next/image";
import { Button, Col, Container, Input, Row } from "reactstrap";
import CountdownData from "./CountdownData";
import { FormEvent } from "react";
const CompanyComingSoon = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="coming-soon bg-size blur-up lazyloaded">
      <CustomImage src={`${ImagePath}/breadcrumb.jpg`} alt="" className="img-fluid blur-up lazyload blur-up lazyload bg-img"/>
      <div className="object">
        <div className="object-rope" />
        <div className="object-shape">
          Coming <span className="soon">Soon</span>
        </div>
      </div>
      <Container>
        <Row>
          <Col lg="6" className="m-auto">
            <div className="coming-soon-detail">
              <div>
                <div className="logo">
                  <a href={Href}>
                    <img src={`${ImagePath}/icon/logo.png`} alt="" className="img-fluid blur-up lazyloaded"/>
                  </a>
                </div>
                <h2>Will be Opening Soon!</h2>
                <div className="timer">
                  <CountdownData />
                </div>
                <form className="theme-form" onSubmit={(event: FormEvent<HTMLFormElement>) =>event.preventDefault()}>
                  <Input type="text" name="password" placeholder="Enter your email" autoFocus/>
                  <Col md="12">
                    <div className="actions">
                      <Button color="solid" className="btn-theme-light"> notify me</Button>
                    </div>
                  </Col>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="animation-emoji">
        <ul className="circles">
          {numbers.map((data, index) => (
            <li key={index}>
              <img
                src={`${ImagePath}/breadcrumb/${data}.png`}
                className="img-fluid blur-up lazyloaded"
                alt=""
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyComingSoon;
