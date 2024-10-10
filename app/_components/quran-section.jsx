import Link from "next/link";

const QuranSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-green-600">
          Quran Recitations
        </h2>
        <p className="text-lg mb-8 text-gray-700">
          Listen to the Quran recited beautifully with Bangla subtitles.
        </p>
        <Link
          href="/quran"
          className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600"
        >
          View Quran Recitations
        </Link>
      </div>
    </section>
  );
};

export default QuranSection;
