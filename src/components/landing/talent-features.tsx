"use client";
import React, { ReactNode, useState } from "react";
import { Badge } from "../ui/badge";
import {
  FeatureCard,
  FeatureDescription,
  FeatureTitle,
} from "../ui/feature-card";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import growth from "../../../public/Growth.svg";
import review from "../../../public/review.svg";
import apply from "../../../public/apply.svg";
import Image from "next/image";
import { IconHandFinger } from "@tabler/icons-react";
interface EligibilityCriteria {
  title: string;
  description: string;
  className: string;
}

interface Feature {
  badge: string;
  title: string;
  description: string;
  content?: React.ReactNode;
  className: string;
  titleClassName?: string;
  descriptionClassName?: string;
  variant?: "default" | "animated";
}

interface Benefit {
  title: string;
  description: string;
}

interface Process {
  title: string;
  description: string;
  className: string;
  image: string;
}
export function TalentFeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const Benefits: Benefit[] = [
    {
      title: "Enhance Your Skills through Engaging Community Activities",
      description:
        "At Talentify, we provide numerous opportunities to sharpen your skills through interactive activities, one-on-one mentorship, and a vibrant peer network.",
    },
    {
      title: "Weekly AMA Sessions with Industry Experts",
      description:
        "Stay ahead of the curve by engaging with tech leads, CTOs, PMs, and mentors during our weekly Ask Me Anything sessions.",
    },
    {
      title: "Seamless Work Experience at Your Own Pace",
      description:
        "We value your freedom and time. Talentify ensures you receive exciting projects in an organized manner, allowing you to work on what you love without hassle.",
    },
    {
      title: "Immediate Hiring Opportunities",
      description:
        "As a vetted member, you gain access to a variety of on-demand job opportunities with top companies.",
    },
  ];

  const OnboardingProcess: Process[] = [
    {
      title: "Application",
      description:
        "Tell us about yourself, your expertise, areas for improvement, and your passion as a developer. We're developers too, and we're here to support you!",
      className:
        "col-span-1 group min-h-[400px] gap-4 flex flex-col items-center justify-center hover:bg-primary hover:text-black transition ease-in-out duration-300",
      image: apply,
    },
    {
      title: "Profile Review",
      description:
        "We review your profile and administer tests as part of our vetting process. Your results determine your rank. During this time, connect with our community of like-minded individuals.",
      className:
        "col-span-1 group min-h-[400px] gap-4 flex flex-col items-center justify-center hover:bg-primary hover:text-black transition ease-in-out duration-300",
      image: review,
    },
    {
      title: "Career Growth",
      description:
        "Welcome aboard! You've demonstrated your passion and skills. Talentify is now your platform to reshape your career and achieve your professional goals.",
      className:
        "col-span-1 group min-h-[400px] gap-4 flex flex-col items-center justify-center hover:bg-primary hover:text-black transition ease-in-out duration-300",
      image: growth,
    },
  ];
  const eligibilityCriteria: EligibilityCriteria[] = [
    {
      title: "Experienced Developer",
      description:
        "We expect a minimum of 3 years of active industry experience.",
      className: "col-span-1 lg:col-span-2",
    },
    {
      title: "Strong Portfolio",
      description:
        "Showcase your contributions, whether through employment projects or side projects, to demonstrate your capabilities.",
      className: "col-span-1 lg:col-span-2",
    },
    {
      title: "Independent Contractor or Career Break",
      description:
        "We understand the uncertainties you face. We're here to help you re-enter the industry or secure the work you deserve.",
      className: "col-span-1 lg:col-span-4",
    },
  ];

  const features: Feature[] = [
    {
      badge: "How It Works",
      title: "Three Simple Steps to Unlock Your Potential",
      description:
        "Discover your true potential with Talentify and engage in diverse projects that match your aspirations.",
      descriptionClassName: " md:w-full md:max-w-3xl ",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mt-8">
          {OnboardingProcess.map((process, index) => (
            <Card key={process.title}
              className={`${process.className} ${
                hoveredIndex === index
                  ? "bg-primary text-primary-foreground transform scale-105"
                  : ""
              }` }
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardHeader >
                <div
                  className={`transition-transform duration-300 ease-in-out ${
                    hoveredIndex === index ? "transform -translate-y-2" : ""
                  }`}
                >
                  <Image src={process.image} alt={process.title} />
                </div>
              </CardHeader>
              <CardContent >
                <CardTitle className="py-4">{process.title}</CardTitle>
                <p>{process.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ),
      className: "col-span-1 lg:col-span-6  rounded-none group",
      variant: "default",
    },
    {
      badge: "Eligibility",
      title: "Are You a Fit?",
      description:
        "Talentify is a network of experienced developers. Here’s what we look for:",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
          {eligibilityCriteria.map((qualification, index) => (
            <Card
              className={qualification.className}
              key={index}
              animate={true}
            >
              <CardHeader>
                <CardTitle>{qualification.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{qualification.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ),
      className:
        "col-span-1 lg:col-span-4 lg:border-r py-6  rounded-none md:rounded-tl-lg group",
      variant: "default",
    },
    {
      badge: "Benefits",
      title: "What You Gain",
      description:
        "We offer numerous benefits, and there are more on the way. Here are the basics:",
      className: " col-span-1 lg:col-span-2 rounded-none group",
      content: (
        <div className="flex flex-col gap-6 w-full mt-8">
          {Benefits.map((benefit) => (
            <Accordion type="single" collapsible key={benefit.title}>
              <AccordionItem value="item-1">
                <AccordionTrigger className="w-full flex gap-2 items-center text-start text-lg">
                  {benefit.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p>{benefit.description}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      ),
      variant: "default",
    },
  ];

  return (
    <div className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto">
      <div className=" px-8 text-center">
        <Badge variant={"secondary"} className="py-2 px-4">
          For Devs
        </Badge>
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Simplifying your upskilling & working experience
        </h4>
        <p className="text-base lg:text-base max-w-2xl my-4 mx-auto text-center font-normal">
          Talentify bridges the gap between talented developers and top
          companies, providing opportunities for skill enhancement, career
          growth, and a structured, rewarding work experience. Join us to stay
          industry-relevant and achieve your professional aspirations.
        </p>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 px-4 md:px-0 rounded-md">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              className={feature.className}
              variant={feature.variant}
              title={feature.title}
              description={feature.description}
              index={index}
            >
              <Badge
                variant="outline"
                className="mb-4 group-hover:bg-secondary"
              >
                {feature.badge}
              </Badge>
              <FeatureTitle className={feature.titleClassName}>
                {feature.title}
              </FeatureTitle>
              <FeatureDescription className={feature.descriptionClassName}>
                {feature.description}
              </FeatureDescription>
              {feature.content && (
                <div className="h-full w-full">{feature.content}</div>
              )}
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}
