import React from 'react'
import { CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import ThemeForm from './ThemeForm'

const FormAndRadio = () => {
  return (
    <div className="element-card section-pb-space section-pt-space bg-white">
  <Container>
    <Row>
      <ThemeForm />
      <Col md="6">
        <CardHeader>
          <h4>radio &amp; checkbox</h4>
          <span>Styling for radio and checkbox buttons.</span>
        </CardHeader>
        <CardBody className=" input_button">
          <Row>
            <Col sm="6">
              <form>
                <div>
                  <input className="radio_animated" type="radio" name="gender" id="one" defaultValue="male" />
                  <label htmlFor="one" className="mb-2">Radio button1</label>
                </div>
                <div>
                  <input className="radio_animated" type="radio" name="gender" id="two" defaultValue="male" />
                  <label htmlFor="two" className="mb-2">Radio button2</label>
                </div>
                <div>
                  <input className="radio_animated" type="radio" name="gender" id="three" defaultValue="male" />
                  <label htmlFor="three" className="mb-2">Radio button3</label>
                </div>
                <div>
                  <input className="radio_animated" type="radio" name="gender" id="four" defaultValue="male" />
                  <label htmlFor="four" className="mb-2">Radio button4</label>
                </div>
                <div>
                  <input className="radio_animated" type="radio" name="gender" id="five" defaultValue="male" />
                  <label htmlFor="five" className="mb-2">Radio button5</label>
                </div>
              </form>
            </Col>
            <div className="col-sm-6">
              <form className="checkbox_animated">
                <div>
                  <input type="checkbox" name="gender" id="six" defaultValue="male" />
                  <label htmlFor="six" className="mb-2">checkbox button1</label>
                </div>
                <div>
                  <input type="checkbox" name="gender" id="seven" defaultValue="male" />
                  <label htmlFor="seven" className="mb-2">checkbox button2</label>
                </div>
                <div>
                  <input type="checkbox" name="gender" id="eight" defaultValue="male" />
                  <label htmlFor="eight" className="mb-2">checkbox button3</label>
                </div>
                <div>
                  <input type="checkbox" name="gender" id="nine" defaultValue="male" />
                  <label htmlFor="nine" className="mb-2">checkbox button4</label>
                </div>
                <div>
                  <input type="checkbox" name="gender" id="ten" defaultValue="male" />
                  <label htmlFor="ten" className="mb-2">checkbox button5</label>
                </div>
              </form>
            </div>
          </Row>
        </CardBody>
      </Col>
    </Row>
  </Container>
</div>

  )
}

export default FormAndRadio