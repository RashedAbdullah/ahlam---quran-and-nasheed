import { getSingleVideo } from "@/utils/fetch-single-video";
import { formatCount } from "@/utils/foram-view";
import React from "react";
import {
  FaEye,
  FaThumbsUp,
  FaComment,
  FaCalendarAlt,
  FaYoutube,
} from "react-icons/fa";

const SinglaYoutubePage = async ({ params: { slug } }) => {
  const singleData = await getSingleVideo(slug);
  const {
    id,
    title,
    description,
    embedCode,
    totalView: viewsCount,
    publishedAt,
    likes,
    comments,
    tags,
  } = singleData;

  const formattedDate = new Date(publishedAt).toLocaleDateString({
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = new Date(publishedAt).toLocaleTimeString();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Video Embed */}
      <div className="w-full h-64 sm:h-96 mb-6">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src={embedCode}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Video Details */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          {title}
        </h1>

        {/* Published Date and Watch Video */}
        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
          <FaCalendarAlt className="mr-2 text-blue-500" />
          <span>
            {formattedDate} | {formattedTime}
          </span>
          <a
            href={`https://www.youtube.com/watch?v=${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline ml-4 flex items-center space-x-1"
          >
            <FaYoutube className="text-red-500" />
            <span>Watch on YouTube</span>
          </a>
        </div>

        {/* Stats Section */}
        <div className="flex justify-start space-x-8 mb-6 text-gray-700 dark:text-gray-300">
          <div className="flex items-center space-x-2">
            <FaEye className="text-blue-500" />
            <span>{formatCount(viewsCount)} views</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaThumbsUp className="text-green-500" />
            <span>{formatCount(likes)} likes</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaComment className="text-yellow-500" />
            <span>{formatCount(comments)} comments</span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Description
          </h2>
          <pre className="text-gray-600 dark:text-gray-400 text-wrap">
            {description}
          </pre>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Tags
            </h3>
            <div className="flex flex-wrap space-x-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglaYoutubePage;
