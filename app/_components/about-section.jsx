import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">
          About Us
        </h2>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
          আহলাম Ahlam is a platform where you can enjoy Nasheed and Quran
          recitations with Bangla translations. Our goal is to spread the beauty
          of Islamic recitations.
        </p>
        <Link
          href="/about"
          className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 transition duration-300 ease-in-out"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
