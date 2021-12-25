import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import Form from "../../components/Form";
import Button from "../../components/Button";

export default function RegisInfo() {
  return (
    <div className="register_page">
      <div className="register_page_buttons">
        <Button type="link" href="/register/user">
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
            <label htmlFor="country">Country</label>
            <Form type="underline" name="country" id="country" />
          </div>
          <div>
            <label htmlFor="province">Province</label>
            <Form type="underline" name="province" id="province" />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <Form type="underline" name="city" id="city" />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <Form type="underline" name="address" id="address" />
          </div>
          {/* For Deploy */}
          {/* <Button type="button" color="primary">
            Continue
          </Button> */}
          <Button type="link" color="primary" href="/register/info">
            Get Started
          </Button>
        </form>
      </div>
    </div>
  );
}
