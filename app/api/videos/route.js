import { mongoDBConnection } from "@/connections/mogoDB-connection";
import { videoModel } from "@/models/video-model";

export async function GET(req) {
  try {
    await mongoDBConnection();

    // Extract query parameters (limit and skip)
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit")) || 6; // default to 6 if not provided
    const skip = parseInt(searchParams.get("skip")) || 0; // default to 0 if not provided
    console.log(limit);
    // Fetch videos with pagination
    const videos = await videoModel.find({}).limit(limit).skip(skip);

    return new Response(JSON.stringify({ data: videos }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ err: "Video Not Found from Ahlam" }), {
      status: 500,
    });
  }
}
