import {HelloEveryoneWelcome,Login,WelcomeNetPulseLoginAccount} from "../../../utils/constant";
import { Col, Container, Row } from "reactstrap";
import LoginForm from "./LoginForm";
import SocialLinks from "./SocialLinks";
import LoginWelcome from "./LoginWelcome";

const LoginMainSection:React.FC = () => {
  return (
    <Container>
      <Row>
        <Col xl="6" lg="5" className="d-none d-lg-block">
          <LoginWelcome/>
        </Col>
        <Col xl="6" lg="7" md="10" xs="12" className="m-auto">
          <div className="login-form">
            <div>
              <div className="login-title"><h2>{Login}</h2></div>
              <div className="login-discription">
                <h3>{HelloEveryoneWelcome}</h3>
                <h4>{WelcomeNetPulseLoginAccount}</h4>
              </div>
              <div className="form-sec">
                <div>
                  <LoginForm />
                  <div className="connect-with">
                    <h6>
                      <span>OR Connect With</span>
                    </h6>
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginMainSection;
