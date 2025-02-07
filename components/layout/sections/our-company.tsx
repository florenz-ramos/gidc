"use client";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

export const OurCompanySection = () => {
  const timeLines = [
    {
      title: "Year 2004",
      description: "Stevia Farming Started",
      className: "before:flex-1",
      orientation: "right",
    },
    {
      title: "Year 2005: HUMBLE BEGINNINGS",
      description:
        "GIDC is a Filipino-owned company. It started as a home care manufacturing company.",
      className: "after:flex-1",
      orientation: "left",
    },
    {
      title: "Year 2008",
      description:
        "Glorious Blend Coffee and Choco products were introduced in the local markets. These special blends are mixed with healthy ingredients such as moringga, mangosteen, calcium, gotu kola and Stevia.",
      className: "before:flex-1",
      orientation: "right",
    },
    {
      title: "Year 2009",
      description:
        "Sweet & Fit Stevia was certified by FDA and GIDC was recognized as the Philippine's 1st Stevia Company.",
      className: "after:flex-1",
      orientation: "left",
    },
    {
      title: "Year 2012: GROW LOCAL, GO GLOBAL",
      description:
        "GIDC began growing plants being used in healthcare products. GIDC products became available in leading supermarket & drugstores including Mercury Drug. Puregold, Robinsons Supermarket, Walter Mart, AFPCES, Unimart, Human Nature, Rustan's, The Landmark and Fisher Mall.",
      className: "before:flex-1",
      orientation: "right",
    },
    {
      title: "Year 2014",
      description: "GIDC started offering Tolling and Spray Drying services.",
      className: "after:flex-1",
      orientation: "left",
    },
    {
      title: "Year 2015: GROWTH & EXPANSION",
      description:
        "With bulk orders and demands from our local markets, GIDC has been continuously finding ways to improve the quality of its products in preparation for the global markets.",
      className: "before:flex-1",
      orientation: "right",
    },
    {
      title: "Year 2016: BEYOND PRODUCTION",
      description:
        "GIDC began supplying Sweet & Fit Stevia to food manufacturing companies, hospitals, and food service industry.",
      className: "after:flex-1",
      orientation: "left",
    },
    {
      title: "Year 2017",
      description: "ISO 9001:2015 Quality Management System Certified.",
      className: "before:flex-1",
      orientation: "right",
    },
    // {
    //   title: "Present",
    //   description:
    //     "Still doing the production",
    //   className: "after:flex-1",
    //   orientation: "left",
    // },
  ];
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-24 md:py-32">
        <div className="text-center space-y-8">
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Our Company
          </h2>

          <div className="max-w-screen-md mx-auto text-center text-3xl md:text-5xl font-bold">
            <h1>Looking Back Moving Forward</h1>
          </div>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Timeline className="sm:m-5 m-5">
              {timeLines.map(({ title, description }, index) => {
                const isLastItem = index === timeLines.length - 1; // Check if it's the last item

                return (
                  <TimelineItem key={title}>
                    <TimelineSeparator>
                      <TimelineDot variant="outline" />
                      {!isLastItem && <TimelineConnector />}{" "}
                      {/* Hide connector on last item */}
                    </TimelineSeparator>
                    <TimelineContent>
                      <TimelineTitle className="text-bold text-green-600">
                        {title}
                      </TimelineTitle>
                      <TimelineDescription className="text-justify m-3">
                        {description}
                      </TimelineDescription>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>

            {/* <Timeline>
              {timeLines.map(
                ({ title, description, className, orientation }, index) => {
                  const isLastItem = index === timeLines.length - 1;

                  return (
                    <TimelineItem className={className} key={title}>
                      {orientation === "right" && (
                        <TimelineSeparator>
                          <TimelineDot variant="outline" />
                          {!isLastItem && <TimelineConnector />}
                        </TimelineSeparator>
                      )}
                      <TimelineContent>
                        <TimelineTitle className="text-bold text-green-600">
                          {title}
                        </TimelineTitle>
                        <TimelineDescription className="text-justify m-3">
                          {description}
                        </TimelineDescription>
                      </TimelineContent>
                      {orientation === "left" && (
                        <TimelineSeparator>
                          <TimelineDot variant="outline" />
                          {!isLastItem && <TimelineConnector />}
                        </TimelineSeparator>
                      )}
                    </TimelineItem>
                  );
                }
              )}
            </Timeline> */}
          </div>
        </div>
      </div>
    </section>
  );
};
