import Link from "next/link";
import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";

function Footer() {
  return (
    <footer className="footer w-full flex justify-center flex-col items-center mt-12  bg-neutral-900 ">
      <div className="w-full grid grid-cols-1 lg:grid-cols-6 mt-12 px-4">
        <div className="col-span-2 flex flex-col space-x-5 cursor-pointer">
          <Link href="/" legacyBehavior passHref>
            <Image src={logo} alt="logo" className="object-contain" />
          </Link>
          <p className="text-sm  text-white">
            a community ofvetted & on-demand talent network of experienced
            full-stack developers. Get upskilled, reskilled and hired on demand.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center px-8 mt-6 border-t border-t-accent">
        <div className="justify-self-start">
          <p className="text-sm md:text-base text-white">
            © 2024 Talentify. All rights reserved.
          </p>
        </div>
        <div className="justify-self-end">
          <p className="text-sm md:text-base text-white">
            <a
              href="https://github.com/mirrorfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Built with love by Mirrorfolio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
