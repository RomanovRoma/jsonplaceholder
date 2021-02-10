import React, { useState, useEffect } from "react";
import { withJsonService } from "../hoc";

const AlbumsList = ({ jsonService }) => {
  const [albumsArray, setAlbumsArray] = useState([]);

  useEffect(() => {
    jsonService.getAllAlbums().then((albumsArray) => {
      setAlbumsArray(albumsArray);
    });
  });

  return (
    <div>
      {albumsArray.map((album) => {
        return <li key={album.id}>{album.title}</li>;
      })}
    </div>
  );
};

export default withJsonService()(AlbumsList);
