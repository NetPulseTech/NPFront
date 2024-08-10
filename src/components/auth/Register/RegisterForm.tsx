import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { FullName, Password } from "../../../utils/constant";
import Link from "next/link";
import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const RegisterForm = () => {
  return (
    <form className="theme-form">
      <FormGroup>
        <Label>{FullName}</Label>
        <Input type="text" placeholder="Your Name" />
        <DynamicFeatherIcon
          iconName="User"
          className="input-icon iw-20 ih-20"
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="exampleInputEmail1">Email address</label>
        <Input type="email" placeholder="Enter email" />
        <DynamicFeatherIcon
          iconName="Mail"
          className="input-icon iw-20 ih-20"
        />
      </FormGroup>
      <FormGroup>
        <Label>{Password}</Label>
        <Input type="password" autoComplete="" placeholder="Password" />
        <DynamicFeatherIcon iconName="Eye" className="input-icon iw-20 ih-20" />
      </FormGroup>
      <div className="bottom-sec">
        <div className="form-check checkbox_animated">
          <Input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            remember me
          </label>
        </div>
        <a href="#">
          forget password?
        </a>
      </div>
      <div className="btn-section">
        <a href="#" className="btn btn-solid btn-lg">
          sign up
        </a>
        <Link href="/auth/login" className="btn btn-solid btn-lg ms-auto">
          login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
