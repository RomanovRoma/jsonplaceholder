import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateIfMounted } from "use-state-if-mounted";
import { withJsonService } from "../hoc";

const AlbumsList = (props) => {
  const [albumsArray, setAlbumsArray] = useStateIfMounted([]);

  useEffect(() => {
    props.jsonService.getAllAlbums().then((albumsArray) => {
      setAlbumsArray(albumsArray);
    });
  }, []);

  return (
    <div>
      {albumsArray.map((album) => {
        return (
          <li key={album.title} onClick={() => props.onAlbumSelected(album.id)}>
            <Link to={`/albums/${album.id}/photos`} replace>{album.title}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default withJsonService()(AlbumsList);
