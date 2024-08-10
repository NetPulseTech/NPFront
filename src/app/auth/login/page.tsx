"use client";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import LoginHeaderSection from "@/components/auth/login/LoginHeaderSection";
import LoginMainSection from "@/components/auth/login/LoginMainSection";
import ThemeCustomizer from "@/layout/CommonLayout/ThemeCustomizer";
import LoadingLoader from "@/layout/LoadingLoader";
import { Media } from "reactstrap";

const Login = () => {
  return (
    <>
    <LoadingLoader/>
    <section className="login-section">
      <LoginHeaderSection />
      <LoginMainSection />  
      <div className="how-work">
        <Media>
          <DynamicFeatherIcon iconName="PlayCircle" />
          <Media body>
            <h2>how it work?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
          </Media>
        </Media>
      </div>
    </section>
    <ThemeCustomizer/>
    </>
  );
};

export default Login;
