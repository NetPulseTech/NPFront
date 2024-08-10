import { Container, Row } from "reactstrap";
import BlogList from "./BlogList";
import BlogSideBar from "./BlogSideBar";
import { useEffect } from "react";

const CompanyBlog: React.FC = () => {
    useEffect(() => {
        document.body.classList.add("bg-white");
        return () => {
          document.body.classList.remove("bg-white");
        };
      }, []);
  return (
    <section className="section-pb-space section-pt-space bg-white">
      <Container>
        <Row>
          <BlogList />
          <BlogSideBar />
        </Row>
      </Container>
    </section>
  );
};

export default CompanyBlog;
