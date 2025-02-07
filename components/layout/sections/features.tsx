import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import Image from "next/image";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "/images/image1.png",
    title: "100% Organic",
    description: "We are a pioneer in organic and natural products.",
  },
  {
    icon: "/images/image2.png",
    title: "Filipino-Owned Company",
    description:
      "We are FDA Certified and recognized as the Philippine’s 1st Stevia Company.",
  },
  {
    icon: "/images/image3.png",
    title: "Best Quality",
    description:
      "We manufacture only the highest quality food, healthcare, and wellness products that are ad pair and ready for global markets.",
  },
];
{
  /* // py-32 */
}
export const FeaturesSection = () => {
  return (
    <>
      <section id="features" className="container py-24 sm:py-32">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Grow Local. Go Global.
        </h2>

        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8 p-5">
          {`We at Glorious Industrial & Development Corporation are committed to providing high quality products and devices that adheres to the highest global ethical standards (GIDC, The Stevia Company. All our employees
share the responsibility that reflects quality and excellence as a way of life.
Our products are people and environment friendly.`}
        </h3>
        <section id="images-section" className="container py-24 sm:py-32">
          <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
            <div>
              <Image
                alt="image1"
                src="/images/image4.jpg"
                width={1000}
                height={100}
              />
            </div>

            <div>
              <Image
                alt="image5"
                src="/images/image5.png"
                width={1000}
                height={100}
              />
            </div>
          </div>
        </section>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featureList.map(({ icon, title, description }) => (
            <div key={title}>
              <Card className="h-full bg-background border-0 shadow-none">
                <CardHeader className="flex justify-center items-center">
                  <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                    <Image
                      src={icon}
                      alt={title}
                      width={50}
                      height={50}
                      color="hsl(var(--primary))"
                      className="text-primary"
                    />
                  </div>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground text-center">
                  {description}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
