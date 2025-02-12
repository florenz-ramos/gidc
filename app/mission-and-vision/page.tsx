import Navbar from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import { MembershipSection } from "@/components/layout/sections/membership-section";
import { MissionAndVisionSection } from "@/components/layout/sections/mission-and-vision-section";


export const metadata = {
  title:
    "Glorious Industrial & Development Corporation - History of Best Tasting Stevia",
  description:
    "Glorious Industrial & Development Corporation - History of Best Tasting Stevia",
};


export default function Page() {
  return (
    <>
      <Navbar />
      <MissionAndVisionSection/>
      <MembershipSection/>
      <FooterSection />
    </>
  );
}
