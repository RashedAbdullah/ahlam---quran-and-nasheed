import { fetchVideoData } from "./fetch-video";

export const getQuran = async () => {
  try {
    const response = await fetch(`${process.env.WEB_URL}/api/quran`);

    const data = await response.json();

    if (!data.data || data.data.length === 0) {
      return [];
    }

    const result = await Promise.all(
      data.data.map(async (dt) => {
        const vdo = await fetchVideoData(dt.videoId);
        return vdo;
      })
    );

    const sortedResult = result.sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );

    return sortedResult;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};
