import { useState, useEffect } from "react";
import TopBannerSection from "components/TopBannerSection/TopBannerSection";
import ProductsList from "components/ProductList/ProductList";
import Modal from "components/modal/Modal";
import Banner from "components/banner/Banner";

export default function Home() {
  return (
    <>
      <TopBannerSection />
      <ProductsList />
      <Modal size="30rem">
        <Banner />
      </Modal>
    </>
  );
}
