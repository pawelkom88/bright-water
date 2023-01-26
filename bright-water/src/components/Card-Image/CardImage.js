import { useState } from "react";
import CardSlider from "components/Card-Slider/CardSlider";
import classes from './CardImage.module.scss'

export default function CardImage({ border, product }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const { name, assets, image } = product || {};

  return (
    <div className={classes["card-image"]}>
      <img
        style={{ border: border ? `3px solid ${border}` : "" }}
        src={selectedImage ? selectedImage.url : image?.url}
        alt={name}
        onClick={() => setSelectedImage({ ...selectedImage, animate: 1 })}
        onAnimationEnd={() => setSelectedImage({ ...selectedImage, animate: 0 })}
        animate={selectedImage?.animate}
      />

      <CardSlider assets={assets} onSelect={setSelectedImage} />
    </div>
  );
}
