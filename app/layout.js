import "./globals.css";
import Navbar from "./_components/navbar";
import { Hind_Siliguri } from "next/font/google";
import Footer from "./_components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const hind = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "আহলাম Ahlam - Nasheed & Quran",
  description:
    "A soulful collection of Nasheed and Quran recitations with Bangla subtitles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${hind.className} bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
