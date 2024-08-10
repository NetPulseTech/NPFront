"use client";
import UserProFile from "@/Common/UserProFile";
import BirthDayCover from "@/components/BirthDay/BirthDayCover";
import BirthdayCards from "@/components/BirthDay/BirthdayCards";
import BirthdayReminder from "@/components/NewsFeed/Style1/ContentRight/BirthdayReminder";
import FriendSuggestion from "@/components/NewsFeed/Style1/LeftContent/FriendSuggestion";
import CommonLayout from "@/layout/CommonLayout";
import { Container } from "reactstrap";

const BirthDay = () => {
  return (
    <CommonLayout mainClass="birthday-page custom-padding" loaderName="birthDayLoader">
      <div className="page-center">
        <BirthDayCover />
        <Container fluid className="section-t-space px-0">
          <div className="page-content">
            <div className="content-center">
              <BirthdayCards />
            </div>
            <div className="content-left d-none d-xl-block">
              <UserProFile />
              <FriendSuggestion />
              <BirthdayReminder />
            </div>
          </div>
        </Container>
      </div>
    </CommonLayout>
  );
};

export default BirthDay;
