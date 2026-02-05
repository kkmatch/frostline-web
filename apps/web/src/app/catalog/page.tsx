import FilterChip from "./FilterChip";
import { products } from "../_data/products";

export default function CatalogPage() {
  return (
    <main className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Catalog</h1>
          <p className="meta">Browse by brand, device type, or flavor. 20 SKUs across 2 brands.</p>
        </div>
      </section>

      <section className="container page-grid">
        <aside className="filters card">
          <h3>Filter</h3>
          <div className="filter-group">
            <p className="label">Brands</p>
            <div className="chips">
              <FilterChip label="Frozen Lab" />
              <FilterChip label="Nova" />
            </div>
          </div>
          <div className="filter-group">
            <p className="label">Category</p>
            <div className="chips">
              <FilterChip label="Disposable" />
              <FilterChip label="Pod Systems" />
              <FilterChip label="Bundles" />
              <FilterChip label="Accessories" />
            </div>
          </div>
          <div className="filter-group">
            <p className="label">Nicotine</p>
            <div className="chips">
              <FilterChip label="5%" />
              <FilterChip label="3%" />
              <FilterChip label="0%" />
            </div>
          </div>
          <div className="filter-group">
            <p className="label">Flavor</p>
            <div className="chips">
              <FilterChip label="Mint" />
              <FilterChip label="Citrus" />
              <FilterChip label="Berry" />
              <FilterChip label="Tropical" />
            </div>
          </div>
        </aside>

        <div className="catalog">
          <div className="catalog-toolbar">
            <p className="meta">Showing 12 of 20</p>
            <div className="chips">
              <FilterChip label="Sort: Popular" />
              <FilterChip label="Price: Low to High" />
            </div>
          </div>
          <div className="grid-3">
            {products.map((item) => (
              <div key={item.id} className="card product">
                <span className="pill">{item.badge}</span>
                <img className="product-image" src={item.image} alt={item.name} />
                <h3><a href={`/product/${item.slug}`}>{item.name}</a></h3>
                <p className="meta">
                  {item.flavor} • {item.nicotine} • ${item.price.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
