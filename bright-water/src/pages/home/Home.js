import useFetchProducts from "hooks/useFetchProducts";
import TopBannerSection from "components/TopBannerSection/TopBannerSection";
import ProductsList from "components/ProductList/ProductList";
import Modal from "components/modal/Modal";
import Banner from "components/banner/Banner";

export default function Home() {
  const { products } = useFetchProducts();

  return (
    <>
      <TopBannerSection />
      <ProductsList products={products} />
      <Modal size="30rem">
        <Banner />
      </Modal>
    </>
  );
}
