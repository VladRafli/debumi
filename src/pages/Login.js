import Button from "../components/Button";
import Form from "../components/Form";
import ArrowImage from "../assets/svg/Union.png";

export default function Login() {
  return (
    <div className="login_page">
      <div className="login_buttons">
        <Button type="link" href="/">
          <img src={ArrowImage} alt="Arrow" />
        </Button>
      </div>
      <div className="login_content">
        <h1>Log in</h1>
        <form>
          <Form type="full" formType="email" id="email" placeholder="Email" />
          <Form type="full" formType="Password" id="Password" placeholder="Password" />
          <Button type="link" href="/dashboard" color="primary">
            Go to Dashboard
          </Button>
          {/* <Button type="button" color="primary">
            Login
          </Button> */}
        </form>
      </div>
    </div>
  );
}
