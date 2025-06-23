import BiLiCard from "@/components/BiLiCard";
import DouYinCard from "@/components/DouYinCard";
import TouTiaoCard from "@/components/TouTiaoCard";
import WeiBoCard from "@/components/WeiBoCard";
import ExchangeRate from "@/components/ExchangeRate";
import ZhiHuCard from "@/components/ZhiHuCard";
import TodaySummaryCard from "@/components/TodaySummaryCard";


export default function Home() {
  return (
    <main className="flex flex-wrap justify-center">
      <TodaySummaryCard />
      <WeiBoCard />
      <TouTiaoCard />
      <ExchangeRate />
      {/*<ZhiHuCard />*/}
      <BiLiCard />
      <DouYinCard />
    </main>
  );
}
