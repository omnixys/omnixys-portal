import { CategoryGrid } from "./components/category/CategoryGrid";
import { Footer } from "./components/footer/Footer";
import { BannerCarousel } from "./components/BannerCarousel";
import { HeroSlider } from "./components/hero/HeroSlider";
import { Navbar } from "./components/layout/Navbar2";
import { ProductGrid } from "./components/product/ProductGrid";
import { Newsletter } from "./components/sections/Newsletter2";
import { ServicesGrid } from "./components/services/ServicesGrid";
import { Section } from "./components/ui/Section";
import { CATEGORIES } from "./mock/categories";
import { PRODUCTS } from "./mock/products";
import { SERVICES } from "./mock/services";

export default function HomePage() {
  return (
    <>
      <BannerCarousel />
      <Navbar />
      <HeroSlider />

      <Section title="Popular Products">
        <ProductGrid products={PRODUCTS} loading={false} />
      </Section>

      <Section title="Trending Products For You">
        <CategoryGrid categories={CATEGORIES} />
      </Section>

      <Section title="Why Shop With Us">
        <ServicesGrid services={SERVICES} />
      </Section>
      <Newsletter />
      <Footer />

      {/* <ProductGrid products={PRODUCTS} /> */}
    </>
  );
}
