import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ images, modalToggler }) => {
  const imagesElem = images.map((item) => {
    return (
      <ImageGalleryItem key={item.id} {...item} modalToggler={modalToggler} />
    );
  });
  return (
    <div>
      <ul className="ImageGallery">{imagesElem}</ul>
    </div>
  );
};

export default ImageGallery;
