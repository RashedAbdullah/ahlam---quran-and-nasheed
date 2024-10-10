import { formatCount } from "@/utils/foram-view";
import Link from "next/link";
import React from "react";
import {
  FaEye,
  FaThumbsUp,
  FaComment,
  FaCalendarAlt,
  FaYoutube,
} from "react-icons/fa";

const VideoCard = ({ data }) => {
  const formattedDate = new Date(data?.publishedAt).toLocaleDateString({
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = new Date(data?.publishedAt).toLocaleTimeString();

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
      {/* Video Embed */}
      <iframe
        className="w-full h-64"
        src={data?.embedCode}
        title={data?.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Video Info Section */}
      <div className="p-4">
        {/* Video Title */}
        <Link href={`/video/${data?.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 hover:text-blue-500 transition-colors">
            {data?.title}
          </h3>
        </Link>

        {/* Published Date with Watch Video Link */}
        <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 text-sm mb-4">
          <div className="flex justify-center items-center">
            <FaCalendarAlt className="mr-2 text-blue-500" />
            <p>
              {formattedDate} | {formattedTime}
            </p>
          </div>

          <a
            href={`https://www.youtube.com/watch?v=${data?.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center space-x-1"
          >
            <FaYoutube className="text-red-500" /> {/* YouTube icon */}
            <span>Watch on youtube</span>
          </a>
        </div>

        {/* Stats Section */}
        <div className="flex justify-between items-center text-gray-700 dark:text-gray-300 text-sm">
          <div className="flex items-center space-x-2">
            <FaEye className="text-blue-500" />
            <span>{formatCount(data?.totalView)} views</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaThumbsUp className="text-green-500" />
            <span>{formatCount(data?.likes)} likes</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaComment className="text-yellow-500" />
            <span>{formatCount(data?.comments)} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
