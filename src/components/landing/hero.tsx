import React from "react";
import { Button } from "../ui/button";
import heroImage from "../../../public/heroImage.svg";
import Image from "next/image";

function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <div className="grid gap-1.5 md:p-4 items-center text-start">
        <h1 className="text-3xl md:text-5xl font-bold">Together <br /> We grow!</h1>
        <p className="textlg md:text-xl font-light">
         Join a community ofvetted & on-demand talent network of experienced full-stack developers.
         Get upskilled, reskilled and hired on demand.
        </p>
        <Button variant={"default"} size={"default"} className="max-w-xs mt-8 ">
          <p className="text-lg">Join Talentify</p>
        </Button>
      </div>
      <div className="hidden md:grid gap-1.5 md:p-4 items-center">
      <div className="relative group hover:animate-levitate ">
          <div className="absolute inset-0 bg-primary opacity-75 rounded-full blur-3xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <Image 
            src={heroImage} 
            alt="hero image" 
            className="relative z-11 transition duration-1000 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
