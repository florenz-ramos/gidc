import Navbar from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import { OurCompanySection } from "@/components/layout/sections/our-company";

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
      <OurCompanySection />
      <FooterSection />
    </>
  );
}
