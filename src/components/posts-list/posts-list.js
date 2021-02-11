import React, { useEffect } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import { withJsonService } from "../hoc";
import Spinner from "../spinner";

const PostsList = (props) => {
  const [posts, setPosts] = useStateIfMounted()
  const [addedPost, setAddedPost] = useStateIfMounted()

  useEffect(() => {
    props.jsonService.getAllPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div>
      <section>
        <input
          type="text"
          placeholder="add post"
          className="form-control"
          onChange={(e) => setAddedPost({ title: e.target.value })}
        />
        <button
          id="submit-button"
          type="submit"
          className="btn btn-primary"
          onClick={() => setPosts([...posts, addedPost])}
        >
          Add post
        </button>
      </section>
      <div className="text-left m-3">
        {posts ? (
          posts.map((post, index) => {
            return (
              <ol key={index + 1} start={index + 1}>
                <li>{post.title}</li>
              </ol>
            );
          })
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default withJsonService()(PostsList);
