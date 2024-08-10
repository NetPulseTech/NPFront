"use client";
import { ImagePath } from "../../../utils/constant";
import CompanyLayout from "@/layout/CompanyLayout";
import Link from "next/link";
import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

const CompanyAbout = () => {
  useEffect(() => {
    document.body.classList.add("bg-white");
    return () => {
      document.body.classList.remove("bg-white");
    };
  }, []);
  const images = ["first", "second", "third"];
  return (
    <CompanyLayout  title="404">
      <section className="error-section">
        <Container>
          <Row>
            <Col md="8" className="m-auto">
              <div className="error-img">
                {images.map((data, index) => (
                  <img key={index} src={`${ImagePath}/404/${index + 1}.png`} className={`img-fluid blur-up ${data}-img lazyloaded`} alt={data}/>
                ))}
              </div>
              <div className="error-content">
                <p>the page you requested could not be found</p>
                <Link href="/" className="btn btn-solid btn-lg">
                  back to home
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </CompanyLayout>
  );
};

export default CompanyAbout;
