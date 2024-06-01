import Image from "next/image";
import "tailwindcss/tailwind.css";
import ProductList from "./component/ProductList";
import data from "./Data/data.js"

export default function Home() {
    // console.log(data);
    
const   product = [
  {
      name: "vite",
      image: "/vercel.svg",
      price:14,
      description: "jkndakjnodsnokdnkodsnknosa"
  },
  {
      name: "vite",
      image: "/vercel.svg",
      price:14,
      description: "jkndakjnodsnokdnkodsnknosa"
  },
  {
      name: "vite",
      image: "/vercel.svg",
      price:14,
      description: "jkndakjnodsnokdnkodsnknosa"
  },
  {
      name: "vite",
      image: "/vercel.svg",
      price:14,
      description: "jkndakjnodsnokdnkodsnknosa"
  },
  {
      name: "vite",
      image: "/vercel.svg",
      price:14,
      description: "jkndakjnodsnokdnkodsnknosa"
  },
  {
      name: "vite",
      image: "/vercel.svg",
      price:14,
      description: "jkndakjnodsnokdnkodsnknosa"
  },
  {
      name: "vite",
      image: "/vercel.svg",
      price:14,
      description: "jkndakjnodsnokdnkodsnknosa"
  },
  {
      name: "vite",
      image: "/vercel.svg",
      price:14,
      description: "jkndakjnodsnokdnkodsnknosa"
  },
  {
      name: "vite",
      image: "/vercel.svg",
      price:14,
      description: "jkndakjnodsnokdnkodsnknosa"
  },
];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ProductList products={data} />
    
    </main>
  );
}
