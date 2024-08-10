import { FC } from "react";
import CommonHeader from "./Common/CommonHeader";
import { Input, InputGroup } from "reactstrap";
import { Href } from '../../../utils/constant/index';

const SearchLocation: FC = () => {
  return (
    <div>
      <div className="weather-search section-t-space">
      <CommonHeader tittle="search location" />
        <form className="theme-form">
          <InputGroup>
            <Input type="text" placeholder="Search location"/>
          </InputGroup>
          <InputGroup>
            <select className="custom-select">
              <option value=''>Unit...</option>
              <option value={1}>ºC- Celsuis</option>
              <option value={2}>ºF - Fahrenheit</option>
              <option value={3}>ºK - Kelvin</option>
            </select>
          </InputGroup>
          <InputGroup>
            <select className="custom-select">
              <option value=''>forecast days...</option>
              <option value={1}>next 7 days</option>
              <option value={2}>next 15 days</option>
              <option value={3}>next 1 month</option>
            </select>
          </InputGroup>
          <div className="btn-section text-right">
            <a href={Href} className="btn btn-solid">
              search
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchLocation;
