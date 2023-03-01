import React, { useRef, useState } from "react";
import {useDispatch} from "react-redux";
import { useSession } from "next-auth/react";
import { IoIosVideocam, IoIosPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import axios from "axios";
import { addPost } from "public/src/features/postSlice";

function CreatePost() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const hiddenFileInputRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const dispatch = useDispatch();

  const handleClickEvent = () => {
    hiddenFileInputRef.current.click();
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImageToPost(e.target.result);
      };
    }
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  const handleSubmit = (e) => {
    e.prevenDefault();
    if (!inputRef.current.value) return;
    const formData = new FormData();
    formData.append("file", imageToPost);
    formData.append("text", inputRef.current.value);
    formData.append("user_id", session.id);

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signin`, formData, {
        headers: { Accept: "application.json" },
      })
      .then((response) => {
        inputRef.current.value = "";
        dispatch(addPost(response.data));
        removeImage();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
      <div className="flex p-4 space-x-2 items-center">
        <form className="flex flex-1">
          <input
            type="text"
            ref={inputRef}
            className="rounded-full h-12 flex-grow"
            placeholder={` What's on your mind , ${session.name}`}
          />
          <button hidden onClick={handleSubmit}></button>
        </form>
      </div>
      {imageToPost && (
        <div
          onClick={removeImage}
          className="flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer "
        >
          <img src={imageToPost} className="h-10 object-contain" />
          <TiDeleteOutline className="h-8 hover:text-red-500" />
        </div>
      )}
      <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow  justify-center hover:bg-gray-100 rounded-md cursor-pointer">
          <IoIosVideocam size={20} className="text-red-500" />
          <p className="font-semibold text-gray-600">Live Video</p>
        </div>
        <div
          onClick={handleClickEvent}
          className="flex items-center p-1 space-x-1 flex-grow  justify-center hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <IoIosPhotos size={20} className="text-green-500" />
          <p className="font-semibold text-gray-600">Photo/Video</p>
          <input
            type="file"
            onChange={addImageToPost}
            hidden
            ref={hiddenFileInputRef}
            accept="image/*"
          />
        </div>
        <div className="flex items-center p-1 space-x-1 flex-grow  justify-center hover:bg-gray-100 rounded-md cursor-pointer">
          <BsEmojiSmile size={20} className="text-yellow-400" />
          <p className="font-semibold text-gray-600">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
