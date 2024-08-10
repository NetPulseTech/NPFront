import CustomImage from "@/Common/CustomImage";
import { ImagePath } from "../../utils/constant";
import { Col, Container, Row } from "reactstrap";
import { CompanyHomeSectionInterFace } from "../LayoutTypes";
const CompanyHomeSection: React.FC<CompanyHomeSectionInterFace> = ({
  title,
}) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section className="breadcrumb-section breadcrumb-sm bg-size blur-up lazyloaded">
      <CustomImage
        src={`${ImagePath}/breadcrumb.jpg`}
        className="img-fluid blur-up lazyload bg-img"
        alt=""
      />
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
      <div className="help-search">
        <Container>
          <Row>
            <Col lg="6" md="8" xs="12" className="m-auto emoji-title">
              <h2>{title}</h2>
              <nav aria-label="breadcrumb ">
                <ol className="breadcrumb theme-breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {title}
                  </li>
                </ol>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default CompanyHomeSection;
