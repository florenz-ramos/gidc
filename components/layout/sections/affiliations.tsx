
"use client";
import Image from "next/image";

interface affiliationsProps {
    icon: string;
    name: string;
}

const affiliations: affiliationsProps[] = [
    {
        icon: "/images/body-herbs.png",
        name: "BODY HERBS"
    },
    {
        icon: "/images/glorious.png",
        name: "GLORIOUS",
    },
    {
        icon: "/images/sweet-and-fit.png",
        name: "SWEET-AND-FIT"
    },
    {
        icon: "/images/biopatch.png",
        name: "BIOPATCH",
    }
];

export const AffiliationsSection = () => {
    return (
        <section id="affiliations" className="container pt-24 sm:py-32">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                {affiliations.map(({ icon, name }) => (
                    <div
                        key={name}
                        className="flex items-center gap-1 text-muted-foreground/60"
                    >
                        <Image
                            src={icon}
                            width={300}
                            height={300}
                            alt={name}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};
