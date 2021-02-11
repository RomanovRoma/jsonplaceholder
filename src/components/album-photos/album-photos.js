import React, { useEffect } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import { withJsonService } from "../hoc";
import Spinner from "../spinner";

const AlbumPhotos = (props) => {
  const [albumPhotosArray, setAlbumPhotosArray] = useStateIfMounted([]);
  const {jsonService, id} = props

  useEffect(() => {
    jsonService.getAlbumPhotos(id).then((albumPhotosArray) => {
      setAlbumPhotosArray(albumPhotosArray);
    });
  }, []);

  return (
    <div>
      {albumPhotosArray.length > 0 ? (
        albumPhotosArray.map((photo) => {
        return (
          <div key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </div>
        );
      })) : (
        <Spinner />
      )}
    </div>
  )
};

export default withJsonService()(AlbumPhotos);
