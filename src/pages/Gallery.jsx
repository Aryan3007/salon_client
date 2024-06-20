/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImagesFromCloudinary = async () => {
    try {
      const response = await axios.get("https://salon-server-jupe.onrender.com/api/images");
      setImages(response.data.resources);
    } catch (error) {
      console.error("Error fetching images from Cloudinary:", error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or error
    }
  };

  useEffect(() => {
    fetchImagesFromCloudinary();
  }, []);

  const [videos, setVideos] = useState([
    "/src/assets/others/makeupvid1.mp4",
    "/src/assets/others/makeupvid3.mp4",
    "/src/assets/others/makeupvid2.mp4",
    "/src/assets/others/makeupvid5.mp4",
    "/src/assets/others/makeupvid6.mp4",
    "/src/assets/others/makeupvid9.mp4",
  


  ]);

  return (
    <>
      <section className="bg-white pt-12 dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Glance of Our Work
          </h1>
          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            "Discover our gallery of beauty transformations. From vibrant hair
            colors to flawless makeup, our work speaks volumes. Get inspired and
            see what we can do for you. Explore now."
          </p>
          <div className="flex items-center justify-center">
            <div className="flex items-center p-1 border border-[#537f3c] dark:border-blue-400 rounded-xl">
              <Link to="/gallery">
                <button className="px-4 py-2 text-sm font-medium bg-[#537f3c] text-white capitalize md:py-3 rounded-xl md:px-12">
                  Makeup
                </button>
              </Link>
              <Link to="/gallery-hairs">
                <button className="px-4 py-2 mx-4 text-sm font-medium text-black capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-[#537f3c] hover:text-white rounded-xl md:mx-8 md:px-12">
                  Hair
                </button>
              </Link>
              <Link to="/other-photos">
                <button className="px-4 py-2 text-sm font-medium text-black capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-[#537f3c] hover:text-white rounded-xl md:px-12">
                  Skin
                </button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {videos.map((src, index) => (
            <div
              key={index}
              className="flex overflow-hidden flex-col items-center"
            >
              <video className="w-full" src={src} controls>
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {loading ? (
              <>
              
              <div className="flex items-center justify-center w-full h-[500px]">
                <p className="text-gray-500">Loading...</p>
              </div>
              <div className="flex items-center justify-center w-full h-[500px]">
                <p className="text-gray-500">Loading...</p>
              </div>
              <div className="flex items-center justify-center w-full h-[500px]">
                <p className="text-gray-500">Loading...</p>
              </div> <div className="flex items-center justify-center w-full h-[500px]">
                <p className="text-gray-500">Loading...</p>
              </div>
            
             
              </>
            ) : (
              images.map((image, index) => (
                <div key={index} className="flex overflow-hidden flex-col items-center">
                  <img
                    className="h-[500px] bg-zinc-300 w-full"
                    src={image.secure_url}
                    alt={`Photo ${index + 1}`}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
