import {
  IconAdjustmentsBolt,
  IconChecklist,
  IconCloud,
  IconCurrencyDollar,
  IconDeviceDesktop,
  IconEaseInOut,
  IconGraphFilled,
  IconHeart,
  IconHeartHandshake,
  IconHelp,
  IconRadar,
  IconRouteAltLeft,
  IconScale,
  IconTerminal2,
  IconUsers,
} from "@tabler/icons-react";
import React from "react";
import {
  FeatureCard,
  FeatureDescription,
  FeatureTitle,
} from "../ui/feature-card";
import { Badge } from "../ui/badge";

function BusinessFeatures() {
  const features = [
    {
      title: "Access to Vetted Talent",
      description:
        "Gain instant access to a pool of highly skilled, vetted developers ready to take on your projects.",
      icon: <IconUsers size={24}/>,
    },
    {
      title: "Efficient Hiring Process",
      description:
        "Simplify your hiring process with our streamlined platform, reducing the time and effort required to find the right talent.",
      icon: <IconChecklist size={24}/>,
    },
    {
      title: "Scalable Workforce",
      description:
        "Easily scale your development team up or down based on project needs, ensuring flexibility and efficiency.",
      icon: <IconGraphFilled size={24}/>,
    },
    {
      title: "Customized Skill Enhancement",
      description:
        "Offer personalized education and skill enhancement opportunities to your team to keep them updated with industry trends.",
      icon: <IconDeviceDesktop size={24}/>,
    },
    {
      title: "Reliable Remote Collaboration",
      description:
        "Benefit from reliable remote collaboration tools and processes that ensure seamless project execution.",
      icon: <IconRadar size={24}/>,
    },
    {
      title: "Comprehensive Services",
      description:
        "From hiring to project management, our platform offers everything you need to succeed.",
      icon: <IconHeartHandshake size={24}/>,
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto text-center">
      <Badge variant={"secondary"} className="py-2 px-4">
        For Businesses
      </Badge>
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Empower Your Projects with Our Comprehensive Features{" "}
        </h4>
        <p className="text-base lg:text-base max-w-2xl my-4 mx-auto text-center font-normal">
        Discover a suite of features designed to enhance efficiency, streamline hiring, and ensure seamless collaboration. Our platform connects you with top-tier talent and supports your team&#39;s growth every step of the way.
        </p>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              variant="animated"
              title={feature.title}
              description={feature.description}
              sectionCount={3}
              icon={feature.icon}
              index={index}
            >
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BusinessFeatures;
