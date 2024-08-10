import { SharingOption } from "../../utils/constant";
import SharingOptionsForm from "./SharingOptionsForm";

const SharingOptions: React.FC = () => {
  return (
    <div className="setting-wrapper">
      <div className="setting-title">
        <h3>{SharingOption}</h3>
      </div>
      <div className="form-sec">
        <div>
          <SharingOptionsForm />
        </div>
      </div>
    </div>
  );
};

export default SharingOptions;
