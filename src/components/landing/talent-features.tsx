"use client";
import React, { ReactNode } from "react";
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
  const Benefits: Benefit[] = [
    {
      title: "Community based upskill/reskill program",
      description:
        "lorem impus alentify is a talent network of experienced full-stack developers. We expect you to have these",
    },
    {
      title: "Weekly AMA session with tech leads and mentors",
      description:
        "lorem impus alentify is a talent network of experienced full-stack developers. We expect you to have these",
    },
    {
      title: "Work with different companies and projects on demand",
      description:
        "lorem impus alentify is a talent network of experienced full-stack developers. We expect you to have these",
    },
  ];
  const OnboardingProcess: Process[] = [
    {
      title: "Application",
      description:
        "lorem impus alentify is a talent network of experienced full-stack developers. We expect you to have these",
      className: "col-span-1 group min-h-[400px] gap-4 flex flex-col items-center justify-center hover:bg-primary hover:text-black transition ease-in-out duration-300",
      image: apply,
    },
    {
      title: "Review",
      description:
        "lorem impus alentify is a talent network of experienced full-stack developers. We expect you to have these",
        className: "col-span-1 group min-h-[400px] gap-4 flex flex-col items-center justify-center hover:bg-primary hover:text-black transition ease-in-out duration-300",
        image: review,
    },
    {
      title: "Growth",
      description:
        "lorem impus alentify is a talent network of experienced full-stack developers. We expect you to have these",
      className: "col-span-1 group min-h-[400px] gap-4 flex flex-col items-center justify-center hover:bg-primary hover:text-black transition ease-in-out duration-300",
      image: growth,
    },
  ];
  const eligibilityCriteria: EligibilityCriteria[] = [
    {
      title: "You are an experienced developer",
      description:
        "We expect you to have at least 3 years of active industry experience.",
      className: "col-span-1 lg:col-span-2",
    },
    {
      title: "You have a good portfolio",
      description:
        "We just want to make sure you got the stuff in you :). It can be anything. your contribution at your employment, side projects,etc..",
      className: "col-span-1 lg:col-span-2",
    },
    {
      title: "You are an indipendent contractor / you're having a career break",
      description:
        "lorem impus alentify is a talent network of experienced full-stack developers. We expect you to have thes We just want to make sure you got the stuff in you :). It can be anything. your contribution at your employment",
      className: "col-span-1 lg:col-span-4 ",
    },
  ];

  const features: Feature[] = [
    {
      badge: "Eligibility",
      title: "Who you are",
      description:
        "So, Talentify is a talent network of experienced full-stack developers. We expect you to have these",
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
        "col-span-1 lg:col-span-4 border-b lg:border-r py-6  rounded-none md:rounded-tl-lg group",
      variant: "default",
    },
    {
      badge: "Benefits",
      title: "What you get out of this :)",
      description:
        "Yeah, something good to be added here right? and meaningfull something",
      className:
        "border-b col-span-1 lg:col-span-2 rounded-none md:rounded-tr-lg group",
      content: (
        <div className="flex flex-col gap-6 py-6 w-full mt-8">
          {Benefits.map((benefit) => (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="w-full text-start text-lg">
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
    {
      badge: "How it works",
      title: "It's simple three steps, then you're done",
      titleClassName: "md:text-center",
      description:
        "Whether it's you or Tyler Durden, you can get to know about our product on YouTube",
      descriptionClassName: "md:text-center md:w-full md:max-w-3xl md:mx-auto",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 w-full mt-8">
          {OnboardingProcess.map((process, index) => (
            <Card className={process.className} key={index}>
              <CardHeader>
               <Image src={process.image} alt={process.title} className="group-hover:animate-levitate" />
              </CardHeader>
              <CardContent>
              <CardTitle>{process.title}</CardTitle>
                <p>{process.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ),
      className:
        "col-span-1 lg:col-span-6 md:text-center rounded-none md:rounded-b-lg group",
      variant: "default",
    },
  ];

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className=" px-8 text-center">
        <Badge variant={"secondary"} className="py-2 px-4">
          For Devs
        </Badge>
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with thousands of features
        </h4>
        <p className="text-base lg:text-base max-w-2xl my-4 mx-auto text-center font-normal">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore eos
          enim voluptatum accusantium tempora,
        </p>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 px-4 md:px-0 xl:border rounded-md">
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
