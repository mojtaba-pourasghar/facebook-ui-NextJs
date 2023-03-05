import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { selectPost } from "public/src/features/postSlice";
import { getSession, useSession } from "next-auth/react";
import axios from "axios";
import { addAllPost } from "public/src/features/postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);

  useEffect(() => {
    getSession().then((session) => {
      fetchContent(session.jwt);
    });
  }, []);

  function fetchContent(token) {
    const response = axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/post`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        dispatch(addAllPost(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
      console.log("Fetch Data");
  }

  return (
    <div>
      {posts.map((post) => (
        <Post postObject={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
