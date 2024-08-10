"use client";
import ForecastTable from "@/components/Weather/ForecastTable";
import WeatherCover from "@/components/Weather/WeatherCover";
import SearchLocation from "@/components/Weather/WeatherCover/SearchLocation";
import WeatherCard from "@/components/Weather/WeatherCover/WeatherCard";
import CommonLayout from "@/layout/CommonLayout";
import { FC } from "react";
import { Container } from "reactstrap";

const WeatherStyle: FC = () => {
  return (
    <CommonLayout mainClass="weather-page custom-padding" loaderName="weatherSkelton">
      <div className="page-center">
        <WeatherCover />
        <Container fluid className="section-t-space px-0">
          <div className="page-content">
            <div className="content-left">
              <WeatherCard />
              <SearchLocation />
            </div>
            <div className="content-center">
              <ForecastTable />
            </div>
          </div>
        </Container>
      </div>
    </CommonLayout>
  );
};

export default WeatherStyle;
