import useFetchProducts from "hooks/useFetchProducts";
import TopBannerSection from "components/TopBannerSection/TopBannerSection";
import ProductsList from "components/ProductList/ProductList";
import Modal from "components/modal/Modal";
import Banner from "components/banner/Banner";

export default function Home() {
  const { products, error } = useFetchProducts();

  return (
    <>
      <TopBannerSection />
      <ProductsList products={products} requestError={error}/>
      <Modal size="30rem">
        <Banner />
      </Modal>

      {error && <Modal size="20rem">{error}</Modal>}
    </>
  );
}
