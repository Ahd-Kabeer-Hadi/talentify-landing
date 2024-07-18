import React from "react";
import { Button } from "../ui/button";
import heroImage from "../../../public/heroImage.svg";
import Image from "next/image";

function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <div className="grid gap-1.5 md:p-4 items-center text-start">
        <h1 className="text-3xl lg:text-4xl font-bold">
          Where Talent <br /> Meets Opportunity
        </h1>
        <p className="textlg md:text-xl font-light">
          Talentify is a community of vetted & on-demand talent network of experienced
          full-stack developers. Get upskilled, reskilled and hired on demand.
        </p>
        <div className="flex items-center gap-4">
          <Button
            variant="default"
            size="default"
            className="max-w-xs mt-8 transform transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <p className="text-lg">Join Talentify</p>
          </Button>
          {/* <Button
            variant="outline"
            size="default"
            className="max-w-xs mt-8 transform transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <p className="text-lg">Find T Talent</p>
          </Button> */}
        </div>
      </div>
      <div className="hidden md:grid gap-1.5 md:p-4 items-center">
        <div className="relative group hover:animate-levitate ">
          <div className="absolute inset-0 bg-primary opacity-75 rounded-full blur-3xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <Image
            src={heroImage}
            alt="hero image"
            className="relative transition duration-1000 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
