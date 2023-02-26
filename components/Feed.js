import React from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

function Feed() {
  return (
    <div className="flex-grow h-screen pt-6 mr-6 overflow-y-auto">
      <div className=" mx-auto max-w-md md:max-w-xl lg:max-w-xl font-medium bg-gray-100 px-4">
        {/* Create post box */}
        <CreatePost/>
        {/* Posts  */}
        <Posts/>
      </div>
    </div>
  );
}

export default Feed;
