// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-teal-50 text-teal-800 dark:bg-gray-900 dark:text-gray-400 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-teal-900 dark:text-gray-100">
              আহলাম Ahlam
            </h3>
            <p className="text-teal-700 dark:text-gray-400">
              A YouTube channel dedicated to Nasheed and Quran recitations with
              Bangla subtitles. Join us for soulful recitations.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-teal-900 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/videos"
                  className="hover:text-teal-600 dark:hover:text-gray-500"
                >
                  Videos
                </Link>
              </li>
              <li>
                <Link
                  href="/nasheed"
                  className="hover:text-teal-600 dark:hover:text-gray-500"
                >
                  Nasheed
                </Link>
              </li>
              <li>
                <Link
                  href="/quran"
                  className="hover:text-teal-600 dark:hover:text-gray-500"
                >
                  Quran
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-teal-600 dark:hover:text-gray-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-teal-600 dark:hover:text-gray-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-teal-900 dark:text-gray-100">
              Follow Us
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.youtube.com/channel/your-channel-id"
                  className="hover:text-teal-600 dark:hover:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/your-page-id"
                  className="hover:text-teal-600 dark:hover:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/your-profile-id"
                  className="hover:text-teal-600 dark:hover:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-teal-200 dark:border-gray-800 mt-8 pt-6 text-center">
          <p className="text-teal-800 dark:text-gray-400">
            &copy; {new Date().getFullYear()} আহলাম Ahlam. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
