import { mongoDBConnection } from "@/connections/mogoDB-connection";
import { videoModel } from "@/models/video-model";

export async function GET(req, { params }) {
  try {
    await mongoDBConnection();

    // Extract slug from the dynamic route parameter
    const { slug } = params;
    console.log(slug);

    if (!slug) {
      return new Response(JSON.stringify({ err: "Slug or ID is required" }), {
        status: 400,
      });
    }

    // Fetch single video by the dynamic slug (or videoId)
    const singleVideo = await videoModel.findOne({ videoId: slug });

    if (!singleVideo) {
      return new Response(
        JSON.stringify({ err: "Video Not Found from Ahlam" }),
        { status: 404 }
      );
    }

    // Return the video data as JSON
    return new Response(JSON.stringify({ data: singleVideo }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ err: "Internal Server Error" }), {
      status: 500,
    });
  }
}
