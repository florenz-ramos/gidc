import Navbar from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import Image from "next/image";

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
            <section id="benefits" className="container py-24 sm:py-32">
                <div className="max-w-screen-md mx-auto text-center text-3xl md:text-5xl font-bold">
                    <h1>Corporate Social Responsibility</h1>
                </div>
                <div className="grid lg:grid-cols-2 place-items-center lg:gap-24 m-3">
                    <div>
                        <p className="md:text-xl text-muted-foreground mb-8 text-justify">
                            Farmers are one of the most neglected sectors in our society. Despite of being hardworking, they remain poor because of their limited knowledge and inability to find the right market. Coming from a family of farmers, I’ve came through this experience.
                        </p>
                        <p className="md:text-xl text-muted-foreground mb-8 text-justify">
                            It saddens me as I speak to the farmers and witness their deteriorating hopes. It has always been my life’s goal to help them maximize their potential and abilities. I always ask myself what help could I extend and when I should do it whenever I find idle land and farmers. I tried to encourage and support them to the extent of my resources but it only lasts for quite some time. It was hard but I never gave up. For in my heart, I believe that as long as the passion is there, God will help me find a way.
                        </p>
                    </div>
                    <div>
                        <Image
                            alt="banner"
                            src="/images/image6.jpg"
                            width={1200}
                            height={200}
                        />
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 place-items-center lg:gap-24 m-3">
                    <div>
                        <Image
                            alt="banner"
                            src="/images/image7.jpg"
                            width={1200}
                            height={200}
                        />
                    </div>
                    <div>
                        <p className="md:text-xl text-muted-foreground mb-8 text-justify">
                            Many years ago, I discovered Stevia–a unique plant with unique features. I was drawn to it right away. I knew I had to try growing Stevia plants locally. I wondered why Stevia is not popular in the Philippines despite of being an agricultural nation. Learning about Stevia’s health benefits captured my curiosity even more.
                        </p>
                        <p className="md:text-xl text-muted-foreground mb-8 text-justify">

                            I started working with some farmers and experimented to see how to grow Stevia. We have had our shares of failures but the more we failed, the more we were challenged. Others gave up, a few stayed. My resources began to thin down, and there were times when my spirit wears out as well. But with the farmers’ welfare in mind and my heart as a Filipino, I am always able to regain my strength.
                        </p>
                    </div>

                </div>
                <div className="grid lg:grid-cols-2 place-items-center lg:gap-24 m-3">
                    <div>
                        <p className="md:text-xl text-muted-foreground mb-8 text-justify">
                            Today, we have a few farmers who we are working with. By God’s grace, we hope that they multiply by tens, by hundreds and even by thousands. Soon, we will be able to provide more job opportunities, especially in the rural areas. We take pride in our partnership with the farmers, whom we see as key individuals in this venture.
                        </p>
                        <p className="md:text-xl text-muted-foreground mb-8 text-justify">
                            Rest assured that our company’s vision would continue as long as there are dedicated farmers and fertile lands. My wish and prayer is to pass it on from generation to generation so that the Filipino farmers will be proud of who they are and what they do.
                        </p>
                        <p className="md:text-xl text-muted-foreground mb-8 text-justify">
                            Let us keep our Filipino pride alive by helping each other out.
                        </p>
                        <p className="md:text-xl text-muted-foreground mb-8 text-justify">
                            Let us GROW LOCAL, GO GLOBAL
                        </p>
                    </div>
                    <div>
                        <Image
                            alt="banner"
                            src="/images/image8.jpg"
                            width={1200}
                            height={200}
                        />
                    </div>
                </div>
            </section>
            <FooterSection />
        </>
    );
}
