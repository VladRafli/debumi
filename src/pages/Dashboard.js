import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMap, faUser } from "@fortawesome/free-regular-svg-icons";
import { faHome, faWallet } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ReactComponent as ExitToAppSVG } from "../assets/svg/ic_baseline-exit-to-app.svg";
import { ReactComponent as ClipboardSVG } from "../assets/svg/ClipboardText.svg";
import { ReactComponent as SyncAltSVG } from "../assets/svg/ic_baseline-sync-alt.svg";
import { ReactComponent as QRCodeSVG } from "../assets/svg/ic_baseline-qrcode.svg";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard_wrapper">
        <div className="dashboard_header">
          <div className="header_top">
            <div className="profile_name">
              <h1>DEBUMI</h1>
              <h1>Narayana Kirana</h1>
            </div>
            <FontAwesomeIcon icon={faBell} />
            <img src="#" alt="User Profile" />
          </div>
          <div className="header_bottom">
            <div className="header_button">
              <Button type="link" href="/dashboard">
                <ExitToAppSVG />
              </Button>
              <p>Pick Up</p>
            </div>
            <div className="header_button">
              <Button type="link" href="/dashboard">
                <ClipboardSVG />
              </Button>
              <p>Schedule</p>
            </div>
            <div className="header_button">
              <Button type="link" href="/dashboard">
                <SyncAltSVG />
              </Button>
              <p>History</p>
            </div>
            <div className="header_button">
              <Button type="link" href="/dashboard">
                <QRCodeSVG />
              </Button>
              <p>QR Code</p>
            </div>
          </div>
        </div>
        <div className="dashboard_content">
          <div className="point_statistic">
            <div className="statistic_text">
              <div>
                <h1>Points</h1>
                <p>01 Mar 2021 - 16 Mar 2021</p>
              </div>
              <h1>280 Points</h1>
            </div>
            <div className="statistic_graphic">
              <Doughnut
                data={{
                  datasets: [
                    {
                      data: [20, 30, 50],
                      backgroundColor: [
                        "rgb(107, 114, 128)",
                        "rgb(252, 211, 77)",
                        "rgb(110, 231, 183)",
                      ],
                      borderColor: [
                        "rgb(107, 114, 128)",
                        "rgb(252, 211, 77)",
                        "rgb(110, 231, 183)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </div>
            <div className="statistic_description">
              <div className="graph_name bg-gray-500">
                <p>HDPE</p>
              </div>
              <div className="graph_name bg-yellow-300">
                <p>LDPE</p>
              </div>
              <div className="graph_name bg-green-300">
                <p>PE (Polyethylene)</p>
              </div>
            </div>
          </div>
          <div className="point_exchange">
            <h1>Hot Rewards</h1>
            <div className="rewards_list">
              <div className="reward">
                <h1>"Company Name" Gift Card</h1>
                <img src="" alt="Gift Card" />
                <p>500 Point</p>
                <Link to="/dashboard">
                  <p>See more</p>
                </Link>
              </div>
              <div className="reward">
                <h1>"Company Name" Gift Card</h1>
                <img src="" alt="Gift Card" />
                <p>500 Point</p>
                <Link to="/dashboard">
                  <p>See more</p>
                </Link>
              </div>
              <div className="reward">
                <h1>"Company Name" Gift Card</h1>
                <img src="" alt="Gift Card" />
                <p>500 Point</p>
                <Link to="/dashboard">
                  <p>See more</p>
                </Link>
              </div>
            </div>
            <Link to="/dashboard">
              <p>See more rewards</p>
            </Link>
          </div>
          <div className="headline_news">
            <h1>Headline News</h1>
            <div className="news_list">
              <div className="news">
                <h1>News Title</h1>
                <img src="" alt="News" />
                <Link to="/dashboard">
                  <p>See more</p>
                </Link>
              </div>
              <div className="news">
                <h1>News Title</h1>
                <img src="" alt="News" />
                <Link to="/dashboard">
                  <p>See more</p>
                </Link>
              </div>
              <div className="news">
                <h1>News Title</h1>
                <img src="" alt="News" />
                <Link to="/dashboard">
                  <p>See more</p>
                </Link>
              </div>
            </div>
            <Link to="/dashboard">
              <p>See more news</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="dashboard_menu">
        <Link to="/dashboard" className="selected">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to="/dashboard">
          <FontAwesomeIcon icon={faWallet} />
        </Link>
        <Link to="/dashboard">
          <FontAwesomeIcon icon={faMap} />
        </Link>
        <Link to="/dashboard">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </div>
  );
}
