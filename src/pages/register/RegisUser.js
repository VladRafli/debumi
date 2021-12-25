import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import Form from "../../components/Form";
import Button from "../../components/Button";

export default function RegisUser() {
  return (
    <div className="register_page">
      <div className="register_page_buttons">
        <Button type="link" href="/register/verify">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <Button type="link" href="/">
          <FontAwesomeIcon icon={faQuestionCircle} />
        </Button>
      </div>
      <div className="register_content">
        <div className="register_headline">
          <h1>Personal Information</h1>
          <p>
            Personal information is used for registration and validation DEBUMI
          </p>
        </div>
        <form className="register_form">
          <div>
            <label htmlFor="fullName">Full Name</label>
            <Form type="underline" name="fullName" id="fullName" />
          </div>
          <div>
            <label htmlFor="pob">Place of Birth</label>
            <Form type="underline" name="pob" id="pob" />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth</label>
            <Form type="underline" formType="date" name="dob" id="dob" />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <Form type="underline" formType="select" name="gender" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form>
          </div>
          {/* For Deploy */}
          {/* <Button type="button" color="primary">
            Continue
          </Button> */}
          <Button type="link" color="primary" href="/register/info">Continue</Button>
        </form>
      </div>
    </div>
  );
}
