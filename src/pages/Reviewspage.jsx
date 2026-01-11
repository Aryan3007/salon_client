/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useEffect, useState } from "react";

const Reviewspage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  const getAllReviews = async () => {
    try {
      const res = await axios.get(
        "https://salon-server-gilt.vercel.app/review/getreview"
      );
      // Assuming each review has a createdAt property
      const sortedReviews = res.data.reviews.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setReviews(sortedReviews);
      setLoading(false); // Set loading to false after fetching data
    } catch (error) {
      console.log(error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  return (
    <section className="bg-white px-4 py-12 md:py-24">
      {loading ? (
        <h1 className="text-center">LOADING...</h1>
      ) : (
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-black mt-12 text-black text-center text-3xl leading-none uppercase max-w-2xl mx-auto mb-12">
            What Clients Are Saying
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 relative"
              >
                <div className="border border-green-700 w-full shadow-lg rounded-lg p-8 text-center">
                  <p className="font-bold uppercase">{review.name}</p>
                  <p className="text-xl font-light italic text-gray-700">
                    {review.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviewspage;
