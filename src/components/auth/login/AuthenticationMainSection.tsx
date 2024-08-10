import { BiLogoFacebook, BiLogoGooglePlus, BiLogoTwitter } from "react-icons/bi";
import { Col, Container, Row } from "reactstrap";
import { HelloEveryoneWelcome,  Login,  WelcomeNetPulseLoginAccount } from "../../../utils/constant";
import AuthenticationForm from "./AuthenticationForm";
import LoginWelcome from "./LoginWelcome";


const AuthenticationMainSection: React.FC = () => {
  const names = [
    { link: "https://www.google.com/", name: "google",logo:<BiLogoGooglePlus/> },
    { link: "https://www.facebook.com/", name: "facebook" ,logo:<BiLogoFacebook/>},
    { link: "https://twitter.com/", name: "twitter",logo:<BiLogoTwitter/> },
  ];

  return (
    <Container>
      <Row>
        <Col xl="6" lg="5" className="d-none d-lg-block">
          <LoginWelcome/>
        </Col>
        <Col xl="6" lg="7" md="10" xs="12" className="m-auto">
          <div className="login-form">
            <div>
              <div className="login-title">
                <h2>{Login}</h2>
              </div>
              <div className="login-discription">
                <h3>{HelloEveryoneWelcome}</h3>
                <h4>{WelcomeNetPulseLoginAccount}</h4>
              </div>
              <div className="form-sec">
                <div>
                  <AuthenticationForm />
                  <div className="connect-with">
                    <h6>
                      <span>OR Connect With</span>
                    </h6>
                    <ul className="social-links">
                      {names.map((data, index) => (
                        <li className={data.name} key={index}>
                          <a href={data.link} target="_blank">
                            {data.logo}
                          </a>
                        </li>
                      ))}
                    </ul>
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

export default AuthenticationMainSection;
