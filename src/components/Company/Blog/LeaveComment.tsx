import { PostComment } from "../../../utils/constant";
import { FormEvent } from "react";
import { Button, Row, Input, Col } from "reactstrap";

const LeaveComment: React.FC = () => {
  return (
    <div className="leave-comment">
      <h3 className="comment">leave a comment</h3>
      <form className="theme-form" onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}>
        <Row>
          <Col md="6" className="form-group ">
            <Input placeholder="Enter Your Name" required type="text" />
          </Col>
          <Col md="6" className="form-group col-md-6">
            <Input placeholder="Enter Your Email" required type="email" />
          </Col>
          <Col md="12" className="form-group mt-4">
            <Input type="textarea" placeholder="Leave a Comment" required rows={4}/>
          </Col>
        </Row>
        <div className="submit-btn">
          <Button color="solid">{PostComment}</Button>
        </div>
      </form>
    </div>
  );
};

export default LeaveComment;
