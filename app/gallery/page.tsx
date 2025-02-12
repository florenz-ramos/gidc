import Navbar from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import YoutubeVideoGrid from "@/components/layout/sections/youtube-video-grid";

interface contentProps {
  videoId: string;
  title: string;
}

const contents: contentProps[] = [
  {
    videoId: "ZuTMw5ll2wg?feature=oembed",
    title:
      "The First Stevia Farm in the Philippines (Located at Bocaue Bulacan)",
  },
  {
    videoId: "8-2VzYrjl2M?feature=oembed",
    title: "Sweet and Fit Stevia Sweetens Life Naturally (TVC)",
  },
  {
    videoId: "XVX7XJO7FNc?feature=oembed",
    title: "Biopatch TV Interview w/ President Maura De Leon",
  },
  {
    videoId: "_1ql_VupKQY?feature=oembed",
    title:
      "Sweet and Fit Stevia Kinamatisan (How to cook kinamatisan with Stevia)",
  },
  {
    videoId: "F95vUdMYeUc?feature=oembed",
    title: "Stevia Kare-kare (How to cook Kare-kare)",
  },
  {
    videoId: "WIrQ4S5k_Ww?feature=oembed",
    title: "Stevia Coffee",
  },
  {
    videoId: "hB5m1Yf9xWE?feature=oembed",
    title: "Sweet and Fit Stevia BBQ Sinuso (How to cook sinuso)",
  },
];

export default function Gallery() {
  return (
    <>
      <Navbar />
      <section id="benefits" className="container py-24 sm:py-32">
        <div className="max-w-screen-md mx-auto text-center text-3xl md:text-5xl font-bold">
          <h1>Gallery</h1>
        </div>
        <div className="space-y-4 m-4">
          <YoutubeVideoGrid videos={contents} />
        </div>
      </section>
      <FooterSection />
    </>
  );
}
