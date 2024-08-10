import { SvgPath } from "../../../utils/constant";
import Image from "next/image";

const FeatureLisiting: React.FC = () => {
  const names = [
    "Easy to Register with your Device.",
    "Register in a minute by your Email ID",
    "Your Data is Secure with us.",
  ];

  return (
    <ul className="feature-lisiting">
      {names.map((data, index) => (
        <li key={index}>
          <Image
            height={18}
            width={18}
            src={`${SvgPath}/checkmark.svg`}
            className="img-fluid blur-up lazyloaded"
            alt=""
          />
          {data}
        </li>
      ))}
    </ul>
  );
};

export default FeatureLisiting;
