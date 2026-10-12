import { Link, useSearchParams } from "react-router";
import StoreFooter from "../components/StoreFooter";
import StoreHeader from "../components/StoreHeader";
import { products } from "../data/products";

const ALL = "All";
const categories = [ALL, ...new Set(products.map((product) => product.category))];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
];

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryParam = searchParams.get("category") ?? ALL;
  const category = categories.includes(categoryParam) ? categoryParam : ALL;
  const sortParam = searchParams.get("sort") ?? "featured";
  const sort = sortOptions.some((option) => option.value === sortParam)
    ? sortParam
    : "featured";

  const updateParam = (key: string, value: string, defaultValue: string) => {
    const next = new URLSearchParams(searchParams);
    if (value === defaultValue) {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next, { replace: true, preventScrollReset: true });
  };

  const visibleProducts = products.filter(
    (product) => category === ALL || product.category === category,
  );
  if (sort === "price-asc") {
    visibleProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    visibleProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <main>
      <StoreHeader />
      <section className="shop-hero">
        <p className="section-label">The collection</p>
        <h1>Made to live with.</h1>
        <p>
          Small-batch furniture built from responsibly sourced hardwoods. Every
          piece is made to order and finished by hand.
        </p>
      </section>

      <section className="product-listing" aria-label="All products">
        <div className="listing-filters">
          <div
            className="filter-chips"
            role="group"
            aria-label="Filter by category"
          >
            {categories.map((option) => (
              <button
                type="button"
                key={option}
                className={option === category ? "active" : undefined}
                aria-pressed={option === category}
                onClick={() => updateParam("category", option, ALL)}
              >
                {option}
              </button>
            ))}
          </div>
          <label className="filter-sort">
            <span>Sort by</span>
            <select
              value={sort}
              onChange={(event) =>
                updateParam("sort", event.target.value, "featured")
              }
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="listing-bar">
          <span aria-live="polite">
            {visibleProducts.length}{" "}
            {visibleProducts.length === 1 ? "piece" : "pieces"}
          </span>
          <span>Made to order · 8–12 weeks</span>
        </div>
        <div className="product-grid">
          {visibleProducts.map((product, index) => (
            <article className="product-card" key={product.slug}>
              <Link
                className="product-card-image"
                to={`/products/${product.slug}`}
                aria-label={`View details for ${product.name}`}
              >
                <img src={product.images[0]} alt={product.name} />
                <img
                  className="product-card-alt"
                  src={product.images[1]}
                  alt=""
                  aria-hidden="true"
                />
                <span>0{index + 1}</span>
                <strong>View piece ↗</strong>
              </Link>
              <div className="product-card-info">
                <div>
                  <p>{product.category}</p>
                  <h2>{product.name}</h2>
                </div>
                <p className="product-price">${product.price.toLocaleString()}</p>
              </div>
              <div className="card-swatches" aria-label="Available finishes">
                {product.colors.map((color) => (
                  <span
                    key={color.name}
                    title={color.name}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
                <small>{product.colors.length} finishes</small>
              </div>
            </article>
          ))}
        </div>
      </section>
      <StoreFooter />
    </main>
  );
}
