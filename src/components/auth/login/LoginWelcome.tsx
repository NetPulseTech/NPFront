import { WelcomeBack } from "@/utils/constant";
import Image from "next/image";
import welcomeImage from "../../../../public/assets/images/login/charcter.png";

const LoginWelcome = () => {
  return (
    <div className="login-welcome">
      <div>
        <Image
          height={422}
          width={629}
          src={welcomeImage}
          className="img-fluid blur-up lazyloaded"
          alt="charcter"
          priority
        />
        <h1>{WelcomeBack}</h1>
      </div>
    </div>
  );
};

export default LoginWelcome;
