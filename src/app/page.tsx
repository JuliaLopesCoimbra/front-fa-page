import ArtistHero from "@/components/ArtistHero";
import FanHeader from "@/components/FanHeader";
import NextShowCard from "@/components/NextShowCard";
import FanClubRanking from "@/components/FanClubRanking";
import SpinWheelCard from "@/components/SpinWheelCard";
import TravelPackagesCard from "@/components/TravelPackagesCard";
import MediaOffersCard from "@/components/MediaOffersCard";

export default function Home() {
  return (
    <>
      <ArtistHero />
      <FanHeader />
      <NextShowCard />
      <FanClubRanking />
      <div className="mx-5 mt-4 grid grid-cols-2 gap-3">
        <SpinWheelCard />
        <TravelPackagesCard />
      </div>
      <MediaOffersCard />
    </>
  );
}
