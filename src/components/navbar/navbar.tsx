import "./navbar.scss";
import logo from "../../assets/logo-nowa.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useRef } from "react";
export const NavBar = () => {
  const menuRef = useRef<HTMLUListElement>(null);
  return (
    <nav>
      <div className="mara mw">
        <ul>
          <li>
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a
                href="https://docs.nowa.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </li>
          </ul>
          <AiOutlineMenu
            className="menu-icon"
            onClick={() => {
              menuRef.current?.classList.toggle("menu-visible");
            }}
          />
          <ul
            className="menu-mobile"
            ref={menuRef}
            onClick={() => {
              menuRef.current?.classList.toggle("menu-visible");
            }}
          >
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a
                href="https://docs.nowa.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
};
