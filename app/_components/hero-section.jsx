import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#1C1C1E] via-[#2C3E50] to-[#4E342E] text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
          Welcome to আহলাম Ahlam
        </h1>
        <p className="text-lg mb-8">
          Discover soulful Nasheed and Quran recitations with Bangla subtitles.
        </p>
        <Link
          href="/videos"
          className="bg-[#E0A96D] text-[#1C1C1E] px-6 py-3 rounded-full shadow-lg hover:bg-[#D89550] hover:text-white"
        >
          Explore Videos
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
