export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "airpods-max",
    name: "AirPods Max",
    category: "audio",
    price: 549,
    image: "/products/airpods-max.png",
  },
  {
    id: "sony-xm5",
    name: "Sony WH-1000XM5",
    category: "audio",
    price: 399,
    image: "/products/sony-xm5.png",
  },
];
