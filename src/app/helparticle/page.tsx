"use client"
import HelpArticleSection from "@/components/HelpAndSupport/HelpArticle";
import SearchLayout from "@/layout/SearchLayout";

const HelpArticle: React.FC = () => {
  return (
    <SearchLayout>
      <HelpArticleSection />
    </SearchLayout>
  );
};

export default HelpArticle;
