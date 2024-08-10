"use client";
import FormAndRadio from "@/components/Element/Typography/FormAndRadio";
import HeadingAndText from "@/components/Element/Typography/HeadingAndText";
import InlineTextAndAlignment from "@/components/Element/Typography/InlineTextAndAlignment";
import ListSection from "@/components/Element/Typography/ListSection";
import OtherSection from "@/components/Element/Typography/OtherSection";
import PopoverAndTooltip from "@/components/Element/Typography/PopoverAndTooltip";
import SocialIcons from "@/components/Element/Typography/SocialIcons";
import SwitchAndPagination from "@/components/Element/Typography/SwitchAndPagination";
import ThemeColor from "@/components/Element/Typography/ThemeColor";
import CompanyLayout from "@/layout/CompanyLayout";

const Typography = () => {
  return (
    <CompanyLayout title="Typography">
      <section className=" typography-section">
        <ThemeColor/>
        <HeadingAndText/>
        <SwitchAndPagination/>
        <InlineTextAndAlignment/>
        <ListSection/>
        <PopoverAndTooltip/>
        <FormAndRadio/>
        <SocialIcons/>
        <OtherSection/>
      </section>
    </CompanyLayout>
  );
};

export default Typography;
