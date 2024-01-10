import Link from "next/link";

const Nav = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link href="/" passHref>
            <div className="nav-link text-light active">Home</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about" passHref>
            <div className="nav-link text-light">About</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/service" passHref>
            <div className="nav-link text-light">Service</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/portfolio" passHref>
            <div className="nav-link text-light">Projects</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contactpage" passHref>
            <div className="nav-link text-light">Contact</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
