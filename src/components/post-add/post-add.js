import React, { useState, useEffect } from "react";
import PostsList from "../posts-list";

function PostAdd() {
  const [titlePost, setTitlePost] = useState("")

  const onChange = (event) => {
    setTitlePost(event.target.value)
  }

  const onClick = () => {
    setTitlePost(titlePost)
  }

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ title: 'Request'  }),
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => setTitlePost(data.title))

  }, []);

  return (
    <div>
      <div className="card text-center m-3">
        <div className="card-body">New post: {titlePost}</div>
        <input
          type="text"
          className="form-control"
          placeholder="our text"
          title={titlePost}
          onChange={onChange}
        />
        <button
          id="submit-button"
          type="submit"
          className="btn btn-primary"
          onClick={onClick}
        >
          Submit
        </button>
      </div>
      <div className="card text-left m-3">
        <PostsList />
      </div>
    </div>
  );
}

export default PostAdd
