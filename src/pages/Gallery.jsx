/* eslint-disable no-unused-vars */
import {Link} from "react-router-dom";
import { useState } from "react";

const Gallery = () => {
  const [photos, setPhotos] = useState([
    "src/assets/q.jpg",
    "src/assets/w.jpg",
    "src/assets/e.jpg",
    "src/assets/r.jpg",
    "src/assets/t.jpg",
    "src/assets/y.jpg",
    "src/assets/u.jpg",
    "src/assets/q.jpg",
  ]);

  return (
    <>
      <section className="bg-white pt-24 dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Glance of Our Work
          </h1>
          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>
          <div className="flex items-center justify-center">
            <div className="flex items-center p-1 border border-[#537f3c] dark:border-blue-400 rounded-xl">
              <Link to="/gallery">
              <button className="px-4 py-2 text-sm font-medium bg-[#537f3c] text-white capitalize md:py-3 rounded-xl md:px-12">
                Makeup
              </button>
              </Link>
              <Link to='/gallery-hairs'>
              <button className="px-4 py-2 mx-4 text-sm font-medium text-black capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-[#537f3c] hover:text-white rounded-xl md:mx-8 md:px-12">
                Hairs
              </button>
              </Link>
              <Link to="/other-photos">
              <button className="px-4 py-2 text-sm font-medium text-black capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-[#537f3c] hover:text-white rounded-xl md:px-12">
              Others
              </button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {photos.map((src, index) => (
              <div key={index} className="flex overflow-hidden rounded-xl flex-col items-center">
                <img src={src} alt={`Photo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;