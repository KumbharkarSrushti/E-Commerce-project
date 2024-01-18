import Link from "next/link";

const Nav = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-0"> {/* Updated class to ms-0 */}
        <li className="nav-item">
          <Link href="/" passHref>
            <div className="nav-link text-dark active">Home</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about" passHref>
            <div className="nav-link text-dark">About</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/category" passHref>
            <div className="nav-link text-dark">category</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contactpage" passHref>
            <div className="nav-link text-dark">Contact</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
