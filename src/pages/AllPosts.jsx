import React, { useState, useEffect } from "react";
import { PostCard } from "../components/index";
import dbService from "../appwrite/dbService";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dbService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  });

  //   {
  //     $id: 1,
  //     title: "Post 1",
  //     content:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta tempora dolores, iure rem laborum ab possimus harum? Mollitia cupiditate, numquam quae nesciunt totam iusto harum tempore commodi, consectetur perspiciatis esse impedit pariatur cumque rem aspernatur? Dicta sed ullam incidunt minus non voluptates dolore quos, vel dignissimos, mollitia nostrum, molestiae sunt?,",
  //   },
  //   {
  //     $id: 2,
  //     title: "Post 2",
  //     content:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta tempora dolores, iure rem laborum ab possimus harum? Mollitia cupiditate, numquam quae nesciunt totam iusto harum tempore commodi, con",
  //   },
  //   {
  //     $id: 3,
  //     title: "Post 3",
  //     content:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta tempora dolores, iure rem laborum ab possimus harum? Mollitia cupiditate, numquam quae nesciunt totam iusto harum tempore commodi, con",
  //   },
  //   {
  //     $id: 4,
  //     title: "Post 4",
  //     content:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta tempora dolores, iure rem laborum ab possimus harum? Mollitia cupiditate, numquam quae nesciunt totam iusto harum tempore commodi, con",
  //   },
  //   {
  //     $id: 5,
  //     title: "Post 5",
  //     content:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta tempora dolores, iure rem laborum ab possimus harum? Mollitia cupiditate, numquam quae nesciunt totam iusto harum tempore commodi, con",
  //   },
  //   {
  //     $id: 6,
  //     title: "Post 6",
  //     content:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta tempora dolores, iure rem laborum ab possimus harum? Mollitia cupiditate, numquam quae nesciunt totam iusto harum tempore commodi, con",
  //   },
  // ];
  return (
    <>
      <div className="flex flex-wrap flex-row gap-5 justify-evenly my-16">
        {posts.map((post) => (
          <PostCard key={post.$id} {...post} />
        ))}
      </div>
    </>
  );
}

export default AllPosts;
