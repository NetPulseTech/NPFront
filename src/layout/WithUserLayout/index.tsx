import { FC, ReactNode } from "react";
import CommonLayoutHeader from "../CommonLayout/CommonLayoutHeader";
import { Container } from "reactstrap";
import PanelSideBar from "./PanelSideBar";
import ThemeCustomizer from "../CommonLayout/ThemeCustomizer";
import ConversationPanel from "../CommonLayout/ConversationPanel";
import { skeltonLoaderList } from "@/Data/Layout";
interface WithUserLayoutInterFace {
  children: ReactNode;
  loaderName: string;
  mainClassName?: string;
}

const WithUserLayout: FC<WithUserLayoutInterFace> = ({children,mainClassName,loaderName="defaultLoader"}) => {
  return (
    <>
      {skeltonLoaderList[loaderName]}
      <CommonLayoutHeader headerClassName="" />
      <Container fluid className={`page-body newsfeed-style6 ${mainClassName ? mainClassName : ""}`}>
        <PanelSideBar />
        {children}
        <ConversationPanel sidebarClassName="" />
      </Container>
      <ThemeCustomizer />
    </>
  );
};

export default WithUserLayout;
