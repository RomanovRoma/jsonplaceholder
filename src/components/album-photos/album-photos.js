import React, { useEffect } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import { withJsonService } from "../hoc";

const AlbumPhotos = (props) => {
  const [albumPhotosArray, setAlbumPhotosArray] = useStateIfMounted([]);
  const {jsonService, id} = props

  useEffect(() => {
    jsonService.getAlbumPhotos(id).then((albumPhotosArray) => {
      setAlbumPhotosArray(albumPhotosArray);
    });
  }, []);
  // debugger
  return (
    <div>
      {albumPhotosArray.map((photo) => {
        return (
          <div>
            <img src={photo.url} alt={photo.title}/>
          </div>
        );
      })}
    </div>
  )
};

export default withJsonService()(AlbumPhotos);
