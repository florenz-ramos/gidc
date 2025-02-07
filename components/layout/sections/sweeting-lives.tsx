

import Image from "next/image";

export const SweetingLivesSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24 m-3">
        <div>
          {/* <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2> */}

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sweetening Lives
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            BE WITH US & BE HEALTHY
          </p>
          <p className="md:text-xl text-muted-foreground mb-8 text-justify">
            GIDC is a social enterprise with a mission to uplift communities.
            Whenever you buy our products, you’re not just making a purchase;
            you’re empowering local farmers, supporting scholars, and
            contributing to tree-planting efforts that foster the environment.
            Together, we’re creating real change in offering our communities the
            opportunity for a better and more sustainable future.
          </p>
        </div>
        <div>
          <Image
            alt="banner"
            src="/images/banner.png"
            width={1200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};
