import Image from "next/image";
import MainBanner from "@/components/banners/MainBanner";
import SecondBanner from "@/components/banners/SecondBanner";
import TextBanner from "@/components/banners/TextBanner";
import { OurServices } from "@/components/banners/OurServices/OurServices";
import {TechStack} from "@/components/banners/TechStack/TechStack";
export default function Home() {
  return (
    <main className="flex min-h-[300vh] flex-col items-center justify-start">
      <MainBanner />
      <TextBanner />
      <OurServices />
      <TechStack />
      {/*<SecondBanner />*/}
    </main>
  );
}
