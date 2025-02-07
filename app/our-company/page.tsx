import { FooterSection } from "@/components/layout/sections/footer";
import { OurCompanySection } from "@/components/layout/sections/our-company";
import { CircleIcon } from "lucide-react";

export const metadata = {
  title:
    "Glorious Industrial & Development Corporation - History of Best Tasting Stevia",
  description:
    "Glorious Industrial & Development Corporation - History of Best Tasting Stevia",
};


export default function Page() {
  return (
    <>
      <OurCompanySection />
      <FooterSection />
    </>
  );
}
