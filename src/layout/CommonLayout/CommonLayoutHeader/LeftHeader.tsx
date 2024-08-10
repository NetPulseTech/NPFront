import BrandLogo from "./BrandLogo";
import LeftButtons from "./LeftButtons";
import SearchBox from "./SearchBox";

const LeftHeader = ({differentLogo}:{differentLogo?:string}) => {
  return (
    <div className="header-left">
      <BrandLogo differentLogo={differentLogo} />
      <SearchBox />
      <LeftButtons />
    </div>
  );
};

export default LeftHeader;
