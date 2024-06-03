import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Generic/Spinner"; // Adjust the path as needed

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "https://admin.tomedes.com/api/v1/get-reviews?page=1"
        );
        setReviews(response.data.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  return (
    <div className="p-20 text-black">
      <main>
        <section>
          <h2 className="text-4xl font-semibold py-4">
            What Our Customers Say
          </h2>
          {loading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-2 gap-10">
              {reviews.map((review) => (
                <div
                  key={review.ID}
                  className="p-4 bg-white rounded-xl shadow-lg relative"
                >
                  <div className="absolute top-[-14px] right-[-10px] bg-blue-500 w-12 h-12 flex items-center justify-center rounded-full">
                    <p className="text-white text-xl font-bold">"</p>
                  </div>
                  <p className="text-gray-600 pt-2">
                    {review.Reviews.length >= 90
                      ? review.Reviews.substring(0, 90) + "..."
                      : review.Reviews}
                  </p>
                  <div className="flex items-center mt-4">
                    <img
                      src="/path-to-your-avatar-image.png" // Update this path as per your project structure
                      alt={review.Name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4">
                      <p className="text-xl font-semibold">{review.Name}</p>
                      <p className="text-gray-500">Patient</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Review;
