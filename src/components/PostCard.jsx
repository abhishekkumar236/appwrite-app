import React from "react";
import { Link } from "react-router-dom";

function PostCard({ $id, title, content, image }) {
  return (
    <>
      <div className="bg-gray-800 rounded-xl text-white my-4 w-96">
        <div>
          <img
            src="https://images.pexels.com/photos/17051079/pexels-photo-17051079/free-photo-of-trees-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="h-48 w-full object-cover"
          />
        </div>
        <div className="mx-3">{content.substring(0, 100)}</div>
        <div className="my-2">
          <Link
            to={`/post/${$id}`}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold mt-1 py-2 px-5 mx-3 rounded-xl focus:outline-none focus:bg-blue-600"
          >
            Read More
          </Link>
        </div>
      </div>
    </>
  );
}

export default PostCard;
