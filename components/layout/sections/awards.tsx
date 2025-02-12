
"use client";
import Image from "next/image";

export const AwardsSection = () => {
    return (
        <section id="awards" className="container pt-24 sm:py-20">
            <div className="max-w-screen-md mx-auto text-center text-3xl md:text-5xl font-bold m-5">
                <h1>Awards and Citations</h1>
            </div>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
                <ul className="list-none pl-4 pt-2 space-y-3">
                    <li className="flex items-center gap-2 text-lg p-2 rounded-md">
                        <span>•</span> Best Organic-based
                        Sweetener and Dietary Supplement 2009, 2010, 2011 (Dangal ng
                        Pilipinas Annual Awards)
                    </li>
                    <li className="flex items-center gap-2 text-lg p-2 rounded-md">
                        <span>•</span> National Museum Botany
                        Division Certificate No. 922
                    </li>
                    <li className="flex items-center gap-2 text-lg p-2 rounded-md">
                        <span>•</span> Proven Safe and Non-toxic
                        by the FNRI-DOST #ITDI-BIO-2010-0767
                    </li>
                    <li className="flex items-center gap-2 text-lg p-2 rounded-md">
                        <span>•</span> 2017 DOST Best SET-UP
                        ADOPTOR
                    </li>
                    <li className="flex items-center gap-2 text-lg p-2 rounded-md">
                        <span>•</span> GMP
                    </li>
                    <li className="flex items-center gap-2 text-lg p-2 rounded-md">
                        <span>•</span> HALAL
                    </li>
                    <li className="flex items-center gap-2 text-lg p-2 rounded-md">
                        <span>•</span> FDA
                    </li>
                    <li className="flex items-center gap-2 text-lg p-2 rounded-md">
                        <span>•</span> ISO 9001:2015 QUALITY
                        MANAGEMENT SYSTEM
                    </li>
                    <li className="flex items-center gap-2 text-lg p-2 rounded-md">
                        <span>•</span> HACCP
                    </li>
                    <li className="flex items-center gap-2 text-lg p-2 rounded-md">
                        <span>•</span> Ongoing GAP & Organic
                    </li>
                </ul>
                <div className="w-full m-5 flex">
                    <Image src="/images/awardscitation.png" 
                    width={600} 
                    height={400} 
                    alt="awardscitations" 
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto" />
                </div>
            </div>
        </section>
    );
};
