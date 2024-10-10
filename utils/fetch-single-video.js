import { fetchVideoData } from "./fetch-video";

export const getSingleVideo = async (id) => {
  try {
    const response = await fetch(`${process.env.WEB_URL}/api/videos/${id}`);

    const data = await response.json();

    if (!data.data || data.data.length === 0) {
      return [];
    }

    const video = await fetchVideoData(data.data.videoId);

    return video;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};
