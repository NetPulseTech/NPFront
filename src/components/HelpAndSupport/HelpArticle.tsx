import { Col, Container, Row } from "reactstrap";
import ArticlePart from "./ArticlePart";
import { RelatedTopics } from "../../utils/constant";
import { sideBarLists } from "@/Data/HelpAndSupport";
import { Href } from "../../utils/constant/index";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";

const HelpArticleSection: React.FC = () => {
  return (
    <section className="section-pt-space section-pb-space article-section">
      <Container>
        <Row>
          <ArticlePart />
          <Col lg="3">
            <div className="article-sidebar sticky-cls-top theme-card">
              <div className="sidebar-title">
                <h3>{RelatedTopics}</h3>
              </div>
              <ul>
                {sideBarLists.map((data, index) => (
                  <li className={index === 0 ? "active" : ""} key={index}>
                    <a href={Href}>
                      <DynamicFeatherIcon iconName="FileText" />
                      <h6>{data}</h6>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HelpArticleSection;
