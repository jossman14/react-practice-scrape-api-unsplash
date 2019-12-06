import React from "react";

const ImageList = props => {
  const gambarGan = props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });
  return <div>{gambarGan}</div>;
};

export default ImageList;
