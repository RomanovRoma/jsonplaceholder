import React, { useEffect } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import { withJsonService } from "../hoc";

const PostsList = ({ jsonService }) => {
  const [postsArray, setPostsArray] = useStateIfMounted([]);

  useEffect(() => {
    jsonService.getAllPosts().then((postsArray) => {
      setPostsArray(postsArray);
    });
  }, []);

  return (
    <div>
      {postsArray.map((post) => {
        return (
          <ul key={post.id}>
            <li >{post.title}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default withJsonService()(PostsList);
