import React from "react";
import VideoCard from "../_components/video-card";
import { getNasheeds } from "@/utils/fetch-nasheeds";

const NasheedPage = async () => {
  const nasheeds = await getNasheeds();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">
          Nasheed Collection
        </h1>
        <p className="text-lg mb-12 text-gray-600 dark:text-gray-400 text-center">
          Explore our soulful collection of Nasheeds with Bangla translations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {nasheeds.map((nasheed, ind) => (
            <VideoCard key={ind} data={nasheed} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NasheedPage;
