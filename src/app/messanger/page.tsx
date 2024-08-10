"use client";
import MessengerSection from "@/components/Messenger";
import CommonLayoutHeader from "@/layout/CommonLayout/CommonLayoutHeader";
import ThemeCustomizer from "@/layout/CommonLayout/ThemeCustomizer";
import { FC } from "react";
import LoadingLoader from "@/layout/LoadingLoader";

const Messenger: FC = () => {
  return (
    <>
      <LoadingLoader />
      <CommonLayoutHeader headerClassName="d-none d-sm-block" />
      <MessengerSection />
      <ThemeCustomizer />
    </>
  );
};

export default Messenger;
