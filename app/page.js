import Articles from "@/components/Articles";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InterestedProducts from "@/components/InterestedProducts";
import Newsletter from "@/components/Newsletter";
import Product from "@/components/Product";
import ProductDetail from "@/components/ProductDetail";

export default function Home() {
  return (
    <>
      <Header />
      <Product />
      <ProductDetail />
      <Articles />
      <InterestedProducts />
      <Features/>
      <Newsletter/>
      <Footer/>
    </>
  );
}
