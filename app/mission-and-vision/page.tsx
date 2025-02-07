import Navbar from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import Image from "next/image";

export const metadata = {
  title:
    "Glorious Industrial & Development Corporation - History of Best Tasting Stevia",
  description:
    "Glorious Industrial & Development Corporation - History of Best Tasting Stevia",
};

interface sponsorsProps {
  icon: string;
  name: string;
  description: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "/images/philfoodex.png",
    name: "PHILFOODEX",
    description: "Philippine Food Processors and Exporters Organization, Inc.",
  },
  {
    icon: "/images/philexport.png",
    name: "PHILEXPORT",
    description: "Philippine Exporters Confederation Inc.",
  },
  {
    icon: "/images/paft.png",
    name: "PAFT",
    description: "Philippine Association of Food Technologists, Inc.",
  },
  {
    icon: "/images/wtc.png",
    name: "WTC",
    description: "World Trade Center",
  },
  {
    icon: "/images/chipi.png",
    name: "CHIPI",
    description: "Chamber of Herbal Industries Philippines, Inc.",
  },
  {
    icon: "/images/pcci.png",
    name: "PCCI",
    description: "Philippine Chamber Commerce Industry",
  },
  {
    icon: "/images/ccip.png",
    name: "CCIP",
    description: "Chamber of Cosmetic Industry of the Philippines, Inc.",
  },
  {
    icon: "/images/affi.jpg",
    name: "AFFI",
    description: "Association of Filipino Franchisers Inc.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      {/* <OurCompanySection /> */}
      <section className="container py-24 sm:py-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight text-green-600">
                Mission
              </h3>
            </div>
            <div className="p-6 pt-0 text-justify">
              We produce high-quality, eco-friendly healthcare and wellness
              products, prioritizing safety and sustainability. Through
              continuous innovation, we elevate customer well-being and
              positively impact communities as we expand from local to global
              markets.
            </div>
            <div className="flex items-center p-6 pt-0">
              {/* <img src="/assets/looking-ahead-DDDoMk_3.png" alt="About feature" className="w-[200px] lg:w-[300px] mx-auto"> */}
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight text-green-600">
                Vision
              </h3>
            </div>
            <div className="p-6 pt-0 text-justify">
              To be a trusted leader in the global market for natural and
              organic products, committed to driving innovation and
              sustainability that enhances the health and well-being of
              individuals and communities.
            </div>
            <div className="flex items-center p-6 pt-0">
              {/* <img src="/assets/reflecting-tA1rdXzJ.png" alt="About feature" className="w-[200px] lg:w-[300px] mx-auto"> */}
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight text-green-600">
                Quality Policy
              </h3>
            </div>
            <div className="p-6 pt-0 text-justify">
              At GIDC, we are dedicated to delivering the highest-quality
              products that meet or exceed customer expectations. We achieve
              this through an effective quality management system, adherence to
              regulatory standards, strong supplier partnerships, and a
              commitment to continuous improvement. We empower all employees to
              uphold quality at every step, ensuring customer satisfaction and
              operational excellence.
            </div>
            <div className="flex items-center p-6 pt-0">
              {/* <img src="/assets/growth-DZ7EdHJS.png" alt="About feature" className="w-[200px] lg:w-[300px] mx-auto"> */}
            </div>
          </div>
        </div>
      </section>
      <section id="sponsors" className="container pt-24 sm:py-32">
        <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
          A Proud Member Of
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-8">
            {[...sponsors, ...sponsors].map(
              ({ icon, name, description }, index) => (
                <div
                  className="flex flex-col items-center text-center gap-1 min-w-[150px] shrink-0"
                  key={name + index}
                >
                  <Image
                    src={icon}
                    width={100}
                    height={100}
                    alt={name}
                    className="w-[100px] h-[100px]"
                  />
                  <h3 className="text-2xl">{name}</h3>
                  <p className="text-muted-foreground/60 ">{description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
