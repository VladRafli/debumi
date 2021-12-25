import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import Button from "../../components/Button";
import { useEffect } from "react";

export default function Verify() {
  // Reset Input Behaviour
  useEffect(() => {
    let inputs = document.querySelectorAll(
      ".verify_content > form > div > input"
    );
    inputs.forEach((e, i, p) => {
      e.addEventListener("keydown", (e) => {
        e.preventDefault()
        if (
          e.code !== "Backspace" &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(parseInt(e.key))
        ) {
          inputs[i].value = e.key;
        }
      });
      e.addEventListener("keydown", (e) => {
        e.preventDefault()
        if (e.code === "Backspace") {
          inputs[i].value = null;
        }
      });
      if (i !== inputs.length - 1) {
        e.addEventListener("keydown", (e) => {
          e.preventDefault()
          if (
            e.code !== "Backspace" &&
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(parseInt(e.key))
          ) {
            inputs[i].value = e.key;
            inputs[i + 1].focus();
          }
        });
      }
      if (i !== 0) {
        e.addEventListener("keydown", (e) => {
          e.preventDefault()
          if (e.code === "Backspace") {
            inputs[i].value = null;
            inputs[i - 1].focus();
          }
        });
      }
      if (i === inputs.length - 1) {
        e.addEventListener("keydown", (e) => {
          e.preventDefault()
          // Debug
          window.alert('Form fullfiled')
          /**
           * Fill code below for submit the verification code
           */

          // ===============================================
        });
      }
    });
  }, []);
  return (
    <div className="register_page">
      <div className="register_page_buttons">
        <Button type="link" href="/register">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <Button type="link" href="/">
          <FontAwesomeIcon icon={faQuestionCircle} />
        </Button>
      </div>
      <div className="verify_content">
        <div className="register_headline">
          <h1>Verification</h1>
          <p>Verify the handphone number by entering the verification code</p>
        </div>
        <form>
          <div>
            <Form
              type="underline"
              name="code[]"
              id="code"
              pattern="[0-9]"
              maxLength="1"
              autoComplete="false"
            />
            <Form
              type="underline"
              name="code[]"
              id="code"
              pattern="[0-9]"
              maxLength="1"
              autoComplete="false"
            />
            <Form
              type="underline"
              name="code[]"
              id="code"
              pattern="[0-9]"
              maxLength="1"
              autoComplete="false"
            />
            <Form
              type="underline"
              name="code[]"
              id="code"
              pattern="[0-9]"
              maxLength="1"
              autoComplete="false"
            />
            <Form
              type="underline"
              name="code[]"
              id="code"
              pattern="[0-9]"
              maxLength="1"
              autoComplete="false"
            />
            <Form
              type="underline"
              name="code[]"
              id="code"
              pattern="[0-9]"
              maxLength="1"
              autoComplete="false"
            />
          </div>
          <p>Didn't recieve verification code?</p>
          <Link to="/register/user">Resend Code / Next Page</Link>
          {/* For deployment */}
          {/* <Button type="button" /> */}
        </form>
      </div>
    </div>
  );
}
