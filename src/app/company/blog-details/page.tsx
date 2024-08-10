"use client";
import BlogSideBar from "@/components/Company/Blog/BlogSideBar";
import DetailBlog from "@/components/Company/Blog/DetailBlog";
import CompanyLayout from "@/layout/CompanyLayout";
import React from "react";
import { Container, Row } from "reactstrap";

const CompanyBlogDetails = () => {
  return (
    <CompanyLayout title="blog details" activeNav="blog">
      <section className="section-pb-space section-pt-space bg-white">
        <Container>
          <Row>
            <DetailBlog/>
            <BlogSideBar />
          </Row>
        </Container>
      </section>
    </CompanyLayout>
  );
};

export default CompanyBlogDetails;
