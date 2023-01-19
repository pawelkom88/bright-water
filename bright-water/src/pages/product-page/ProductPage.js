import { useState } from "react";
import useFetchProduct from "hooks/useFetchProduct";
import { Link } from "react-router-dom";
import QuantityStepper from "components/Quantity-stepper/QuantityStepper";
import Spinner from "components/spinner/Spinner";
import Button from "components/Button/Button";
import { BackIcon, HeartIcon, HeartFilledIcon } from "helpers/assets";
import { stripHTMLTag, removeDuplicateObjects } from "helpers/helpers";
import classes from "./productPage.module.scss";

const product = {
  id: "prod_NqKE50BR4wdgBL",
  created: 1594075580,
  updated: 1606201130,
  active: true,
  permalink: "kettle",
  name: "Kettle",
  description: "<p>Black stove-top kettle</p>",
  price: {
    raw: 45.5,
    formatted: "45.50",
    formatted_with_symbol: "$45.50",
    formatted_with_code: "45.50 USD",
  },
  inventory: {
    managed: false,
    available: 0,
  },
  sku: null,
  sort_order: 0,
  seo: {
    title: null,
    description: null,
  },
  thank_you_url: null,
  meta: null,
  conditionals: {
    is_active: true,
    is_tax_exempt: false,
    is_pay_what_you_want: false,
    is_inventory_managed: false,
    is_sold_out: false,
    has_digital_delivery: false,
    has_physical_delivery: true,
    has_images: true,
    collects_fullname: false,
    collects_shipping_address: true,
    collects_billing_address: false,
    collects_extra_fields: false,
  },
  is: {
    active: true,
    tax_exempt: false,
    pay_what_you_want: false,
    inventory_managed: false,
    sold_out: false,
  },
  has: {
    digital_delivery: false,
    physical_delivery: true,
    images: true,
  },
  collects: {
    fullname: false,
    shipping_address: true,
    billing_address: false,
    extra_fields: false,
  },
  checkout_url: {
    checkout: "https://checkout.chec.io/kettle?checkout=true",
    display: "https://checkout.chec.io/kettle",
  },
  categories: [
    {
      id: "cat_3zkK6oLvVlXn0Q",
      slug: "office",
      name: "Home office",
    },
  ],
  image: {
    id: "ast_ZRjywMeaJw7Y8G",
    url: "https://cdn.chec.io/merchants/18462/assets/PH7HEh1O7jXQilhS|kettle.png",
    description: null,
    is_image: true,
    filename: "kettle.png",
    file_size: 96387,
    file_extension: "png",
    image_dimensions: {
      width: 649,
      height: 908,
    },
    meta: [],
    created_at: 1604509445,
    updated_at: 1605918709,
  },
  extra_fields: [],
  variant_groups: [],
  assets: [
    {
      id: "ast_ZRjywMeaJw7Y8G",
      url: "https://cdn.chec.io/merchants/18462/assets/PH7HEh1O7jXQilhS|kettle.png",
      description: null,
      is_image: true,
      filename: "kettle.png",
      file_size: 96387,
      file_extension: "png",
      image_dimensions: {
        width: 649,
        height: 908,
      },
      meta: [],
      created_at: 1604509445,
      updated_at: 1605918709,
    },
    {
      id: "ast_ZRjywMeaJw7Y8G",
      url: "https://cdn.chec.io/merchants/18462/assets/PH7HEh1O7jXQilhS|kettle.png",
      description: null,
      is_image: true,
      filename: "kettle.png",
      file_size: 96387,
      file_extension: "png",
      image_dimensions: {
        width: 649,
        height: 908,
      },
      meta: [],
      created_at: 1604509445,
      updated_at: 1605918709,
    },
    {
      id: "ast_kpnNwA6baomXB3",
      url: "https://cdn.chec.io/merchants/18462/assets/BLkqm5jVZ01WtB2h|black-kettle.jpg",
      description: null,
      is_image: false,
      filename: "black-kettle.jpg",
      file_size: 7,
      file_extension: "jpg",
      image_dimensions: [],
      meta: [],
      created_at: 1604516263,
      updated_at: 1604516263,
    },
    {
      id: "ast_8XO3wpy1XoYAzQ",
      url: "https://cdn.chec.io/merchants/18462/assets/qXBqIWddwvAGvprz|festive-kettle.jpg",
      description: null,
      is_image: true,
      filename: "festive-kettle.jpg",
      file_size: 208876,
      file_extension: "jpg",
      image_dimensions: {
        width: 640,
        height: 960,
      },
      meta: [],
      created_at: 1604516626,
      updated_at: 1605918696,
    },
  ],
  attributes: [],
  related_products: [],
};

export default function ProductPage() {
  // const { product } = useFetchProduct();
  const { name, assets, image, description, price } = product || {};
  const [selectedImage, setSelectedImage] = useState(null);
  const [addToWishlist, setAddToWishlist] = useState(false);

  // some images are duplicated
  const filteredAssets = removeDuplicateObjects(assets, "id");

  const modifiedDescription = stripHTMLTag(description);

  const activeIcon = addToWishlist ? (
    <img src={HeartFilledIcon.src} alt={HeartFilledIcon.alt} />
  ) : (
    <img src={HeartIcon.src} alt={HeartIcon.alt} />
  );

  return (
    <section className="container">
      {product ? (
        <div className={classes.card}>
          <nav className={classes["card-navigation"]}>
            <div className={classes["card-navigation__icons"]}>
              <Button>
                <img src={BackIcon.src} alt={BackIcon.alt} />
              </Button>
              <Link to="/" className={classes["card-navigation__link"]}>
                Back to Products
              </Link>
            </div>
            <Button onClick={() => setAddToWishlist(!addToWishlist)}>{activeIcon}</Button>
          </nav>
          <div className={classes["card-body"]}>
            <div className={classes["card-image"]}>
              <img src={selectedImage ? selectedImage : image?.url} alt={name} />

              <div className={classes["card-images"]}>
                {filteredAssets?.map(({ id, url }) => {
                  // remove white space
                  const modifiedUrl = url.replace(/ /g, "");
                  //some urls are broken, so could not display image correctly
                  const alt = url.split("|")[1];

                  return (
                    <div key={id}>
                      <Button onClick={() => setSelectedImage(modifiedUrl)}>
                        <img src={modifiedUrl} alt={alt} />
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={classes["card-description"]}>
              <h1 className={classes["card-description__heading"]}>{name}</h1>
              <p className={classes["card-description__content"]}>{modifiedDescription}</p>
              <p className={classes["card-description__price"]}>{price.formatted_with_symbol}</p>
              <div className={classes["card-description__action"]}>
                <Button className={classes.button}>Add to Cart</Button>
                <QuantityStepper />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </section>
  );
}
