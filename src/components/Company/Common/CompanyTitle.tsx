import { Col } from "reactstrap";
import { CompanyTitleInterFace } from "../CompanyInterFace";

const CompanyTitle: React.FC<CompanyTitleInterFace> = ({
  mainTitle,
  parentTitle,
}) => {
  return (
    <Col xs="12">
      <div className="title-sec">
        <h4>{mainTitle}</h4>
        <h3>{parentTitle}</h3>
      </div>
    </Col>
  );
};

export default CompanyTitle;
