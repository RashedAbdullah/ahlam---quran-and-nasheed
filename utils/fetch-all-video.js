import { fetchVideoData } from "./fetch-video";

export const getAllVideos = async (skip = 0, limit = 6) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/videos?limit=${limit}&skip=${skip}`
    );

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

    // Sort the results by `publishedAt` in descending order (newest first)
    const sortedResult = result.sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );

    return sortedResult;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return []; // Return an empty array if there's an error
  }
};
