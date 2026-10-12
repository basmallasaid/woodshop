import { Link } from "react-router";

const workshopImage =
  "https://images.unsplash.com/photo-1547609434-b732edfee020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwd29vZHdvcmtlciUyMHdvcmtzaG9wJTIwZnVybml0dXJlJTIwbWFraW5nJTIwd2FybSUyMGxpZ2h0fGVufDF8fHx8MTc5MTc5OTcyNHww&ixlib=rb-4.1.0&q=85&w=1600";

const chairImage =
  "https://images.unsplash.com/photo-1631396326646-c06a935ff3a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcnRpc2FuJTIwd29vZHdvcmtzaG9wJTIwZnVybml0dXJlJTIwbWFraW5nJTIwd2FybSUyMGxpZ2h0fGVufDF8fHx8MTc5MTc5OTcyNHww&ixlib=rb-4.1.0&q=85&w=1200";

const detailImage =
  "https://images.unsplash.com/photo-1463082459669-fd1ca1692fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxhcnRpc2FuJTIwd29vZHdvcmtzaG9wJTIwZnVybml0dXJlJTIwbWFraW5nJTIwd2FybSUyMGxpZ2h0fGVufDF8fHx8MTc5MTc5OTcyNHww&ixlib=rb-4.1.0&q=85&w=1200";

const processImage =
  "https://images.unsplash.com/photo-1631396326838-de37e5f8bcbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhcnRpc2FuJTIwd29vZHdvcmtzaG9wJTIwZnVybml0dXJlJTIwbWFraW5nJTIwd2FybSUyMGxpZ2h0fGVufDF8fHx8MTc5MTc5OTcyNHww&ixlib=rb-4.1.0&q=85&w=1200";

const pieces = [
  {
    slug: "hawthorne-chair",
    name: "The Hawthorne Chair",
    type: "White oak · Hand-woven seat",
    image: chairImage,
  },
  {
    slug: "turner-table",
    name: "The Turner Table",
    type: "Solid ash · Traditional joinery",
    image:
      "https://images.unsplash.com/photo-1564104908774-e95613bd8b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxhcnRpc2FuJTIwd29vZHdvcmtzaG9wJTIwZnVybml0dXJlJTIwbWFraW5nJTIwd2FybSUyMGxpZ2h0fGVufDF8fHx8MTc5MTc5OTcyNHww&ixlib=rb-4.1.0&q=85&w=1200",
  },
  {
    slug: "field-bench",
    name: "The Field Bench",
    type: "Black walnut · Oil finish",
    image: detailImage,
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Thorn and Timber home">
          <span className="brand-mark">T</span>
          <span>THORN &amp; TIMBER</span>
        </a>
        <nav aria-label="Main navigation">
          <Link to="/products">Collection</Link>
          <a href="#craft">Our craft</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-link" href="mailto:studio@thornandtimber.com">
          Start a project <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Handmade in the Pacific Northwest</p>
          <h1>Furniture with a life of its own.</h1>
          <p className="hero-description">
            Thoughtful, enduring pieces made slowly from honest materials. Built
            by hand, made to gather around.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#collection">
              Explore the collection <Arrow />
            </a>
            <a className="text-link" href="#craft">
              See how we work
            </a>
          </div>
        </div>
        <figure className="hero-image-wrap">
          <img
            className="hero-image"
            src={workshopImage}
            alt="Woodworker carefully sawing a timber board in the workshop"
          />
          <figcaption>
            <span>01</span>
            <span>Portland, Oregon</span>
          </figcaption>
        </figure>
      </section>

      <section className="manifesto" id="about">
        <p className="section-label">Our philosophy</p>
        <p className="manifesto-copy">
          We make objects that belong in your life—not just your home. Every
          curve, joint, and finish is considered for how it will feel today and
          how it will age tomorrow.
        </p>
        <div className="facts" aria-label="Studio facts">
          <div>
            <strong>12</strong>
            <span>Years at the bench</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Responsibly sourced timber</span>
          </div>
          <div>
            <strong>1 of 1</strong>
            <span>Made for your space</span>
          </div>
        </div>
      </section>

      <section className="collection" id="collection">
        <div className="section-heading">
          <div>
            <p className="section-label">From the workshop</p>
            <h2>Pieces worth keeping.</h2>
          </div>
          <Link className="text-link" to="/products">
            View all pieces <Arrow />
          </Link>
        </div>
        <div className="piece-grid">
          {pieces.map((piece, index) => (
            <article className={`piece piece-${index + 1}`} key={piece.name}>
              <Link
                className="piece-image-wrap"
                to={`/products/${piece.slug}`}
                aria-label={`View ${piece.name}`}
              >
                <img src={piece.image} alt={piece.name} />
                <span className="piece-number">0{index + 1}</span>
              </Link>
              <h3>{piece.name}</h3>
              <p>{piece.type}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="craft" id="craft">
        <div className="craft-image-wrap">
          <img
            src={processImage}
            alt="Craftsperson shaping a piece of wood by hand"
          />
          <p>Made by hand, one piece at a time.</p>
        </div>
        <div className="craft-copy">
          <p className="section-label light">The making of</p>
          <h2>Quiet hands. Sharp tools. No shortcuts.</h2>
          <p>
            Our work begins with the tree. We choose each board for its grain,
            strength, and character, then let the material guide the form.
            Traditional joinery gives every piece the strength to outlast us.
          </p>
          <ol>
            <li>
              <span>01</span>
              <div>
                <strong>Choose with care</strong>
                <p>Local, traceable hardwoods selected board by board.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>Build for generations</strong>
                <p>Time-tested joints, shaped and fitted by hand.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>Finish naturally</strong>
                <p>Plant-based oils that let the wood deepen with age.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="commission">
        <p className="section-label">Custom commissions</p>
        <h2>Let’s make something that belongs to you.</h2>
        <p>
          Tell us about your space, your needs, and the piece you’ve been
          imagining. We’ll take it from sketch to heirloom.
        </p>
        <a className="button button-light" href="mailto:studio@thornandtimber.com">
          Begin a conversation <Arrow />
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">T</span>
          <span>THORN &amp; TIMBER</span>
        </a>
        <p>Objects of use, made with purpose.</p>
        <div className="footer-links">
          <Link to="/products">Collection</Link>
          <a href="#craft">Our craft</a>
          <a href="mailto:studio@thornandtimber.com">Contact</a>
        </div>
        <span className="copyright">© 2025 Thorn &amp; Timber Workshop</span>
      </footer>
    </main>
  );
}
