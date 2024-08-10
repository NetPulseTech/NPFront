import { Col } from "reactstrap";
import ArticleAccordion from "./ArticleAccordion";
import Link from "next/link";
import { Href } from '../../utils/constant/index';

const ArticlePart: React.FC = () => {
  return (
    <Col lg="9" className="order-lg-1">
      <div className="article-part">
        <div className="main-title">
          <h2>how to create netpulse account</h2>
        </div>
        <div className="content">
          <p> A netpulse is social media website. With a netpulse Account, you can do things like:</p>
          <ul>
            <li>make a new friend</li>
            <li>make unforgettable events</li>
            <li>connect with people</li>
          </ul>
        </div>
        <div className="sub-title">
          <h3>step: 1 Create Friendbook Account</h3>
        </div>
        <div className="content">
          <p> When you create a Friendbook Account, we ask for some personal info. By providing accurate info, you can help keep your account secure and make our services more useful.</p>
          <ArticleAccordion />
          <div className="inner-title">
            <h4>Use an existing email address </h4>
          </div>
          <ol>
            <li> Go to the <Link href="/auth/register">Friendbook Register page</Link></li>
            <li>Enter your name.</li>
            <li>Click Use my current email address instead.</li>
            <li>Enter your current email address.</li>
            <li>Enter your current email address.</li>
            <li> Verify your email address with the code sent to your existing email.</li>
            <li>Click Verify.</li>
          </ol>
        </div>
        <div className="sub-title">
          <h3>step: 2 Protect your account with recovery info</h3>
        </div>
        <div className="content mb-0">
          <p>If you forget your password or someone is using your account without your permission, updated recovery info makes it much more likely you’ll get your account back.</p>
          <ul>
            <li><a href={Href}>Add a recovery phone number</a></li>
            <li><a href={Href}>Add a recovery email address</a></li>
          </ul>
        </div>
      </div>
    </Col>
  );
};

export default ArticlePart;
