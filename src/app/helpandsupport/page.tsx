"use client";
import ContactUS from "@/components/HelpAndSupport/ContactUS";
import PopularTopics from "@/components/HelpAndSupport/PopularTopics";
import SearchLayout from "@/layout/SearchLayout";
import React from "react";

const HelpAndSupport = () => {
  return (
    <SearchLayout>
      <PopularTopics />
      <ContactUS />
    </SearchLayout>
  );
};

export default HelpAndSupport;
