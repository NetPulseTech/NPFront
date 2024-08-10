import { Next, ThemePagination } from "../../../utils/constant";
import React from "react";
import { CardBody, CardHeader, Col } from "reactstrap";
import { Href } from '../../../utils/constant/index';
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";

const Pagination = () => {
  return (
    <Col md="6">
      <CardHeader>
        <h4>{ThemePagination}</h4>
        <span>you can also use bootstrap pagination by removing theme-pagination class</span>
      </CardHeader>
      <div className="pagination-section">
        <CardBody>
          <nav className="pagination-section mt-0">
            <ul className="pagination theme-pagination justify-content-start">
              <li className="page-item">
                <a className="page-link" href={Href}>
                  <DynamicFeatherIcon
                    iconName="ChevronLeft"
                    className="iw-15 ih-15"
                  />
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href={Href}>
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href={Href}>
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href={Href}>
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href={Href}>
                  <DynamicFeatherIcon iconName="ChevronRight" className="iw-15 ih-15"/>
                  <span className="sr-only">{Next}</span>
                </a>
              </li>
            </ul>
          </nav>
        </CardBody>
      </div>
    </Col>
  );
};

export default Pagination;
