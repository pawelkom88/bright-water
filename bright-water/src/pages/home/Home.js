import { useState, useEffect } from "react";
import TopBannerSection from "components/TopBannerSection/TopBannerSection";
import ProductsList from "components/ProductList/ProductList";
import Modal from "components/modal/Modal";
import Banner from "components/banner/Banner";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  // Show modal after 5s
  useEffect(() => {
    const timer = setTimeout(() => setOpenModal(true), 5000);

    return () => clearTimeout(timer);
  }, [setOpenModal]);

  return (
    <>
      <TopBannerSection />
      <ProductsList />
      {openModal && (
        <Modal size="30rem">
          <Banner />
        </Modal>
      )}
    </>
  );
}
