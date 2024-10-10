import { getAllVideos } from "@/utils/fetch-all-video";
import VideoCard from "./video-card";
import PrevAndNextButton from "./prev-and-next";

const VideoHighlightSection = async () => {
  const data = await getAllVideos();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
          Latest Videos
        </h2>
        {/* Description */}
        <p className="text-lg mb-12 text-gray-600 dark:text-gray-300">
          Watch the latest Nasheed and Quran recitations.
        </p>
        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((video, ind) => (
            <VideoCard key={ind} data={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoHighlightSection;
