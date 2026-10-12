import { Link } from "react-router";

export default function StoreFooter() {
  return (
    <footer>
      <Link className="brand footer-brand" to="/">
        <span className="brand-mark">T</span>
        <span>THORN &amp; TIMBER</span>
      </Link>
      <p>Objects of use, made with purpose.</p>
      <div className="footer-links">
        <Link to="/products">Collection</Link>
        <Link to="/#craft">Our craft</Link>
        <a href="mailto:studio@thornandtimber.com">Contact</a>
      </div>
      <span className="copyright">© 2025 Thorn &amp; Timber Workshop</span>
    </footer>
  );
}
