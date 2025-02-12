import Navbar from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import Image from "next/image";

interface affiliationsProps {
  icon: string;
  name: string;
}

const affiliations: affiliationsProps[] = [
  {
    icon: "/images/icon-image-1.png",
    name: "Healthy Sweet for Baking / Cooking",
  },
  {
    icon: "/images/icon-image-2.png",
    name: "Calorie Free",
  },
  {
    icon: "/images/icon-image-3.png",
    name: "Health Benefits",
  },
  {
    icon: "/images/icon-image-4.png",
    name: "All Natural",
  },
  {
    icon: "/images/icon-image-5.png",
    name: "No Impact on Tooth Decay",
  },
  {
    icon: "/images/icon-image-6.png",
    name: "Decreases Urge for Sweets",
  },
];

export default function WhatIsStevia() {
  return (
    <>
      <Navbar />
      <section id="benefits" className="container py-24 sm:py-32">
        <div className="max-w-screen-md mx-auto text-center text-3xl md:text-5xl font-bold">
          <h1>What is Stevia</h1>
        </div>
        <div className="w-full my-3 text-justify p-4">
          <p className="md:text-xl text-muted-foreground mb-8 text-justify">
            Stevia is an herb of the sunflower family, native to subtropical and
            tropical regions from western North America to South America.
          </p>
          <p className="md:text-xl text-muted-foreground mb-8 text-justify">
            The plant is used extensively by the Guarani Indians of South
            America for more than 1,500 years, and the plant has a long history
            of medicinal use in Paraguay and Brazil.
          </p>
          <p className="md:text-xl text-muted-foreground mb-8 text-justify">
            The leaves have been traditionally used for hundreds of the years in
            Paraguay and Brazil to sweeten local teas, medicines and as a sweet
            treat.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 place-items-center lg:gap-24 m-3">
          <div>
            <p className="md:text-xl text-muted-foreground mb-8 text-justify">
              Stevia is a natural, non-caloric, sweet-tasting plant used around
              the world for its pleasant taste.
            </p>
            <p className="md:text-xl text-muted-foreground mb-8 text-justify">
              According to an article published in www.bewell.com, stevia is an
              outstanding sweet-tasting Herb that has remarkable
              health-promoting qualities.
            </p>
            <p className="md:text-xl text-muted-foreground mb-8 text-justify">
              Today, it is grown and used as Food Supplement & Food Ingredient
              in different countries and now in the Philippines!
            </p>
            <p className="md:text-xl text-muted-foreground mb-8 text-justify">
              The leaf of the Stevia plant contains sweet components called,
              Steviol Glycosides Stevia rebaudiana bertoni(Scientific name)
            </p>
          </div>
          <div>
            <Image
              alt="banner"
              src="/images/farm-stevia.png"
              width={1200}
              height={200}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 place-items-center lg:gap-24 m-3">
          <div>
            <Image
              alt="banner"
              src="/images/production-process.png"
              width={1200}
              height={200}
            />
          </div>
          <div>
            <p className="md:text-xl text-muted-foreground mb-8 text-justify">
              Stevia is ideal for dieters and weight watchers because of its
              zero calorie content. This can be used as food enhancers to
              sweeten beverages, for baking, and for cooking. One of the
              benefits of Stevia is to eliminate sugar from the diet or all
              forms of sugar.
            </p>
            <p className="md:text-xl text-muted-foreground mb-8 text-justify">
              USFDA considered Stevia as GRAS(Generally Recognized as Safe.)
              Nine Components:
            </p>
            <div className="grid lg:grid-cols-2 place-items-center lg:gap-24 m-3">
              <ul className="list-none pl-4 pt-2 space-y-3">
                <li className="flex items-center gap-2 text-md rounded-md">
                  <span>•</span> Stevioside
                </li>
                <li className="flex items-center gap-2 text-md rounded-md">
                  <span>•</span> Rebaudioside A
                </li>
                <li className="flex items-center gap-2 text-md rounded-md">
                  <span>•</span> Rebaudioside B
                </li>
                <li className="flex items-center gap-2 text-md rounded-md">
                  <span>•</span> Rebaudioside C
                </li>
                <li className="flex items-center gap-2 text-md rounded-md">
                  <span>•</span> Dulcoside A
                </li>
              </ul>
              <ul className="list-none pl-4 pt-2 space-y-3">
                <li className="flex items-center gap-2 text-md rounded-md">
                  <span>•</span> Rubusoside
                </li>
                <li className="flex items-center gap-2 text-md rounded-md">
                  <span>•</span> Steviolbioside
                </li>
                <li className="flex items-center gap-2 text-md rounded-md">
                  <span>•</span> Rebaudioside D
                </li>
                <li className="flex items-center gap-2 text-md rounded-md">
                  <span>•</span> Rebaudioside F
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-screen-md mx-auto text-center">
          <Image
            alt="banner"
            src="/images/GIDC-page-4-1-1024x439.png"
            width={1024}
            height={439}
          />
        </div>
        <div className="max-w-screen-md mx-auto text-center text-3xl md:text-5xl font-bold">
          <h1>Sweetening Ability</h1>
        </div>
        <div className="grid grid-cols-3 gap-2 max-w-screen-md mx-auto space-y-4">
          {affiliations.map(({ icon, name }) => (
            <div
              key={name}
              className="flex flex-col items-center text-muted-foreground/60"
            >
              <Image
                src={icon}
                width={100}
                height={100}
                alt={name}
                className="object-contain"
              />
              <p className="mt-2 text-center">{name}</p>
            </div>
          ))}
        </div>
      </section>
      <FooterSection />
    </>
  );
}
