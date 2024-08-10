import { Input } from "reactstrap";

const BirthdayReminder = () => {
  return (
    <div className="birthday-section bg-size">
      <div className="birthday-top">
        <div className="title">
          <h3 />
          <h6 />
        </div>
      </div>
      <div className="birthday-content">
        <div className="image-section">
          <div className="icon"></div>
          <div className="center-profile"></div>
          <div className="icon"></div>
        </div>
        <div className="details">
          <h3 />
          <h6 />
          <div className="ldr-p">
            <p />
            <p />
          </div>
          <form>
            <Input type="text" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BirthdayReminder;
