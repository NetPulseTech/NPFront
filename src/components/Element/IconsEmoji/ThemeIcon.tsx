import React from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import SvgIconCommon from "@/Common/SvgIconCommon";

const ThemeIcon = () => {
  return (
    <Row>
      <Col lg="9" xs="12" className="m-auto">
        <div className="element-card theme-card bg-white section-b-space">
          <CardHeader>
            <h4>theme Icon</h4>
          </CardHeader>
          <CardBody>
            <div className="icon-usage">
              <Row>
                <Col xs="12">
                  <div className="icon-box">
                    <SvgIconCommon className="iw-50 ih-50" useClassName="fill-color" iconName="game-controller"/>
                    <p>
                      <code>{`<SvgIconCommon className="iw-50 ih-50" useClassName="fill-color" iconName="game-controller"   />`}</code>
                    </p>
                  </div>
                  <div className="icon-box">
                    <SvgIconCommon className="iw-50 ih-50" useClassName="fill-color" iconName="cake"/>
                    <p>
                      <code>{`<SvgIconCommon className="iw-50 ih-50" useClassName="fill-color" iconName="cake"   />`}</code>
                    </p>
                  </div>
                  <div className="icon-box">
                    <SvgIconCommon className="iw-50 ih-50" useClassName="fill-color" iconName="degree"/>
                    <p>
                      <code>{`<SvgIconCommon className="iw-50 ih-50" useClassName="fill-color" iconName="degree"   />`}</code>
                    </p>
                  </div>
                  <div className="icon-box">
                    <SvgIconCommon className="iw-50 ih-50" useClassName="fill-color" iconName="blood-drop"/>
                    <p>
                      <code>{`<SvgIconCommon className="iw-50 ih-50" useClassName="fill-color" iconName="blood-drop"   />`}</code>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </div>
      </Col>
    </Row>
  );
};

export default ThemeIcon;
