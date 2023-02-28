import {React,useRef} from "react";
import { useSession } from "next-auth/react"; 
import { IoIosVideocam,IoIosPhotos } from "react-icons/io";
import {BsEmojiSmile} from "react-icons/bs"

function CreatePost() {
  
    const {data:session} = useSession();
    const inputRef = useRef(null);
    const hiddenFileInputRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);

    const handleClickEvent = ()=>{
        hiddenFileInputRef.current.click();
    };

    const addImageToPost = (e)=>{
        const reader = new FileReader();
        
    }

    return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
      <div className="flex p-4 space-x-2 items-center">
        <form className="flex flex-1">
            <input type='text'
            ref={inputRef}
            className='rounded-full h-12 flex-grow' 
            placeholder ={` What's on your mind , ${session.name}`}
            />
            <button hidden></button>
        </form>
      </div>

        <div className='flex justify-evenly py-2'>
            <div className='flex items-center p-1 space-x-1 flex-grow  justify-center hover:bg-gray-100 rounded-md cursor-pointer'>
                <IoIosVideocam size={20} className='text-red-500' />
                <p className='font-semibold text-gray-600'>Live Video</p>
            </div>
            <div 
            onClick={handleClickEvent}
            className='flex items-center p-1 space-x-1 flex-grow  justify-center hover:bg-gray-100 rounded-md cursor-pointer'>
                <IoIosPhotos size={20} className='text-green-500' />
                <p className='font-semibold text-gray-600'>Photo/Video</p>
                <input type='file' onChange={addImageToPost} hidden ref={hiddenFileInputRef} accept="image/*" />
            </div>
            <div className='flex items-center p-1 space-x-1 flex-grow  justify-center hover:bg-gray-100 rounded-md cursor-pointer'>
                <BsEmojiSmile size={20} className='text-yellow-400' />
                <p className='font-semibold text-gray-600'>Feeling/Activity</p>
            </div>
        </div>

    </div>
  );
}

export default CreatePost;
