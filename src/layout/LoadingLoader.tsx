import LoaderHoc from "@/utils/LoaderHoc";
import { LoadingLoaderProps } from "./LayoutTypes";

const LoadingLoader: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <>
      {show && (
        <div className="loading-text">
          <div>
            <h1 className="animate">Loading</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default LoaderHoc(LoadingLoader);
