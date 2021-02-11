import React from "react";
import AlbumsList from "../albums-list";
import { withRouter } from 'react-router-dom'

const AlbumsPage = (props) => {
  return (
    <div>
      <AlbumsList
        onAlbumSelected={(id) => {
          props.history.push(`/albums/${id}/photos`);
        }}
      />
    </div>
  );
};

export default withRouter(AlbumsPage)
