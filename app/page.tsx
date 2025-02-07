import Navbar from "@/components/layout/navbar";
import { ContactSection } from "@/components/layout/sections/contact";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { SweetingLivesSection } from "@/components/layout/sections/sweeting-lives";

export const metadata = {
  title:
    "Glorious Industrial & Development Corporation - History of Best Tasting Stevia",
  description:
    "Glorious Industrial & Development Corporation - History of Best Tasting Stevia",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SweetingLivesSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
