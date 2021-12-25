import Button from "../components/Button";

export default function Home() {
  return (
    <div className="home_page">
      <div className="home_img_filter">
        <div className="home_title">
          <h1>Debumi</h1>
        </div>
        <div className="home_buttons">
          <Button type="link" color="white" href="/login">
            Login
          </Button>
          <Button type="link" color="primary" href="/register">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
