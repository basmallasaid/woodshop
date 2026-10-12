import { useState } from "react";
import { Link, useParams } from "react-router";
import StoreFooter from "../components/StoreFooter";
import StoreHeader from "../components/StoreHeader";
import { products } from "../data/products";

export default function ProductDetailsPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [added, setAdded] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!product) {
    return (
      <main>
        <StoreHeader />
        <section className="not-found">
          <p className="section-label">Piece not found</p>
          <h1>This piece has left the workshop.</h1>
          <Link className="button button-dark" to="/products">
            Return to collection <span>↗</span>
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main>
      <StoreHeader />
      <div className="product-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/products">Collection</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <section className="product-detail">
        <div className="product-gallery">
          <div className="product-main-image">
            <img
              src={product.images[selectedImage]}
              alt={`${product.name}, view ${selectedImage + 1}`}
            />
            <span>
              0{selectedImage + 1} / 0{product.images.length}
            </span>
          </div>
          <div className="product-thumbnails">
            {product.images.map((image, index) => (
              <button
                className={selectedImage === index ? "active" : ""}
                key={image}
                onClick={() => setSelectedImage(index)}
                aria-label={`Show product view ${index + 1}`}
              >
                <img src={image} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="product-info">
          <p className="product-category">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="detail-price">${product.price.toLocaleString()}</p>
          <p className="detail-material">{product.material}</p>

          <div className="finish-picker">
            <div>
              <span>Finish</span>
              <strong>{product.colors[selectedColor].name}</strong>
            </div>
            <div className="finish-options">
              {product.colors.map((color, index) => (
                <button
                  className={selectedColor === index ? "active" : ""}
                  key={color.name}
                  onClick={() => setSelectedColor(index)}
                  aria-label={`Choose ${color.name} finish`}
                  title={color.name}
                >
                  <span style={{ backgroundColor: color.value }} />
                </button>
              ))}
            </div>
          </div>

          <div className="stock-line">
            <span>Status</span>
            <strong>Made to order</strong>
          </div>

          <div className="purchase-actions">
            <button
              className="add-button"
              onClick={() => {
                setAdded(true);
                window.setTimeout(() => setAdded(false), 2200);
              }}
            >
              {added ? "Added to your inquiry" : "Add to inquiry"}
              <span aria-hidden="true">↗</span>
            </button>
            <button
              className={`save-button ${saved ? "saved" : ""}`}
              onClick={() => setSaved((current) => !current)}
              aria-pressed={saved}
            >
              {saved ? "Saved" : "Save"}
            </button>
          </div>

          <div className="product-promises">
            <p>
              <span>01</span> Complimentary delivery on orders over $2,000
            </p>
            <p>
              <span>02</span> Lifetime structural warranty
            </p>
          </div>

          <div className="product-description">
            <p className="section-label">Description</p>
            <p>{product.description}</p>
            <dl>
              <div>
                <dt>Dimensions</dt>
                <dd>{product.dimensions}</dd>
              </div>
              <div>
                <dt>Lead time</dt>
                <dd>8–12 weeks</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <StoreFooter />
    </main>
  );
}
