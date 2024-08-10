"use client";
import { Container } from "reactstrap";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
import { CommonLayoutHeaderInterFace } from "@/layout/LayoutTypes";

const CommonLayoutHeader: React.FC<CommonLayoutHeaderInterFace> = ({headerClassName,differentLogo}) => {
  return (
    <header className={headerClassName?headerClassName :""}>
      <div className="mobile-fix-menu" />
      <Container fluid={true} className="custom-padding">
        <div className="header-section">
          <LeftHeader differentLogo={differentLogo} />
          <RightHeader />
        </div>
      </Container>
    </header>
  );
};

export default CommonLayoutHeader;
