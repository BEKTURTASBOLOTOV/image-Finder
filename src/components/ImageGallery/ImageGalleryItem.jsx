import React from "react";

const ImageGalleryItem = ({
  id,
  webformatURL,
  modalToggler,
  largeImageURL,
}) => {
  console.log(largeImageURL);
  return (
    <div>
      <li
        key={id}
        className="ImageGalleryItem"
        onClick={() => modalToggler(largeImageURL)}
      >
        <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
      </li>
    </div>
  );
};

export default ImageGalleryItem;
