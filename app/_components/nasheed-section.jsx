import Link from "next/link";
import React from "react";

const NasheedSection = () => {
  return (
    <section className="bg-blue-50 dark:bg-blue-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-300">
          Nasheed Collection
        </h2>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          Explore our soulful collection of Nasheeds with Bangla translations.
        </p>
        <Link
          href="/nasheeds"
          className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 transition duration-300 ease-in-out"
        >
          View Nasheed
        </Link>
      </div>
    </section>
  );
};

export default NasheedSection;
