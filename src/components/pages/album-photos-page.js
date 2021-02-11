import React from "react";
import AlbumPhotos from "../album-photos";

const AlbumPhotosPage = (props) => {
  return (
    <div>
      <AlbumPhotos id={props.id} />
    </div>
  );
};

export default AlbumPhotosPage;
