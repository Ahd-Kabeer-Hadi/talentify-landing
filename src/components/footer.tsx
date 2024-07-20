import Link from "next/link";
import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

function Footer() {
  return (
    <footer className="footer w-full flex justify-center flex-col items-center mt-12 bg-neutral-900 text-white">
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12 px-4 py-8">
        <div className="flex flex-col space-y-4">
          <Link href="/" legacyBehavior passHref>
            <Image src={logo} alt="logo" className="object-contain mb-4" />
          </Link>
          <p className="text-sm">
            A community of vetted & on-demand talent network of experienced
            full-stack developers. Get upskilled, reskilled, and hired on
            demand.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h5 className="font-semibold">Quick Links</h5>
          <Link href="/" legacyBehavior passHref>
            <a className="text-sm">About Us</a>
          </Link>

          <Link href="/" legacyBehavior passHref>
            <a className="text-sm">Contact</a>
          </Link>
          <Link href="https://join.slack.com/t/talentifyonde-9cc3667/shared_invite/zt-2n9gyim69-WV_XK58zkslJlcFR4XiV3A"  target="_blank" legacyBehavior passHref>
            <a className="text-sm">HR Club</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h5 className="font-semibold">Resources</h5>
          <Link href="https://discord.gg/aFVjtKwr" target="_blank"  legacyBehavior passHref>
            <a className="text-sm">Dev community</a>
          </Link>
         
          <Link href="/" legacyBehavior passHref>
            <a className="text-sm">Support</a>
          </Link>
          <Link href="/" legacyBehavior passHref>
            <a className="text-sm">Privacy Policy</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h5 className="font-semibold">Company</h5>
          <Link href="/" legacyBehavior passHref>
            <a className="text-sm">Our Team</a>
          </Link>

          <Link href="/" legacyBehavior passHref>
            <a className="text-sm">Partnerships</a>
          </Link>
          <Link href="/" legacyBehavior passHref>
            <a className="text-sm">Terms of Service</a>
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center px-8 py-4 border-t border-t-accent">
        <div>
          <p className="text-sm md:text-base">
            © 2024 Talentify. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandFacebook className="text-white" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandTwitter className="text-white" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin className="text-white" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandInstagram className="text-white" />
          </a>
        </div>
        <div>
          <p className="text-sm md:text-base mt-4 lg:mt-0">
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
