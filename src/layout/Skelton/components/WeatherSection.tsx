import React from "react";
import { Container, Input, InputGroup } from "reactstrap";

const WeatherSection = () => {
  return (
    <Container fluid className="section-t-space px-0">
      <div className="page-content">
        <div className="content-left">
          <div>
            <div className="weather-section weather-light">
              <div className="card-title">
                <h3 />
                <div className="settings">
                  <div className="setting-btn" />
                </div>
              </div>
              <div className="weather-content">
                <div className="top-title">
                  <h2 />
                  <h5 />
                </div>
                <h5 />
                <h6 />
              </div>
            </div>
          </div>
          <div>
            <div className="weather-search section-t-space">
              <div className="card-title">
                <h3 />
                <div className="settings">
                  <div className="setting-btn" />
                </div>
              </div>
              <form className="theme-form">
                <InputGroup>
                  <Input />
                </InputGroup>
                <InputGroup>
                  <Input />
                </InputGroup>
                <InputGroup>
                  <Input />
                </InputGroup>
                <div className="btn-section text-right">
                  <div className="btn ldr-btn" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="content-center">
          <div className="forecast-table section-b-space">
            <div className="card-title">
              <h3 />
              <div className="settings">
                <div className="setting-btn" />
              </div>
            </div>
            <div className="table-sec">
              <div className="detail-box">
                <h3 />
                <h5 className="tag" />
                <div className="ldr-p">
                  <p />
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WeatherSection;
