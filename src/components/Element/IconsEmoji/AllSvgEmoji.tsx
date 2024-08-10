import { SvgPath } from "../../../utils/constant";
import { DynamicNumberArray } from "@/utils/DynamicNumberArray";
import Image from "next/image";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

const AllSvgEmoji = () => {
  return (
    <Row className="sm-pt-space">
      <Col lg="9" xs="12" className="m-auto">
        <div className="element-card theme-card bg-white">
          <CardHeader>
            <h4>all svg emoji</h4>
          </CardHeader>
          <CardBody>
            <div className="icon-usage">
              <Row>
                <Col xs="12">
                  <ul className="element-emoji">
                    {DynamicNumberArray(115,3).map((emojiFilename, index) => (<li key={index}><Image height={40} width={40} className="inner-emoji" src={`${SvgPath}/emoji/${emojiFilename}.svg`} alt=""/></li>))}
                  </ul>
                </Col>
              </Row>
            </div>
          </CardBody>
        </div>
      </Col>
    </Row>
  );
};

export default AllSvgEmoji;
