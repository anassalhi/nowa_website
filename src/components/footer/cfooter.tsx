import "./footer.scss";
import logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="mara mw">
      <ul className="fl">
        <li className="fl-i">
          <img src={logo} alt="logo" />
        </li>
        <li>Copyright ©Nowa 2022</li>
      </ul>
      <div className="fr">
        <ul className="fr-o">
          <li>
            <a
              href="https://docs.nowa.dev/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/ByKfn3H7gX"
              target="_blank"
              rel="noopener noreferrer"
            >
              Community
            </a>
          </li>
          <li>
            <a
              href="mailto:info@nowa.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
        <ul className="fr-t">
          <li>
            <a
              href="https://www.youtube.com/channel/UCvP7LKeb2sW1yTUqHAFEKOw"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/nowaengine/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/nowa_dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/nowa.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <img src={logo} alt="logo" className="logo-tabelt" />
    </footer>
  );
};
