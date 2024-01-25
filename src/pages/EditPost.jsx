import React, { useState } from "react";
import { PostForm } from "../components/index";

function EditPost() {
  const [post, setPost] = useState(null);

  return (
    <div>
      <PostForm post={post} />
    </div>
  );
}

export default EditPost;
