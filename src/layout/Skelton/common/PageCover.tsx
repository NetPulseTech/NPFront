import { Href } from "../../../utils/constant";
import { dynamicNumber } from "../../../utils/DynamicNumberArray";

const PageCover = () => {
  return (
    <div className="page-cover">
      <div className="cover-img bg-size"> </div>
      <div className="cover-content">
        <div className="page-logo"></div>
        <a href={Href} className="page-name">
          <h4 />
          <h6 />
        </a>
        <div className="page-stats">
          <ul>
            {dynamicNumber(5).map((data) => (
              <li key={data}>
                <h2 />
                <h6 />
              </li>
            ))}
          </ul>
        </div>
        <div className="social-btn">
          <ul>
            <li className="facebook" />
            <li className="twitter" />
            <li className="whatsapp" />
            <li className="instagram" />
            <li className="youtube" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageCover;
