import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Href, Next, Previous } from "../../../utils/constant";

const PaginationSection: React.FC = () => {
  return (
    <nav className="pagination-section mt-0">
      <ul className="pagination theme-pagination">
        <li className="page-item">
          <a className="page-link" href={Href}>
            <DynamicFeatherIcon iconName="ChevronLeft" className="iw-15 ih-15"/>
            <span className="sr-only">{Previous}</span>
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href={Href}>1</a>
        </li>
        <li className="page-item">
          <a className="page-link" href={Href}>2</a>
        </li>
        <li className="page-item">
          <a className="page-link" href={Href}>3</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            <DynamicFeatherIcon iconName="ChevronRight" className="iw-15 ih-15"/>
            <span className="sr-only">{Next}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationSection;
