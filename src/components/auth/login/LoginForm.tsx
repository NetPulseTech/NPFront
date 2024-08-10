import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { EmailAddress, ForgetPassword, Login, Password, RememberMe, SignUp } from "../../../utils/constant";
import Link from "next/link";
import { FormGroup, Input, Label } from "reactstrap";

const LoginForm:React.FC = () => {
  return (
    <form className="theme-form">
      <FormGroup>
        <Label>{EmailAddress}</Label>
        <Input type="email" placeholder="Enter email" />
        <DynamicFeatherIcon iconName="User" className="input-icon iw-20 ih-20"/>
      </FormGroup>
      <FormGroup>
        <Label>{Password}</Label>
        <Input type="password" autoComplete="" placeholder="Password" />
        <DynamicFeatherIcon iconName="Eye" className="input-icon iw-20 ih-20" />
      </FormGroup>
      <div className="bottom-sec">
        <div className="form-check checkbox_animated">
          <Input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">{RememberMe}</label>
        </div>
        <a href="#" className="forget-password">{ForgetPassword}</a>
      </div>
      <div className="btn-section">
        <a href="#" className="btn btn-solid btn-lg">
          {Login}
        </a>
        <Link href="/auth/register" className="btn btn-solid btn-lg ms-auto">
          {SignUp}
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
