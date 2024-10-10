import HeroSection from "./_components/hero-section";
import VideoHighLightSection from "./_components/video-highlight-section";
import NasheedSection from "./_components/nasheed-section";
import QuranSection from "./_components/quran-section";
import AboutSection from "./_components/about-section";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <VideoHighLightSection />
      <NasheedSection />
      <QuranSection />
      <AboutSection />
    </div>
  );
}
