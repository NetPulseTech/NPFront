import { Back, ImagePath, Login } from "../../utils/constant";
import Image from "next/image";
import Link from "next/link";
import { Button, Container, NavItem, NavLink } from "reactstrap";
import SearchBox from "../CommonLayout/CommonLayoutHeader/SearchBox";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { useState } from "react";
import { Href } from "../../utils/constant/index";
import { CompanyHeaderInterFace } from "../LayoutTypes";
import { companyNavBarData } from "@/Data/Layout";

const CompanyHeader: React.FC<CompanyHeaderInterFace> = ({ activeNav }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const DarkModeHandler = (name: boolean) => {
    document.body.classList.remove("bg-white")
    if (name) {
      document.body.classList.remove("dark");
      setDarkMode(!darkMode);
    } else {
      document.body.classList.add("dark");
      setDarkMode(!darkMode);
    }
  };
  return (
    <header className="no-sticky bg-transparent">
      <Container fluid className="custom-padding">
        <div className="header-section">
          <div className="header-left">
            <div className="brand-logo">
              <Link href="/newsfeed/style1">
                <img src={`${ImagePath}/icon/logo.png`} alt="logo" className="img-fluid blur-up lazyloaded"/>
              </Link>
            </div>
            <SearchBox />
          </div>
          <div className="header-right">
            <nav className="navbar navbar-expand-lg pe-0">
              <div className={`overlay-bg ${navOpen ? "show" : ""}`} />
              <Button className="navbar-toggler p-0" onClick={() => setNavOpen(!navOpen)}>
                <DynamicFeatherIcon iconName="Menu" className="icon iw-22 ih-22 icon-light"/>
              </Button>
              <div className={`navbar-collapse ${navOpen ? "show" : ""}`}>
                <ul className="navbar-nav">
                  <NavItem className="d-block d-lg-none back-btn" onClick={() => setNavOpen(!navOpen)}>
                    <NavLink href={Href}>{Back}</NavLink>
                  </NavItem>
                  {companyNavBarData.map((data, index) => (
                    <NavItem key={index} className={data.title === activeNav  ? "active" : ""}>
                      <Link className={`nav-link `} href={data.navigate}>
                        {data.title}
                      </Link>
                    </NavItem>
                  ))}
                  <NavItem>
                    <Link className="nav-link d-flex" href="/auth/login">
                      <DynamicFeatherIcon iconName="LogIn" className="me-2 iw-20 ih-20"/>{Login}
                    </Link>
                  </NavItem>
                  <li className="header-btn margin-1 nav-item">
                    <NavLink className=" res-dark" href={Href} onClick={() => DarkModeHandler(darkMode)}>
                      <DynamicFeatherIcon iconName={darkMode ? "Sun" : "Moon"} className="icon-light stroke-width-3 iw-16 ih-16"/>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default CompanyHeader;
