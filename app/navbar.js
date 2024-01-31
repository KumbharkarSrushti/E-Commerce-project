import Link from "next/link";

const Nav = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-0"> 
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="/e.png" alt="" width="30" height="24" class="d-inline-block align-text-top"></img>
          </a>
        </div>
        <li className="nav-item">
          <Link href="/" passHref>
            <div className="nav-link text-primary active">Home</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/category" passHref>
            <div className="nav-link text-primary">category</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about" passHref>
            <div className="nav-link text-primary">Fashion</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/beauty" passHref>
            <div className="nav-link text-primary">Beauty</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
