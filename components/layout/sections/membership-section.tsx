
"use client";
import Image from "next/image";

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



export const MembershipSection = () => {
    return (
        <section id="memberships" className="container pt-24 sm:py-32">
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
    );
};
