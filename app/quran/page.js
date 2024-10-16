import { getQuran } from "@/utils/fetch-quran";
import VideoCard from "../_components/video-card";

const QuranPage = async () => {
  const quran = await getQuran();
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">
          Quran Recitations
        </h1>
        <p className="text-lg mb-12 text-gray-600 dark:text-gray-400 text-center">
          Explore our collection of Quran recitations with Bangla translations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {quran.map((data, ind) => (
            <VideoCard key={ind} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuranPage;
