import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import Form from "../../components/Form";
import Button from "../../components/Button";
import { Link } from 'react-router-dom'

export default function RegisEmail() {
  return (
    <div className="register_page">
      <div className="register_page_buttons">
        <Button type="link" href="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <Button type="link" href="/">
          <FontAwesomeIcon icon={faQuestionCircle} />
        </Button>
      </div>
      <div className="email_content">
        <div className="register_headline">
          <h1>Register</h1>
          <p>Choose your country code and enter your phone number</p>
        </div>
        <form>
          <div>
            <label htmlFor="email">E-mail</label>
            <Form
              type="underline"
              formType="email"
              name="email"
              id="email"
              placeholder="sample@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <div className="input_num">
              <Form formType="select" name="phone" id="country">
                  <option value="+62">+62</option>
              </Form>
              <Form name="phone" id="phone" placeholder="85-XXXX-XXXX-X" />
            </div>
          </div>
          <div>
              <p>By submitting this application you confirm that you are authorized to share this information and agree with our <Link to="/">Terms and Conditions</Link></p>
              <Button type="link" color="primary" href="/register/verify">Send Verification Code</Button>
              {/* For deploy */}
              {/* <Button type="button" color="primary">Send Verification Code</Button> */}
          </div>
        </form>
      </div>
    </div>
  );
}
