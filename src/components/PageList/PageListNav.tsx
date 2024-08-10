import { CreatePage, Href } from "../../utils/constant/index";
const PageListNav: React.FC = () => {
  const navNames = ["top suggestions","invitation","followed pages","your pages","create page",];
  return (
    <div className="profile-menu ms-0 me-0">
      <ul>
        {navNames.map((data, index) => (
          <li
            key={index}
            className={`${data === "followed pages"? "active": data === "create page"? "d-xl-none d-inline-block": ""}`}
          >
            <a href={Href}>
              <h6>{data}</h6>
            </a>
          </li>
        ))}
      </ul>
      <ul className="right-menu d-xl-flex d-none">
        <li>
          <a href={Href}>
            <h6>{CreatePage}</h6>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PageListNav;
