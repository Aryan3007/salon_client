/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hairs = () => {
  const [photos, setPhotos] = useState([
    "/h0.jpg",
    "/h1.jpg",
    "/h2.jpg",
    "/h3.jpg",
    "/h4.jpg",
    "/h5.jpg",
    "/h6.jpg",
    "/h7.jpg",
    "/h8.jpg",
    "/h9.jpg",
    "/h10.jpg",
    "/h11.jpg",
    "/h12.jpg",
    "/h13.jpg",
    "/h14.jpg",
    "/h15.jpg",
    "/h16.jpg",
    "/h17.jpg",
    "/h18.jpg",
    "/h19.jpg",
    "/h20.jpg",
    "/h21.jpg",
    "/h22.jpg",
  ]);

  const [videos, setVideos] = useState([
    "/hairvid9.mp4",
    "/hairvid8.mp4",
    "/hairvid7.mp4",
    "/hairvid6.mp4",
    "/hairvid5.mp4",
    "/hairvid4.mp4",
    "/hairvid2.mp4",
    "/hairvid3.mp4",
    "/hairvideo1.mp4",
  ]);

  useEffect(() => {
    console.log("Videos:", videos);
  }, [videos]);

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
                <button className="px-4 py-2 text-sm font-medium text-black hover:bg-[#537f3c] hover:text-white capitalize md:py-3 rounded-xl md:px-12">
                  Makeup
                </button>
              </Link>
              <Link to="/gallery-hairs">
                <button className="px-4 py-2 mx-4 text-sm font-medium text-white capitalize transition-colors duration-300 md:py-3  focus:outline-none bg-[#537f3c] hover:text-white rounded-xl md:mx-8 md:px-12">
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
            {photos.map((src, index) => (
              <div
                key={index}
                className="flex overflow-hidden flex-col items-center"
              >
                <img
                  className="h-[450px] bg-zinc-300 w-full"
                  src={src}
                  alt={`Photo ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hairs;
