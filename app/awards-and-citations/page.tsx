import Navbar from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";

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
      <section id="sponsors" className="container pt-24 sm:py-20">
        <div className="max-w-screen-md mx-auto text-center text-3xl md:text-5xl font-bold m-5">
          <h1>Awards and Citations</h1>
        </div>
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          {/* <ul className="list-disc pl-4 pt-2">
            <li>{`Best Organic-based Sweetener and Dietary Supplement 2009, 2010, 2011 (Dangal ng Pilipinas Anuual Awards`}</li>
            <li>{`National Museum Botany Division Certificate No. 922`}</li>
            <li>{`Proven Safe and Non-toxic by the FNRI-DOST #ITDI-BIO-2010-0767`}</li>
            <li>{`2017 DOST Best SET-UP ADOPTOR`}</li>
            <li>{`GMP`}</li>
            <li>{`HALAL`}</li>
            <li>{`FDA`}</li>
            <li>{`ISO 9001:2015 QUALITY MANAGEMENT SYSTEM`}</li>
            <li>{`HACCP`}</li>
            <li>{`Ongoing GAP & Organic`}</li>
          </ul> */}
          <ul className="list-none pl-4 pt-2 space-y-3">
            <li className="flex items-center gap-2 text-lg text-gray-700 hover:bg-gray-100 p-2 rounded-md">
              <span className="text-blue-500">•</span> Best Organic-based
              Sweetener and Dietary Supplement 2009, 2010, 2011 (Dangal ng
              Pilipinas Annual Awards)
            </li>
            <li className="flex items-center gap-2 text-lg text-gray-700 hover:bg-gray-100 p-2 rounded-md">
              <span className="text-green-500">•</span> National Museum Botany
              Division Certificate No. 922
            </li>
            <li className="flex items-center gap-2 text-lg text-gray-700 hover:bg-gray-100 p-2 rounded-md">
              <span className="text-red-500">•</span> Proven Safe and Non-toxic
              by the FNRI-DOST #ITDI-BIO-2010-0767
            </li>
            <li className="flex items-center gap-2 text-lg text-gray-700 hover:bg-gray-100 p-2 rounded-md">
              <span className="text-yellow-500">•</span> 2017 DOST Best SET-UP
              ADOPTOR
            </li>
            <li className="flex items-center gap-2 text-lg text-gray-700 hover:bg-gray-100 p-2 rounded-md">
              <span className="text-purple-500">•</span> GMP
            </li>
            <li className="flex items-center gap-2 text-lg text-gray-700 hover:bg-gray-100 p-2 rounded-md">
              <span className="text-pink-500">•</span> HALAL
            </li>
            <li className="flex items-center gap-2 text-lg text-gray-700 hover:bg-gray-100 p-2 rounded-md">
              <span className="text-indigo-500">•</span> FDA
            </li>
            <li className="flex items-center gap-2 text-lg text-gray-700 hover:bg-gray-100 p-2 rounded-md">
              <span className="text-teal-500">•</span> ISO 9001:2015 QUALITY
              MANAGEMENT SYSTEM
            </li>
            <li className="flex items-center gap-2 text-lg text-gray-700 hover:bg-gray-100 p-2 rounded-md">
              <span className="text-orange-500">•</span> HACCP
            </li>
            <li className="flex items-center gap-2 text-lg text-gray-700 hover:bg-gray-100 p-2 rounded-md">
              <span className="text-lime-500">•</span> Ongoing GAP & Organic
            </li>
          </ul>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
