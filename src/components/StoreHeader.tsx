import { Link } from "react-router";

export default function StoreHeader() {
  return (
    <header className="site-header store-header">
      <Link className="brand" to="/" aria-label="Thorn and Timber home">
        <span className="brand-mark">T</span>
        <span>THORN &amp; TIMBER</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link to="/products">Collection</Link>
        <Link to="/#craft">Our craft</Link>
        <Link to="/#about">About</Link>
      </nav>
      <a className="header-link" href="mailto:studio@thornandtimber.com">
        Start a project <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
