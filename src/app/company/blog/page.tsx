"use client";
import CompanyBlog from "@/components/Company/Blog/CompanyBlog";
import CompanyLayout from "@/layout/CompanyLayout";


const CompanyBlogPage = () => {
  return (
    <CompanyLayout title="blog" activeNav="blog">
      <CompanyBlog/>
    </CompanyLayout>
  );
};

export default CompanyBlogPage;
