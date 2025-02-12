import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface contentProps {
  videoId: string;
  title: string;
}

const YoutubeVideoGrid = ({ videos }: { videos: contentProps[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-lg mx-auto">
      {videos.map(({ videoId, title }, index) => (
        <div
          key={videoId}
          className={
            videos.length === 7 && index === 6
              ? "col-span-1 sm:col-span-2 md:col-span-1 md:col-start-2 flex justify-center"
              : ""
          }
        >
          <Card className="w-full">
            <CardContent className="p-4">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default YoutubeVideoGrid;
