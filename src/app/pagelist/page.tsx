"use client";
import CommonLayout from "@/layout/CommonLayout";
import PageListCover from "@/components/PageList/PageListCover";
import PageListNav from "@/components/PageList/PageListNav";
import { Container, Row } from "reactstrap";
import SinglePage from "@/components/PageList/SinglePage";

const PageList = () => {
  return (
    <CommonLayout mainClass="custom-padding event-page" loaderName="pageList">
      <div className="page-center">
        <PageListCover />
        <Container fluid className="section-t-space px-0">
          <div className="page-content">
            <div className="content-center w-100">
              <PageListNav />
              <div className="page-list-section section-t-space">
                <Row>
                  <SinglePage />
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </CommonLayout>
  );
};

export default PageList;
