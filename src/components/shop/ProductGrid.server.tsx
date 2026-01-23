import { Grid } from "@mui/material";
import { ProductCard } from "./product0/ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

async function fetchProductsFromAPI(category: string, sort?: string) {
  const base = "https://fakestoreapi.com/products";

  // wenn Kategorie gesetzt → get by category
  const url = category
    ? `${base}/category/${encodeURIComponent(category)}`
    : base;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch products");

  let products: Product[] = await res.json();

  // optional sort
  if (sort === "price-asc") {
    products = products.sort((a, b) => a.price - b.price);
  }
  if (sort === "price-desc") {
    products = products.sort((a, b) => b.price - a.price);
  }

  return products;
}

export async function fetchCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories", {
    cache: "force-cache",
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return (await res.json()) as string[];
}

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store", // Home soll immer frisch sein
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return (await res.json()) as any[];
}

export async function ProductGridServer({}: {}) {
  const products = await fetchProducts();
  // const products = await fetchProductsFromAPI(category, sort);

  return (
    <Grid container spacing={3}>
      {products.map((p) => (
        <Grid sx={{ xs: 12, sm: 6, md: 3 }} key={p.id}>
          <ProductCard
            product={{
              id: p.id,
              title: p.title,
              price: p.price,
              rating: p.rating,
              description: p.description,
              category: p.category,
              image: p.image,
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
}
