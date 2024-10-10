import { formatCount } from "@/utils/foram-view";
import Link from "next/link";
import React from "react";
import { FaEye, FaThumbsUp, FaComment, FaCalendarAlt } from "react-icons/fa";

const VideoCard = ({ data }) => {

  const formattedDate = new Date(data?.publishedAt).toLocaleDateString(
    "bn",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
  const formattedTime = new Date(data?.publishedAt).toLocaleTimeString(
    "bn",
    // {
    //   day: "numeric",
    //   month: "long",
    //   year: "numeric",
    // }
  );

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
        <Link href={`/videos/${data?.publishedAt}`}>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 hover:text-blue-500 transition-colors">
            {data?.title}
          </h3>
        </Link>

        {/* Published Date */}
        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
          <FaCalendarAlt className="mr-2 text-blue-500" />
          <span>{formattedDate} | সময়:{formattedTime}</span>
        </div>

        {/* Stats Section */}
        <div className="flex justify-between items-center text-gray-700 dark:text-gray-300 text-sm">
          <div className="flex items-center space-x-2">
            <FaEye className="text-blue-500" />
            <span>{formatCount(data.totalView)} views</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaThumbsUp className="text-green-500" />
            <span>{formatCount(data.likes)} likes</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaComment className="text-yellow-500" />
            <span>{formatCount(data.comments)} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
