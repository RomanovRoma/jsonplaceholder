import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateIfMounted } from "use-state-if-mounted";
import { withJsonService } from "../hoc";
import Spinner from "../spinner";

const AlbumsList = (props) => {
  const [albumsArray, setAlbumsArray] = useStateIfMounted([]);

  useEffect(() => {
    props.jsonService.getAllAlbums().then((albumsArray) => {
      setAlbumsArray(albumsArray);
    });
  }, []);

  return (
    <div className="text-left m-3">
      {albumsArray.length > 0 ? (
        albumsArray.map((album) => {
          return (
            <li key={album.title}>
              <Link to={`/albums/${album.id}/photos`} replace>
                {album.title}
              </Link>
            </li>
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default withJsonService()(AlbumsList);
