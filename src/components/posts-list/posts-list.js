import React, { useState, useEffect } from "react";
import { withJsonService } from "../hoc";

const UsersList = ({ jsonService }) => {
  const [postsArray, setPostsArray] = useState([]);

  useEffect(() => {
    jsonService.getAllPosts().then((postsArray) => {
      setPostsArray(postsArray);
    });
  });

  return (
    <div>
      {postsArray.map((post) => {
        return (
          <ul>
            <li key={post.id}>{post.title}</li>
            <li key={post.id}>{post.body}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default withJsonService()(UsersList);
