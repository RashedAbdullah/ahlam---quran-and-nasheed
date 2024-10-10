import { mongoDBConnection } from "@/connections/mogoDB-connection";
import { videoModel } from "@/models/video-model";

export async function GET(req) {
  try {
    await mongoDBConnection();

    const videos = await videoModel.find({
      category: "quran",
    });

    return new Response(JSON.stringify({ data: videos }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ err: "Video Not Found from Ahlam" }), {
      status: 500,
    });
  }
}
