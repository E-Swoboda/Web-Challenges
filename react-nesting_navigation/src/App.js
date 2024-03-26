import "./styles.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Link from "./components/Link";
import Image from "./components/Image";
import Avatar from "./img/avatar.jpg";
import Logo from "./img/logo.jpg";

export default function App() {
  return (
    <>
      <Header className="header">
        <Link href="#">
          <Image className="round-image" src={Logo} alt="logo" />
        </Link>
        <Navigation>
          <Link className="navigation__link" href="#home">
            Home
          </Link>
          <a className="navigation__link" href="#about">
            About
          </a>
          <a className="navigation__link" href="#impressum">
            Impressum
          </a>
        </Navigation>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <Avatar className="round-image" src={avatar} alt="avatar" />
        </button>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
