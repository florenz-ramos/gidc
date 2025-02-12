import Navbar from "@/components/layout/navbar";
import { AffiliationsSection } from "@/components/layout/sections/affiliations";
import { AwardsSection } from "@/components/layout/sections/awards";
import { FooterSection } from "@/components/layout/sections/footer";

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
      <AwardsSection />
      <AffiliationsSection/>
      <FooterSection />
    </>
  );
}
