import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  //console.log(props.imagesArray);
  const Images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image}></ImageCard>;
  });
  return <div className="image-list">{Images}</div>;
};

export default ImageList;
