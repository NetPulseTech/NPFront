import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { FC, useState } from "react";
import { Input } from "reactstrap";

const SearchBar: FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const searchToogle = () => {
    setSearchOpen(!searchOpen);
  };
  return (
    <div className="search-bar">
      <div className="lg-search">
        <DynamicFeatherIcon
          iconName="Search"
          className="icon-theme icon iw-16"
          onClick={searchToogle}
        />
        <Input type="text" placeholder="find friends..." />
      </div>
      <div className={`xs-search ${searchOpen ? "open-full" : ""}`}>
        <div className="icon-search">
          <DynamicFeatherIcon
            iconName="Search"
            className="icon-dark  iw-16"
            onClick={searchToogle}
          />
        </div>
        <div className="lg-search">
          <DynamicFeatherIcon
            iconName="Search"
            className="icon-dark icon iw-16"
            onClick={searchToogle}
          />
          <Input type="text" placeholder="find friends..." />
          <div className="icon-close">
            <DynamicFeatherIcon
              iconName="X"
              className="icon-dark iw-16"
              onClick={searchToogle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
